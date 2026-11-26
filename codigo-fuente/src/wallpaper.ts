import { Painting, rng, hash } from './data';

const W = 1290, H = 2796;
const SERIF = '"Iowan Old Style","Palatino Linotype",Palatino,Georgia,serif';

async function load(src: string): Promise<HTMLImageElement> {
  // pasar por fetch + blob evita que el lienzo quede marcado como contaminado
  const r = await fetch(src); const b = await r.blob(); const u = URL.createObjectURL(b);
  return new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = u; });
}
function avg(img: HTMLImageElement): [number, number, number][] {
  const c = document.createElement('canvas'); c.width = 3; c.height = 3;
  const x = c.getContext('2d')!; x.drawImage(img, 0, 0, 3, 3);
  const d = x.getImageData(0, 0, 3, 3).data; const out: [number, number, number][] = [];
  for (let i = 0; i < 9; i++) out.push([d[i * 4], d[i * 4 + 1], d[i * 4 + 2]]);
  return out;
}
function wrap(x: CanvasRenderingContext2D, t: string, max: number): string[] {
  const w = t.split(' '); const lines: string[] = []; let cur = '';
  for (const s of w) { const n = cur ? cur + ' ' + s : s; if (x.measureText(n).width > max && cur) { lines.push(cur); cur = s; } else cur = n; }
  if (cur) lines.push(cur); return lines;
}

export async function makeWallpaper(p: Painting, edition: number): Promise<Blob> {
  const img = await load(p.img);
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const x = c.getContext('2d')!;
  const pal = avg(img);
  const mid = pal[4];
  // 1. fondo: el cuadro reducido y ampliado, un desenfoque natural
  const tiny = document.createElement('canvas'); tiny.width = 18; tiny.height = Math.round(18 * H / W);
  const tx = tiny.getContext('2d')!;
  const s = Math.max(tiny.width / img.width, tiny.height / img.height);
  tx.drawImage(img, (tiny.width - img.width * s) / 2, (tiny.height - img.height * s) / 2, img.width * s, img.height * s);
  x.imageSmoothingEnabled = true; x.imageSmoothingQuality = 'high';
  x.drawImage(tiny, 0, 0, W, H);
  // oscurecer con degradado de museo
  let g = x.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, 'rgba(8,5,10,0.6)'); g.addColorStop(0.45, 'rgba(10,6,12,0.28)'); g.addColorStop(1, 'rgba(6,4,8,0.8)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  // haz de luz del foco
  const light = x.createRadialGradient(W / 2, 1380, 80, W / 2, 1380, 1200);
  light.addColorStop(0, `rgba(${Math.min(255, mid[0] + 90)},${Math.min(255, mid[1] + 80)},${Math.min(255, mid[2] + 60)},0.42)`); light.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = light; x.fillRect(0, 0, W, H);
  x.save(); x.globalCompositeOperation = 'screen';
  const beam = x.createLinearGradient(0, 0, 0, 1500);
  beam.addColorStop(0, 'rgba(255,226,170,0.22)'); beam.addColorStop(1, 'rgba(255,226,170,0)');
  x.fillStyle = beam; x.beginPath(); x.moveTo(W / 2 - 40, 0); x.lineTo(W / 2 + 40, 0); x.lineTo(W / 2 + 560, 1500); x.lineTo(W / 2 - 560, 1500); x.closePath(); x.fill(); x.restore();
  // polvo dorado (distinto en cada cuadro)
  const r = rng(hash(p.id));
  for (let i = 0; i < 160; i++) {
    const px = r() * W, py = r() * H, rad = 1.5 + r() * r() * 7, a = 0.12 + r() * 0.5;
    const gd = x.createRadialGradient(px, py, 0, px, py, rad * 3);
    gd.addColorStop(0, `rgba(255,222,150,${a})`); gd.addColorStop(1, 'rgba(255,222,150,0)');
    x.fillStyle = gd; x.beginPath(); x.arc(px, py, rad * 3, 0, 7); x.fill();
  }
  // 2. marco dorado con el cuadro, bajo la zona del reloj
  const maxW = 900, maxH = 1160; const k = Math.min(maxW / img.width, maxH / img.height);
  const iw = img.width * k, ih = img.height * k; const cx = W / 2; const top = 1000 + (maxH - ih) / 2;
  const ix = cx - iw / 2, iy = top;
  const fr = 46, mat = 18;
  x.save(); x.shadowColor = 'rgba(0,0,0,0.75)'; x.shadowBlur = 110; x.shadowOffsetY = 50;
  x.fillStyle = '#000'; x.fillRect(ix - fr - mat, iy - fr - mat, iw + 2 * (fr + mat), ih + 2 * (fr + mat)); x.restore();
  const gold = x.createLinearGradient(ix - fr, iy - fr, ix + iw + fr, iy + ih + fr);
  gold.addColorStop(0, '#f6dc9a'); gold.addColorStop(0.25, '#b88a35'); gold.addColorStop(0.5, '#f1d48a'); gold.addColorStop(0.75, '#8a6422'); gold.addColorStop(1, '#e8c577');
  x.fillStyle = gold; x.fillRect(ix - fr - mat, iy - fr - mat, iw + 2 * (fr + mat), ih + 2 * (fr + mat));
  x.strokeStyle = 'rgba(60,35,5,0.65)'; x.lineWidth = 3; x.strokeRect(ix - fr - mat + 10, iy - fr - mat + 10, iw + 2 * (fr + mat) - 20, ih + 2 * (fr + mat) - 20);
  x.strokeStyle = 'rgba(255,240,200,0.55)'; x.lineWidth = 2; x.strokeRect(ix - mat - 6, iy - mat - 6, iw + 2 * mat + 12, ih + 2 * mat + 12);
  x.fillStyle = '#17110c'; x.fillRect(ix - mat, iy - mat, iw + 2 * mat, ih + 2 * mat);
  x.drawImage(img, ix, iy, iw, ih);
  // brillo suave sobre el óleo
  const sh = x.createLinearGradient(ix, iy, ix + iw, iy + ih);
  sh.addColorStop(0, 'rgba(255,255,255,0.10)'); sh.addColorStop(0.4, 'rgba(255,255,255,0)'); sh.addColorStop(1, 'rgba(0,0,0,0.18)');
  x.fillStyle = sh; x.fillRect(ix, iy, iw, ih);
  // 3. cartela de latón
  const py = iy + ih + fr + mat + 120; const pw = 760, ph = 200;
  const br = x.createLinearGradient(cx - pw / 2, py, cx + pw / 2, py + ph);
  br.addColorStop(0, '#e9c981'); br.addColorStop(0.5, '#b58a3a'); br.addColorStop(1, '#dcb868');
  x.save(); x.shadowColor = 'rgba(0,0,0,0.6)'; x.shadowBlur = 36; x.shadowOffsetY = 14; x.fillStyle = br; x.fillRect(cx - pw / 2, py, pw, ph); x.restore();
  x.strokeStyle = 'rgba(70,42,8,0.7)'; x.lineWidth = 3; x.strokeRect(cx - pw / 2 + 12, py + 12, pw - 24, ph - 24);
  x.fillStyle = '#2a1a06'; x.textAlign = 'center'; x.textBaseline = 'middle';
  let fs = 56; x.font = `600 ${fs}px ${SERIF}`; const tt = p.title;
  while (fs > 38 && wrap(x, tt, pw - 70).length > 1 && x.measureText(tt).width > (pw - 70) * 1.6) { fs -= 2; x.font = `600 ${fs}px ${SERIF}`; }
  const tl = wrap(x, tt, pw - 70); const ty = py + (tl.length > 1 ? 56 : 76);
  tl.slice(0, 2).forEach((l, i) => x.fillText(l, cx, ty + i * 52));
  x.font = `italic 40px ${SERIF}`; x.fillText(`${p.artist}, ${p.year}`, cx, py + ph - 52);
  // 4. firma de edición
  x.fillStyle = 'rgba(246,222,160,0.8)'; x.font = `500 30px ${SERIF}`;
  (x as any).letterSpacing = '8px';
  x.fillText('AUREA · EDICIÓN N.º ' + String(edition).padStart(3, '0'), cx, py + ph + 100);
  // viñeta final
  const vg = x.createRadialGradient(W / 2, H / 2, H * 0.3, W / 2, H / 2, H * 0.78);
  vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(0,0,0,0.55)');
  x.fillStyle = vg; x.fillRect(0, 0, W, H);
  return new Promise((res, rej) => c.toBlob(b => b ? res(b) : rej(new Error('canvas')), 'image/png'));
}
