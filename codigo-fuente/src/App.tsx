import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocalState } from './files-shim';
import { ROOMS, ALL, CREDITS, TRACKS, Painting, Room, norm, rng, hash } from './data';
import { makeWallpaper } from './wallpaper';

type Save = { solved: Record<string, number>; music: boolean };
type Scene = { name: 'title' } | { name: 'hall' } | { name: 'paint'; id: string } | { name: 'credits' };

/* ---------- sonido ---------- */
let actx: AudioContext | null = null;
function ac() { if (!actx) { const C = (window as any).AudioContext || (window as any).webkitAudioContext; if (C) actx = new C(); } if (actx && actx.state === 'suspended') void actx.resume(); return actx; }
function tone(f: number, t0: number, dur: number, vol: number, type: OscillatorType = 'sine') {
  const a = ac(); if (!a) return; const o = a.createOscillator(), g = a.createGain();
  o.type = type; o.frequency.value = f; g.gain.setValueAtTime(0, a.currentTime + t0); g.gain.linearRampToValueAtTime(vol, a.currentTime + t0 + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + t0 + dur);
  o.connect(g); g.connect(a.destination); o.start(a.currentTime + t0); o.stop(a.currentTime + t0 + dur + 0.05);
}
const sfx = {
  tick: () => tone(880 + Math.random() * 80, 0, 0.09, 0.05, 'triangle'),
  back: () => tone(520, 0, 0.1, 0.04, 'triangle'),
  bad: () => { tone(196, 0, 0.25, 0.07, 'sawtooth'); tone(185, 0.04, 0.25, 0.05, 'sawtooth'); },
  ok: () => [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone(f, i * 0.09, 0.7, 0.07)),
  win: () => [392, 523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((f, i) => tone(f, i * 0.11, 1.2, 0.07)),
};

let silentUrl = '';
function silent() { if (!silentUrl) { const b = Uint8Array.from(atob('UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA='), c => c.charCodeAt(0)); silentUrl = URL.createObjectURL(new Blob([b], { type: 'audio/wav' })); } return silentUrl; }
class Music {
  el: HTMLAudioElement | null = null; src = ''; on = false; timer: any = 0; cache: Record<string, string> = {}; want = ''; order: number[] = []; pos = 0;
  private ensure() { if (!this.el) { const el = new Audio(); this.el = el; el.loop = false; (el as any).playsInline = true; el.preload = 'auto'; el.addEventListener('ended', () => { this.pos = (this.pos + 1) % this.order.length; if (this.on) void this.play(); }); } return this.el; }
  private shuffle() { if (this.order.length) return; const a = TRACKS.map((_, i) => i); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } this.order = a; }
  /* debe llamarse dentro de un toque: desbloquea el audio en iOS */
  unlock() { const el = this.ensure(); if (this.src) return; try { el.src = silent(); el.volume = 1; void el.play().catch(() => { }); } catch { } }
  private async url(src: string) {
    if (this.cache[src]) return this.cache[src];
    try { const r = await fetch(src); const b = await r.blob(); const u = URL.createObjectURL(new Blob([b], { type: 'audio/mpeg' })); this.cache[src] = u; return u; } catch { return src; }
  }
  async play(_ignored?: string) {
    this.shuffle(); this.on = true; const el = this.ensure(); const src = TRACKS[this.order[this.pos]]; this.want = src;
    if (this.src === src && !el.paused) return;
    const u = await this.url(src); if (this.want !== src || !this.on) return;
    if (this.src !== src) { this.src = src; el.src = u; el.currentTime = 0; }
    el.volume = 0; try { await el.play(); } catch { return; }
    this.fade(0.55);
    const nx = TRACKS[this.order[(this.pos + 1) % this.order.length]]; void this.url(nx);
  }
  retry() { if (this.on && this.el && this.el.paused && this.want) { void this.play(); } }
  private fade(to: number) { clearInterval(this.timer); let v = this.el ? this.el.volume : 0; this.timer = setInterval(() => { if (!this.el) return; v += Math.sign(to - v) * 0.03; this.el.volume = Math.max(0, Math.min(1, v)); if (Math.abs(to - v) < 0.03) { this.el.volume = to; clearInterval(this.timer); } }, 70); }
  stop() { this.on = false; if (this.el) { this.el.pause(); } }
}
const music = new Music();

/* ---------- puzzle ---------- */
interface Tile { id: number; ch: string; used: boolean }
interface Phase { words: string[]; target: string; tiles: Tile[]; slots: (number | null)[]; locked: boolean[] }
function makePhase(text: string, seed: number): Phase {
  const words = norm(text).split(' ');
  const target = words.join('');
  const letters = target.split('');
  const r = rng(seed); let arr = letters.slice();
  for (let k = 0; k < 6; k++) { for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } if (arr.join('') !== target) break; }
  return { words, target, tiles: arr.map((ch, id) => ({ id, ch, used: false })), slots: letters.map(() => null), locked: letters.map(() => false) };
}

function Puzzle({ label, text, seed, onSolved, onMistake, onHint, hintsLeft }: { label: string; text: string; seed: number; onSolved: () => void; onMistake: () => void; onHint: () => void; hintsLeft: number }) {
  const [ph, setPh] = useState<Phase>(() => makePhase(text, seed));
  const [shake, setShake] = useState(0);
  const [done, setDone] = useState(false);
  const [cur, setCur] = useState<number | null>(null);
  useEffect(() => { setPh(makePhase(text, seed)); setDone(false); setCur(null); }, [text, seed]);
  const n = ph.target.length; const size = n > 36 ? 22 : n > 24 ? 25 : n > 16 ? 31 : n > 10 ? 35 : 40;
  function check(p: Phase) {
    if (p.slots.some(s => s === null)) return;
    const got = p.slots.map(s => p.tiles[s as number].ch).join('');
    if (got === p.target) { setDone(true); sfx.ok(); setTimeout(onSolved, 900); return; }
    sfx.bad(); onMistake(); setShake(k => k + 1);
    setTimeout(() => setPh(q => { const slots = q.slots.map((s, i) => q.locked[i] ? s : null); const tiles = q.tiles.map(t => ({ ...t, used: slots.includes(t.id) })); return { ...q, slots, tiles }; }), 650);
  }
  function put(id: number) {
    if (done) return; const i = cur !== null && ph.slots[cur] === null ? cur : ph.slots.findIndex(s => s === null); if (i < 0) return; setCur(null);
    const slots = ph.slots.slice(); slots[i] = id; const tiles = ph.tiles.map(t => t.id === id ? { ...t, used: true } : t);
    const np = { ...ph, slots, tiles }; setPh(np); sfx.tick(); check(np);
  }
  function take(i: number) {
    if (done || ph.locked[i]) return;
    if (ph.slots[i] === null) { setCur(cur === i ? null : i); sfx.back(); return; }
    const id = ph.slots[i] as number; setCur(i);
    const slots = ph.slots.slice(); slots[i] = null; setPh({ ...ph, slots, tiles: ph.tiles.map(t => t.id === id ? { ...t, used: false } : t) }); sfx.back();
  }
  function clear() { if (done) return; const slots = ph.slots.map((s, i) => ph.locked[i] ? s : null); setPh({ ...ph, slots, tiles: ph.tiles.map(t => ({ ...t, used: slots.includes(t.id) })) }); sfx.back(); }
  function hint() {
    if (done || hintsLeft <= 0) return;
    const slots = ph.slots.slice(); const tiles = ph.tiles.map(t => ({ ...t }));
    // vaciar la primera casilla incorrecta o vacía y colocar la letra correcta
    const i = slots.findIndex((s, k) => !ph.locked[k] && (s === null || tiles[s].ch !== ph.target[k]));
    if (i < 0) return;
    if (slots[i] !== null) tiles[slots[i] as number].used = false;
    const want = ph.target[i]; let t = tiles.find(q => !q.used && q.ch === want);
    if (!t) { const j = slots.findIndex((s, k) => k !== i && !ph.locked[k] && s !== null && tiles[s].ch === want); if (j < 0) return; t = tiles[slots[j] as number]; slots[j] = null; t.used = false; }
    t.used = true; slots[i] = t.id; const locked = ph.locked.slice(); locked[i] = true;
    const np = { ...ph, slots, tiles, locked }; setPh(np); onHint(); sfx.tick(); check(np);
  }
  let k = 0;
  return <div className="puzzle">
    <div className="plabel">{label}</div>
    <div className={'slots' + (shake ? ' shake' : '')} key={shake}>
      {ph.words.map((w, wi) => <div className="word" key={wi}>{w.split('').map(() => { const i = k++; const s = ph.slots[i]; return <button type="button" key={i} aria-label={s === null ? 'casilla vacía' : 'letra ' + ph.tiles[s].ch}
        className={'slot' + (cur === i && s === null ? ' cur' : '') + (s !== null ? ' on' : '') + (ph.locked[i] ? ' lock' : '') + (done ? ' ok' : '')} style={{ width: size, height: size + 6, fontSize: size * 0.56 }} onClick={() => take(i)}>{s !== null ? ph.tiles[s].ch : ''}</button>; })}</div>)}
    </div>
    <div className="pool">{ph.tiles.map(t => <button type="button" key={t.id} className={'tile' + (t.used ? ' used' : '')} style={{ width: size, height: size + 6, fontSize: size * 0.56 }} disabled={t.used || done} onClick={() => put(t.id)}>{t.ch}</button>)}</div>
    <div className="pbtns"><button type="button" className="ghost" onClick={clear}>Borrar</button><button type="button" className="ghost" disabled={hintsLeft <= 0} onClick={hint}>Pista ({hintsLeft})</button></div>
  </div>;
}

/* ---------- cuadro ---------- */
function Frame({ p, solved, big }: { p: Painting; solved?: boolean; big?: boolean }) {
  return <div className={'frame' + (big ? ' big' : '')}><div className="frame-in"><img src={p.img} alt={solved ? p.title : 'Cuadro por descubrir'} draggable={false} /></div><div className="glass" /></div>;
}

function Plaque({ p, open }: { p: Painting; open: boolean }) {
  return <div className="plaque"><b>{open ? p.title : '· · · · · · · ·'}</b><i>{open ? `${p.artist}, ${p.year}` : 'Obra por identificar'}</i></div>;
}

function Reveal({ p, stars, edition, onNext, hasNext, onHall }: { p: Painting; stars: number; edition: number; onNext: () => void; hasNext: boolean; onHall: () => void }) {
  const [state, setState] = useState<'idle' | 'busy' | 'ready' | 'err'>('idle');
  const [url, setUrl] = useState(''); const blobRef = useRef<Blob | null>(null);
  useEffect(() => () => { if (url) URL.revokeObjectURL(url); }, [url]);
  async function make() {
    setState('busy');
    try { const b = await makeWallpaper(p, edition); blobRef.current = b; setUrl(URL.createObjectURL(b)); setState('ready'); sfx.win(); } catch { setState('err'); }
  }
  async function share() {
    const b = blobRef.current; if (!b) return;
    const file = new File([b], `aurea-${p.id}.png`, { type: 'image/png' });
    const nav: any = navigator;
    try { if (nav.canShare && nav.canShare({ files: [file] })) { await nav.share({ files: [file], title: 'Aurea: ' + p.title }); return; } } catch { return; }
    const a = document.createElement('a'); a.href = url; a.download = `aurea-${p.id}.png`; document.body.appendChild(a); a.click(); a.remove();
  }
  return <div className="reveal">
    <div className="stars">{[1, 2, 3].map(i => <span key={i} className={i <= stars ? 'on' : ''}>★</span>)}</div>
    <p className="story">{p.story}</p>
    <div className="meta">{p.place}</div>
    {state === 'ready' ? <div className="wp">
      <img src={url} alt={'Fondo exclusivo de ' + p.title} />
      <div className="wp-t">Mantén pulsada la imagen y elige "Guardar en Fotos", o usa el botón. Después: Ajustes, Fondo de pantalla, y elige la foto. Deja el zoom de perspectiva activado.</div>
      <button type="button" className="gold" onClick={() => void share()}>Guardar o compartir fondo</button>
    </div> : <div className="unlock"><div className="seal">Fondo exclusivo desbloqueado</div>
      <button type="button" className="gold" disabled={state === 'busy'} onClick={() => void make()}>{state === 'busy' ? 'Preparando tu fondo…' : state === 'err' ? 'Reintentar el fondo' : 'Ver mi fondo para iPhone'}</button></div>}
    <div className="rbtns">{hasNext ? <button type="button" className="ghost" onClick={onNext}>Siguiente obra</button> : null}<button type="button" className="ghost" onClick={onHall}>Volver al vestíbulo</button></div>
  </div>;
}

/* ---------- app ---------- */
export function App() {
  const [save, setSave] = useLocalState<Save>('aurea.v1', { solved: {}, music: true });
  const [scene, setScene] = useState<Scene>({ name: 'title' });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const solved = save.solved;
  const count = Object.keys(solved).length;
  const roomOpen = (_i: number) => true;
  const roomOf = (id: string) => ROOMS.find(r => r.paintings.some(p => p.id === id)) as Room;

  function go(s: Scene) { setScene(s); window.scrollTo(0, 0); const sc = document.querySelector('.stage'); if (sc) (sc as HTMLElement).scrollTop = 0; }
  function startMusic(room?: Room) { music.unlock(); if (save.music) void music.play((room || ROOMS[0]).track); }
  function toggleMusic() { const m = !save.music; setSave({ ...save, music: m }); if (m) { music.unlock(); void music.play(scene.name === 'paint' ? roomOf(scene.id).track : ROOMS[0].track); } else music.stop(); }
  useEffect(() => { if (scene.name === 'paint' && save.music && music.on) void music.play(roomOf(scene.id).track); }, [scene.name === 'paint' ? (scene as any).id : '']);

  const onMove = (e: React.PointerEvent) => { music.retry(); const r = (e.currentTarget as HTMLElement).getBoundingClientRect(); setTilt({ x: ((e.clientX - r.left) / r.width - 0.5) * 2, y: ((e.clientY - r.top) / r.height - 0.5) * 2 }); };
  const parStyle = { ['--tx' as any]: tilt.x.toFixed(3), ['--ty' as any]: tilt.y.toFixed(3) } as React.CSSProperties;

  const musicBtn = <button type="button" className="icon" aria-label="Música" onClick={toggleMusic}>{save.music ? '♪' : '♪̸'}</button>;

  if (scene.name === 'title') return <div className="stage title" onPointerMove={onMove} style={parStyle}>
    <div className="wall" /><div className="spot" />
    <div className="layer l1"><Frame p={ALL[0]} big solved /></div>
    <div className="tcopy"><div className="kick">Un museo de enigmas</div><h1>Aurea</h1>
      <p>Cada sala guarda cuadros sin nombre. Ordena las letras, descubre al artista y la obra, y llévate un fondo para tu iPhone que no existe en ningún otro sitio.</p>
      <button type="button" className="gold" onClick={() => { ac(); startMusic(ROOMS[0]); go({ name: 'hall' }); }} onPointerDown={() => music.unlock()}>Entrar al museo</button>
      <div className="sub">{count > 0 ? `${count} de ${ALL.length} obras descubiertas` : `${ALL.length} obras · ${ROOMS.length} salas · música clásica`}</div></div>
  </div>;

  if (scene.name === 'credits') return <div className="stage hall"><div className="wall" />
    <div className="top"><button type="button" className="icon" onClick={() => go({ name: 'hall' })}>‹</button><div className="tt">Créditos</div>{musicBtn}</div>
    <div className="credits"><p>{CREDITS}</p><p>Los fondos de pantalla son composiciones propias de Aurea a partir de cada obra: marco, cartela y polvo dorado cambian en cada una y llevan un número de edición.</p></div></div>;

  if (scene.name === 'hall') return <div className="stage hall"><div className="wall" />
    <div className="top"><div className="tt">Aurea</div><div className="cnt">{count}/{ALL.length}</div>{musicBtn}</div>
    <div className="hall-in">
      <h2>Vestíbulo</h2><p className="hs">Elige cualquier obra. Cada una guarda su fondo exclusivo.</p>
      {ROOMS.map((room, ri) => { const open = roomOpen(ri); return <section key={room.id} className={'room' + (open ? '' : ' closed')}>
        <header><span className="rn">{room.name}</span><b>{room.era}</b><small>{open ? room.blurb : 'Cerrada. Descubre las tres obras de la sala anterior.'}</small></header>
        <div className="mini">{room.paintings.map(p => { const st = solved[p.id]; return <button type="button" key={p.id} disabled={!open} className={'thumb' + (st ? ' done' : '')} onClick={() => { startMusic(room); go({ name: 'paint', id: p.id }); }}>
          <div className="t-img"><img src={p.img} alt="" loading="lazy" decoding="async" style={{ filter: st ? 'none' : 'blur(9px) brightness(.6) saturate(.8)' }} draggable={false} />{!st && <span className="q">?</span>}</div>
          <span className="t-n">{st ? p.title : 'Sin nombre'}</span>{st ? <span className="t-s">{'★'.repeat(st)}</span> : null}</button>; })}</div>
      </section>; })}
      {count === ALL.length && <div className="finale"><b>Has recorrido todo el museo.</b> Ya tienes todos los fondos. Vuelve a cualquier obra para guardarlos otra vez.</div>}
      <button type="button" className="link" onClick={() => go({ name: 'credits' })}>Créditos</button>
    </div></div>;

  // pintura
  const p = ALL.find(q => q.id === scene.id) as Painting;
  return <PaintingScreen key={p.id} p={p} room={roomOf(p.id)} save={save} setSave={setSave} go={go} musicBtn={musicBtn} onMove={onMove} parStyle={parStyle} />;
}

function PaintingScreen({ p, room, save, setSave, go, musicBtn, onMove, parStyle }: { p: Painting; room: Room; save: Save; setSave: (s: Save) => void; go: (s: Scene) => void; musicBtn: React.ReactNode; onMove: (e: React.PointerEvent) => void; parStyle: React.CSSProperties }) {
  const already = save.solved[p.id] || 0;
  const [step, setStep] = useState<'artist' | 'title' | 'done'>(already ? 'done' : 'artist');
  const [mist, setMist] = useState(0); const [hints, setHints] = useState(0); const [stepHints, setStepHints] = useState(0);
  const [stars, setStars] = useState(already || 3);
  const seed = hash(p.id);
  const idx = ALL.findIndex(q => q.id === p.id); const next = ALL[idx + 1];
  const nextOpen = !!next;
  function roomOf2(id: string) { return ROOMS.find(r => r.paintings.some(q => q.id === id)); }
  function finish() {
    const pen = mist + hints; const st = pen === 0 ? 3 : pen <= 2 ? 2 : 1; setStars(st);
    const prev = save.solved[p.id] || 0; setSave({ ...save, solved: { ...save.solved, [p.id]: Math.max(prev, st) } }); setStep('done'); sfx.win();
  }
  const edition = 1 + ALL.findIndex(q => q.id === p.id) * 7 + (hash(p.id) % 5);
  return <div className={'stage paint' + (step === 'done' ? ' done' : '') + (step !== 'done' && norm(step === 'artist' ? p.artist : p.title).replace(/ /g, '').length > 24 ? ' long' : '')} onPointerMove={onMove} style={{ ...parStyle, ['--H' as any]: Math.max(520, Math.min(window.screen.height || 800, 900) - 190) + 'px' }}>
    <div className="wall" /><div className="spot" />
    <div className="top"><button type="button" className="icon" aria-label="Volver" onClick={() => go({ name: 'hall' })}>‹</button><div className="tt">{room.name} · {room.era}</div>{musicBtn}</div>
    <div className="layer l1"><Frame p={p} solved={step === 'done'} /></div>
    <Plaque p={p} open={step === 'done'} />
    {step !== 'done' ? <>
      <Puzzle key={step} label={step === 'artist' ? 'Paso 1 · ¿Quién lo pintó?' : 'Paso 2 · ¿Cómo se llama la obra?'} text={step === 'artist' ? p.artist : p.title} seed={seed + (step === 'artist' ? 1 : 2)} hintsLeft={3 - stepHints}
        onMistake={() => setMist(m => m + 1)} onHint={() => { setHints(h => h + 1); setStepHints(h => h + 1); }} onSolved={() => step === 'artist' ? (setStepHints(0), setStep('title')) : finish()} />
      <div className="foot">3 pistas por paso. Pistas y fallos restan estrellas.</div></>
      : <Reveal p={p} stars={stars} edition={edition} hasNext={!!next && nextOpen} onNext={() => next && go({ name: 'paint', id: next.id })} onHall={() => go({ name: 'hall' })} />}
  </div>;
}
