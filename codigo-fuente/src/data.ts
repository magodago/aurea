import gioconda from './art/gioconda.jpg';
import venus from './art/venus.jpg';
import adan from './art/adan.jpg';
import meninas from './art/meninas.jpg';
import perla from './art/perla.jpg';
import rembrandt from './art/rembrandt.jpg';
import caminante from './art/caminante.jpg';
import ola from './art/ola.jpg';
import impresion from './art/impresion.jpg';
import noche from './art/noche.jpg';
import grito from './art/grito.jpg';
import beso from './art/beso.jpg';
import cenaImg from './art/cena.jpg';
import atenasImg from './art/atenas.jpg';
import primaveraImg from './art/primavera.jpg';
import vitruvioImg from './art/vitruvio.jpg';
import arminoImg from './art/armino.jpg';
import urbinoImg from './art/urbino.jpg';
import tempestadImg from './art/tempestad.jpg';
import arnolfiniImg from './art/arnolfini.jpg';
import embajadoresImg from './art/embajadores.jpg';
import jardinImg from './art/jardin.jpg';
import cazadoresImg from './art/cazadores.jpg';
import orgazImg from './art/orgaz.jpg';
import toledoImg from './art/toledo.jpg';
import rendicionImg from './art/rendicion.jpg';
import espejoImg from './art/espejo.jpg';
import bacoImg from './art/baco.jpg';
import lecheraImg from './art/lechera.jpg';
import rondaImg from './art/ronda.jpg';
import tulpImg from './art/tulp.jpg';
import prodigoImg from './art/prodigo.jpg';
import caballeroImg from './art/caballero.jpg';
import vocacionImg from './art/vocacion.jpg';
import columpioImg from './art/columpio.jpg';
import saturnoImg from './art/saturno.jpg';
import tresmayoImg from './art/tresmayo.jpg';
import maratImg from './art/marat.jpg';
import odaliscaImg from './art/odalisca.jpg';
import libertadImg from './art/libertad.jpg';
import medusaImg from './art/medusa.jpg';
import carroImg from './art/carro.jpg';
import espigadorasImg from './art/espigadoras.jpg';
import angelusImg from './art/angelus.jpg';
import ornansImg from './art/ornans.jpg';
import whistlerImg from './art/whistler.jpg';
import hierbaImg from './art/hierba.jpg';
import olimpiaImg from './art/olimpia.jpg';
import foliesImg from './art/folies.jpg';
import moulinImg from './art/moulin.jpg';
import remerosImg from './art/remeros.jpg';
import jatteImg from './art/jatte.jpg';
import danzaImg from './art/danza.jpg';
import jugadoresImg from './art/jugadores.jpg';
import girasolesImg from './art/girasoles.jpg';
import terrazaImg from './art/terraza.jpg';
import habitacionImg from './art/habitacion.jpg';
import orejaImg from './art/oreja.jpg';
import patatasImg from './art/patatas.jpg';
import cuervosImg from './art/cuervos.jpg';
import gauguinImg from './art/gauguin.jpg';
import gitanaImg from './art/gitana.jpg';
import adeleImg from './art/adele.jpg';
import negroImg from './art/negro.jpg';
import majaImg from './art/maja.jpg';
import turnerImg from './art/turner.jpg';
import hayezImg from './art/hayez.jpg';
import temerarioImg from './art/temerario.jpg';
import canaImg from './art/cana.jpg';
import rodanoImg from './art/rodano.jpg';
import liriosImg from './art/lirios.jpg';
import parasolImg from './art/parasol.jpg';
import ajenjoImg from './art/ajenjo.jpg';
import gainsboroughImg from './art/gainsborough.jpg';
import inocencioImg from './art/inocencio.jpg';
import juicioImg from './art/juicio.jpg';
import hilanderasImg from './art/hilanderas.jpg';
import sixtinaImg from './art/sixtina.jpg';
import paraguasImg from './art/paraguas.jpg';
import salvatorImg from './art/salvator.jpg';
import encajeraImg from './art/encajera.jpg';
import delftImg from './art/delft.jpg';
import familiaImg from './art/familia.jpg';
import cristoImg from './art/cristo.jpg';
import aguadorImg from './art/aguador.jpg';
import agnusImg from './art/agnus.jpg';
import transfigImg from './art/transfig.jpg';
import ariadnaImg from './art/ariadna.jpg';
import babelImg from './art/babel.jpg';
import arteImg from './art/arte.jpg';
import noviaImg from './art/novia.jpg';
import citeraImg from './art/citera.jpg';
import monjeImg from './art/monje.jpg';
import cafeImg from './art/cafe.jpg';
import suenoImg from './art/sueno.jpg';
import judithImg from './art/judith.jpg';
import mondrianImg from './art/mondrian.jpg';
import madamexImg from './art/madamex.jpg';
import fujiImg from './art/fuji.jpg';
import hiroshigeImg from './art/hiroshige.jpg';
import satie from './music/satie.mp3';
import chopin from './music/chopin.mp3';
import debussy from './music/debussy.mp3';
import chopin55 from './music/chopin55.mp3';
import chopin15 from './music/chopin15.mp3';
import bach from './music/bach.mp3';
import beethoven from './music/beethoven.mp3';
import mozart from './music/mozart.mp3';
import vivaldi1 from './music/vivaldi1.mp3';
import vivaldi2 from './music/vivaldi2.mp3';
export const TRACKS: string[] = [debussy, bach, mozart, chopin, vivaldi1, beethoven, satie, chopin15, vivaldi2, chopin55];

export interface Painting { id: string; img: string; artist: string; title: string; year: string; place: string; story: string; }
export interface Room { id: string; name: string; era: string; blurb: string; track: string; paintings: Painting[]; }

const BASE: Room[] = [
  { id: 'I', name: 'Sala I', era: 'El Renacimiento', blurb: 'Luz, perspectiva y mito. Italia, 1485 a 1511.', track: satie, paintings: [
    { id: 'gioconda', img: gioconda, artist: 'Leonardo da Vinci', title: 'La Gioconda', year: 'h. 1503-1519', place: 'Museo del Louvre, París', story: 'Leonardo no la entregó nunca a quien la encargó: se la llevó a Francia y siguió retocándola hasta el final de su vida. La sonrisa nace del sfumato, contornos sin líneas, solo veladuras.' },
    { id: 'venus', img: venus, artist: 'Sandro Botticelli', title: 'El nacimiento de Venus', year: 'h. 1485', place: 'Galería de los Uffizi, Florencia', story: 'Uno de los primeros grandes temas mitológicos pintados sobre lienzo en la Italia del Quattrocento. Céfiro empuja a Venus hasta la orilla y una de las Horas la espera con un manto.' },
    { id: 'adan', img: adan, artist: 'Miguel Ángel', title: 'La creación de Adán', year: 'h. 1511', place: 'Capilla Sixtina, Vaticano', story: 'Entre el dedo de Dios y el de Adán queda un hueco de apenas unos centímetros. Miguel Ángel pintó ese instante en el techo de la Capilla Sixtina, desde andamios, con el cuello torcido hacia arriba.' }] },
  { id: 'II', name: 'Sala II', era: 'El Barroco', blurb: 'Sombras profundas y miradas que te siguen. Siglo XVII.', track: chopin, paintings: [
    { id: 'meninas', img: meninas, artist: 'Diego Velázquez', title: 'Las meninas', year: '1656', place: 'Museo del Prado, Madrid', story: 'Velázquez se pinta a sí mismo trabajando, con la infanta Margarita en el centro y los reyes reflejados en el espejo del fondo. ¿Quién mira a quién? Nadie lo ha resuelto del todo.' },
    { id: 'perla', img: perla, artist: 'Johannes Vermeer', title: 'La joven de la perla', year: 'h. 1665', place: 'Mauritshuis, La Haya', story: 'No es un retrato por encargo, sino un tronie: un estudio de expresión. El pendiente, apenas un par de toques de luz, es lo más famoso del cuadro.' },
    { id: 'rembrandt', img: rembrandt, artist: 'Rembrandt', title: 'Autorretrato', year: '1659', place: 'National Gallery of Art, Washington', story: 'Rembrandt se retrató decenas de veces a lo largo de su vida. Aquí, a los 53 años, el rostro curtido ocupa toda la luz y el resto se hunde en la sombra.' }] },
  { id: 'III', name: 'Sala III', era: 'El siglo XIX', blurb: 'Niebla, olas y amaneceres. El mundo se vuelve emoción.', track: debussy, paintings: [
    { id: 'caminante', img: caminante, artist: 'Caspar David Friedrich', title: 'El caminante sobre el mar de nubes', year: 'h. 1818', place: 'Kunsthalle, Hamburgo', story: 'Un hombre de espaldas ante la niebla: el gran símbolo del Romanticismo. No sabemos quién es, y por eso cualquiera puede ponerse en su lugar.' },
    { id: 'ola', img: ola, artist: 'Hokusai', title: 'La gran ola de Kanagawa', year: 'h. 1831', place: 'Estampa ukiyo-e, Japón', story: 'Forma parte de las Treinta y seis vistas del monte Fuji. Busca el Fuji: es diminuto, al fondo, bajo una ola que parece una garra.' },
    { id: 'impresion', img: impresion, artist: 'Claude Monet', title: 'Impresión, sol naciente', year: '1872', place: 'Museo Marmottan Monet, París', story: 'Un puerto de Le Havre al amanecer, pintado muy deprisa. Un crítico usó su título para burlarse del grupo, y de esa burla salió el nombre de impresionismo.' }] },
  { id: 'IV', name: 'Sala IV', era: 'La modernidad', blurb: 'Color, oro y angustia. Del cielo de Van Gogh a Viena.', track: satie, paintings: [
    { id: 'noche', img: noche, artist: 'Vincent van Gogh', title: 'La noche estrellada', year: '1889', place: 'MoMA, Nueva York', story: 'La pintó de memoria, de día, desde la ventana de su cuarto en el sanatorio de Saint-Rémy. El pueblo es inventado; el cielo, su mundo interior.' },
    { id: 'grito', img: grito, artist: 'Edvard Munch', title: 'El grito', year: '1893', place: 'Galería Nacional, Oslo', story: 'Munch contó que sintió un grito infinito atravesando la naturaleza. El personaje se tapa los oídos: el grito viene del paisaje entero.' },
    { id: 'beso', img: beso, artist: 'Gustav Klimt', title: 'El beso', year: '1907-1908', place: 'Belvedere, Viena', story: 'Lleva hoja de oro auténtica sobre el lienzo. Klimt heredó esa idea de los mosaicos bizantinos de Rávena, que lo marcaron en un viaje.' }] },
];

const NEW: Painting[] = [
  { id: 'hilanderas', img: hilanderasImg, artist: 'Diego Velázquez', title: 'Las hilanderas', year: 'h. 1655', place: 'Museo del Prado, Madrid', story: 'Al fondo, un tapiz imita la escena mitológica de Aracne; delante, las hilanderas trabajan en un taller real. Velázquez mezcla el mito y el oficio en un solo cuadro.' },
  { id: 'sixtina', img: sixtinaImg, artist: 'Rafael', title: 'La Madonna Sixtina', year: '1512', place: 'Gemäldegalerie, Dresde', story: 'Los dos angelitos apoyados abajo, aburridos y pensativos, se han hecho más famosos que el resto del cuadro y salen en postales y estampados de todo el mundo.' },
  { id: 'paraguas', img: paraguasImg, artist: 'Pierre-Auguste Renoir', title: 'Los paraguas', year: 'h. 1881-1886', place: 'National Gallery, Londres', story: 'Renoir lo empezó con pincelada suelta impresionista y lo terminó años después con un dibujo más firme, tras su viaje a Italia.' },
  { id: 'salvator', img: salvatorImg, artist: 'Leonardo da Vinci', title: 'Salvator Mundi', year: 'h. 1500', place: 'Colección privada', story: 'En 2017 se subastó en Christie\'s por 450,3 millones de dólares, el precio más alto pagado por una obra en subasta. Algunos expertos debaten todavía su atribución.' },
  { id: 'encajera', img: encajeraImg, artist: 'Johannes Vermeer', title: 'La encajera', year: 'h. 1669-1670', place: 'Museo del Louvre, París', story: 'Es uno de sus cuadros más pequeños, de apenas 24 por 21 centímetros, y los hilos del primer plano están desenfocados como en una fotografía.' },
  { id: 'delft', img: delftImg, artist: 'Johannes Vermeer', title: 'Vista de Delft', year: 'h. 1660-1661', place: 'Mauritshuis, La Haya', story: 'Marcel Proust lo llamó el cuadro más hermoso del mundo y hace que un personaje de su novela se asome a contemplarlo.' },
  { id: 'familia', img: familiaImg, artist: 'Francisco de Goya', title: 'La familia de Carlos IV', year: '1800', place: 'Museo del Prado, Madrid', story: 'Goya se pinta a sí mismo en la penumbra, al fondo a la izquierda, como Velázquez en Las meninas. Retrata a la familia real sin ningún halago.' },
  { id: 'cristo', img: cristoImg, artist: 'Diego Velázquez', title: 'Cristo crucificado', year: 'h. 1632', place: 'Museo del Prado, Madrid', story: 'Cristo aparece clavado con cuatro clavos y no con tres, con la cabeza caída y el pelo tapándole parte del rostro. Un fondo negro lo aísla por completo.' },
  { id: 'aguador', img: aguadorImg, artist: 'Diego Velázquez', title: 'El aguador de Sevilla', year: 'h. 1620', place: 'Apsley House, Londres', story: 'Pintado con poco más de veinte años, retrata a un aguador de la calle con la dignidad de un personaje histórico.' },
  { id: 'agnus', img: agnusImg, artist: 'Francisco de Zurbarán', title: 'Agnus Dei', year: 'h. 1635-1640', place: 'Museo del Prado, Madrid', story: 'Un cordero atado, sin más escenario que una luz fría. Zurbarán convierte un símbolo sagrado en un animal real que casi se puede tocar.' },
  { id: 'transfig', img: transfigImg, artist: 'Rafael', title: 'La Transfiguración', year: '1516-1520', place: 'Pinacoteca Vaticana, Roma', story: 'Fue su última obra: Rafael murió en 1520 sin terminarla y la acabaron sus discípulos. Según Vasari, se expuso junto a su cuerpo durante el velatorio.' },
  { id: 'ariadna', img: ariadnaImg, artist: 'Tiziano', title: 'Baco y Ariadna', year: '1520-1523', place: 'National Gallery, Londres', story: 'El azul del cielo y del manto de Ariadna se hizo con lapislázuli molido, uno de los pigmentos más caros de la época. Baco salta del carro nada más verla.' },
  { id: 'babel', img: babelImg, artist: 'Pieter Brueghel el Viejo', title: 'La torre de Babel', year: '1563', place: 'Kunsthistorisches Museum, Viena', story: 'Los obreros son diminutos al lado de la torre, que recuerda al Coliseo romano. Brueghel la pobló de detalles que se descubren con lupa.' },
  { id: 'arte', img: arteImg, artist: 'Johannes Vermeer', title: 'El arte de la pintura', year: 'h. 1666', place: 'Kunsthistorisches Museum, Viena', story: 'Vermeer se pinta de espaldas ante el caballete. Se lo quedó hasta su muerte y nunca lo vendió.' },
  { id: 'novia', img: noviaImg, artist: 'Rembrandt', title: 'La novia judía', year: 'h. 1665', place: 'Rijksmuseum, Ámsterdam', story: 'Un hombre posa la mano sobre el pecho de una mujer en un gesto de ternura. Se cuenta que Van Gogh dijo que daría diez años de su vida por pasar quince días ante este cuadro.' },
  { id: 'citera', img: citeraImg, artist: 'Antoine Watteau', title: 'El embarque para Citera', year: '1717', place: 'Museo del Louvre, París', story: 'Parejas de enamorados se disponen a dejar la isla del amor. Con este cuadro Watteau inauguró un género nuevo: las fiestas galantes.' },
  { id: 'monje', img: monjeImg, artist: 'Caspar David Friedrich', title: 'El monje junto al mar', year: '1808-1810', place: 'Alte Nationalgalerie, Berlín', story: 'Una figura minúscula ante un cielo inmenso. Las radiografías han mostrado que Friedrich pintó dos barcos y luego los borró.' },
  { id: 'cafe', img: cafeImg, artist: 'Vincent van Gogh', title: 'El café nocturno', year: '1888', place: 'Galería de Arte de la Universidad de Yale', story: 'Van Gogh escribió que con rojos y verdes violentos había querido expresar las terribles pasiones humanas.' },
  { id: 'sueno', img: suenoImg, artist: 'Henri Rousseau', title: 'El sueño', year: '1910', place: 'MoMA, Nueva York', story: 'Fue su último gran cuadro. Rousseau, autodidacta, escribió un poema para acompañarlo.' },
  { id: 'judith', img: judithImg, artist: 'Gustav Klimt', title: 'Judith y la cabeza de Holofernes', year: '1901', place: 'Belvedere, Viena', story: 'Una heroína bíblica retratada como mujer fatal, con un collar de oro que le tapa el cuello. Klimt usó láminas de oro, como después en El beso.' },
  { id: 'mondrian', img: mondrianImg, artist: 'Piet Mondrian', title: 'Composición con rojo, azul y amarillo', year: '1930', place: 'Kunsthaus, Zúrich', story: 'Solo líneas negras y colores primarios. Mondrian buscaba un orden universal y fundó el neoplasticismo.' },
  { id: 'madamex', img: madamexImg, artist: 'John Singer Sargent', title: 'Madame X', year: '1884', place: 'Metropolitan Museum, Nueva York', story: 'El tirante del vestido, caído sobre el hombro en la primera versión, provocó un escándalo en el Salón de París. Sargent lo repintó en su sitio y se fue a vivir a Londres.' },
  { id: 'fuji', img: fujiImg, artist: 'Hokusai', title: 'Fuji rojo', year: 'h. 1830-1832', place: 'Estampa ukiyo-e, Japón', story: 'Pertenece a la misma serie que La gran ola. Con los primeros rayos del verano, el Fuji se tiñe de rojo.' },
  { id: 'hiroshige', img: hiroshigeImg, artist: 'Utagawa Hiroshige', title: 'Chubasco sobre el puente Ohashi', year: '1857', place: 'Estampa ukiyo-e, Japón', story: 'Van Gogh copió esta estampa al óleo en 1887. La lluvia fina, hecha con líneas, es de lo más imitado del arte japonés en Occidente.' },
  { id: 'maja', img: majaImg, artist: 'Francisco de Goya', title: 'La maja desnuda', year: 'h. 1797-1800', place: 'Museo del Prado, Madrid', story: 'Pintada para el valido Manuel Godoy, convivió en secreto con La maja vestida. Era un desnudo sin excusa mitológica, y la Inquisición llamó a Goya a declarar por ella.' },
  { id: 'turner', img: turnerImg, artist: 'J. M. W. Turner', title: 'Lluvia, vapor y velocidad', year: '1844', place: 'National Gallery, Londres', story: 'Un tren del Great Western Railway se lanza hacia nosotros entre la bruma. Turner pintó la velocidad de la era industrial como una mancha de luz.' },
  { id: 'hayez', img: hayezImg, artist: 'Francesco Hayez', title: 'El beso', year: '1859', place: 'Pinacoteca de Brera, Milán', story: 'Un beso de despedida convertido en símbolo del Romanticismo italiano. Se ha leído también como un guiño a la causa de la unificación de Italia.' },
  { id: 'temerario', img: temerarioImg, artist: 'J. M. W. Turner', title: 'El Temerario', year: '1839', place: 'National Gallery, Londres', story: 'Un viejo navío de Trafalgar es remolcado por un vapor hacia el desguace. Turner enfrenta el ocaso de la vela con el nacimiento del vapor.' },
  { id: 'cana', img: canaImg, artist: 'Paolo Veronese', title: 'Las bodas de Caná', year: '1562-1563', place: 'Museo del Louvre, París', story: 'Es el lienzo más grande del Louvre y cuelga frente a la Gioconda. Veronese pintó más de cien figuras en un banquete veneciano.' },
  { id: 'rodano', img: rodanoImg, artist: 'Vincent van Gogh', title: 'Noche estrellada sobre el Ródano', year: '1888', place: 'Museo de Orsay, París', story: 'La pintó al aire libre en Arlés, a la luz de gas. Las estrellas de la Osa Mayor se reflejan en el río.' },
  { id: 'lirios', img: liriosImg, artist: 'Vincent van Gogh', title: 'Los lirios', year: '1889', place: 'Museo Getty, Los Ángeles', story: 'Lo pintó en el jardín del sanatorio de Saint-Rémy, recién llegado, como una vía de escape del encierro.' },
  { id: 'parasol', img: parasolImg, artist: 'Claude Monet', title: 'La mujer del parasol', year: '1875', place: 'National Gallery of Art, Washington', story: 'Madame Monet y su hijo Jean, vistos desde abajo en una colina. Monet lo pintó de un tirón, con el viento moviendo el vestido y las nubes.' },
  { id: 'ajenjo', img: ajenjoImg, artist: 'Edgar Degas', title: 'El ajenjo', year: '1875-1876', place: 'Museo de Orsay, París', story: 'Una mujer ausente ante un vaso de ajenjo en un café de París. Degas compuso la escena descentrada, como si fuera una fotografía.' },
  { id: 'gainsborough', img: gainsboroughImg, artist: 'Thomas Gainsborough', title: 'El niño azul', year: 'h. 1770', place: 'Biblioteca Huntington, California', story: 'Gainsborough usó el azul para llevar la contraria a Reynolds, que decía que ese color no debía dominar un cuadro. En 1921 se vendió por una cifra récord y cruzó el Atlántico.' },
  { id: 'inocencio', img: inocencioImg, artist: 'Diego Velázquez', title: 'Retrato de Inocencio X', year: '1650', place: 'Galería Doria Pamphilj, Roma', story: 'Se cuenta que el papa dijo que era demasiado verdadero. Velázquez lo pintó en Roma, con rojos sobre rojos.' },
  { id: 'juicio', img: juicioImg, artist: 'Miguel Ángel', title: 'El juicio final', year: '1536-1541', place: 'Capilla Sixtina, Vaticano', story: 'Ocupa todo el muro del altar. Escandalizó por tantos desnudos, y más tarde se encargó a otro pintor cubrir algunos.' },
  { id: 'cena', img: cenaImg, artist: 'Leonardo da Vinci', title: 'La última cena', year: '1495-1498', place: 'Santa Maria delle Grazie, Milán', story: 'Leonardo pintó al seco sobre el muro en lugar de al fresco, y por eso empezó a deteriorarse en vida suya. Captura el instante en que Jesús anuncia que uno de los doce lo traicionará.' },
  { id: 'atenas', img: atenasImg, artist: 'Rafael', title: 'La escuela de Atenas', year: '1509-1511', place: 'Palacios Vaticanos, Roma', story: 'En el centro, Platón señala al cielo y Aristóteles extiende la mano hacia la tierra. Rafael reunió en una sola sala a los grandes filósofos de la Antigüedad.' },
  { id: 'primavera', img: primaveraImg, artist: 'Sandro Botticelli', title: 'La primavera', year: 'h. 1480', place: 'Galería de los Uffizi, Florencia', story: 'Más de cien especies de plantas se han identificado en el prado. Es una de las obras más enigmáticas del Renacimiento: nadie ha fijado del todo su significado.' },
  { id: 'vitruvio', img: vitruvioImg, artist: 'Leonardo da Vinci', title: 'El hombre de Vitruvio', year: 'h. 1490', place: 'Gallerie dell\'Accademia, Venecia', story: 'Un dibujo a pluma que ilustra las proporciones ideales del cuerpo humano descritas por el arquitecto romano Vitruvio. Se ha convertido en símbolo del humanismo.' },
  { id: 'armino', img: arminoImg, artist: 'Leonardo da Vinci', title: 'La dama del armiño', year: '1489-1491', place: 'Museo Czartoryski, Cracovia', story: 'Retrata a Cecilia Gallerani, joven de la corte de Milán. El armiño simbolizaba la pureza y era también emblema de su protector, Ludovico Sforza.' },
  { id: 'urbino', img: urbinoImg, artist: 'Tiziano', title: 'Venus de Urbino', year: '1538', place: 'Galería de los Uffizi, Florencia', story: 'Una Venus que mira directamente al espectador, sin pretextos mitológicos. Inspiró directamente la Olimpia de Manet tres siglos después.' },
  { id: 'tempestad', img: tempestadImg, artist: 'Giorgione', title: 'La tempestad', year: 'h. 1508', place: 'Gallerie dell\'Accademia, Venecia', story: 'Nadie sabe con certeza qué cuenta: un soldado, una mujer que amamanta y un rayo sobre la ciudad. Es uno de los grandes misterios de la pintura veneciana.' },
  { id: 'arnolfini', img: arnolfiniImg, artist: 'Jan van Eyck', title: 'El matrimonio Arnolfini', year: '1434', place: 'National Gallery, Londres', story: 'En el espejo del fondo se ve a dos figuras más, y sobre él, la firma del pintor con la frase: Jan van Eyck estuvo aquí. Un hito de la pintura al óleo.' },
  { id: 'embajadores', img: embajadoresImg, artist: 'Hans Holbein el Joven', title: 'Los embajadores', year: '1533', place: 'National Gallery, Londres', story: 'En primer plano flota una mancha deforme: es una calavera que solo se reconoce mirando el cuadro desde un lado, un recordatorio de la muerte entre dos hombres poderosos.' },
  { id: 'jardin', img: jardinImg, artist: 'El Bosco', title: 'El jardín de las delicias', year: 'h. 1500', place: 'Museo del Prado, Madrid', story: 'Un tríptico que va del paraíso al infierno pasando por un jardín de placeres imposibles. Felipe II lo admiraba tanto que se quedó en España y hoy es uno de los tesoros del Prado.' },
  { id: 'cazadores', img: cazadoresImg, artist: 'Pieter Brueghel el Viejo', title: 'Cazadores en la nieve', year: '1565', place: 'Kunsthistorisches Museum, Viena', story: 'Pertenece a una serie sobre las estaciones. Los cazadores vuelven con poca presa mientras abajo, en el hielo, el pueblo patina.' },
  { id: 'orgaz', img: orgazImg, artist: 'El Greco', title: 'El entierro del conde de Orgaz', year: '1586-1588', place: 'Iglesia de Santo Tomé, Toledo', story: 'Se divide en dos mundos: abajo, un entierro en Toledo; arriba, el cielo que recibe al conde. Sigue colgado en la iglesia para la que se pintó.' },
  { id: 'toledo', img: toledoImg, artist: 'El Greco', title: 'Vista de Toledo', year: 'h. 1600', place: 'Metropolitan Museum, Nueva York', story: 'Uno de los primeros paisajes puros de la pintura española. El Greco movió edificios a su gusto para dar más dramatismo a una tormenta que nunca se rompe.' },
  { id: 'rendicion', img: rendicionImg, artist: 'Diego Velázquez', title: 'La rendición de Breda', year: '1635', place: 'Museo del Prado, Madrid', story: 'Un vencedor que no humilla: Spínola recibe las llaves de la ciudad sin que Justino de Nassau se arrodille. Las lanzas del fondo le dieron el nombre de Las lanzas.' },
  { id: 'espejo', img: espejoImg, artist: 'Diego Velázquez', title: 'La Venus del espejo', year: '1647-1651', place: 'National Gallery, Londres', story: 'Es el único desnudo femenino que se conserva de Velázquez. Venus nos mira a través del espejo, pero su rostro aparece borroso a propósito.' },
  { id: 'baco', img: bacoImg, artist: 'Diego Velázquez', title: 'El triunfo de Baco', year: '1629', place: 'Museo del Prado, Madrid', story: 'Conocido como Los borrachos. Velázquez mezcla al dios del vino con campesinos reales, y el resultado sabe más a taberna que a Olimpo.' },
  { id: 'lechera', img: lecheraImg, artist: 'Johannes Vermeer', title: 'La lechera', year: 'h. 1658', place: 'Rijksmuseum, Ámsterdam', story: 'Una criada vierte leche con una calma casi solemne. La luz que entra por la ventana convierte un gesto cotidiano en algo monumental.' },
  { id: 'ronda', img: rondaImg, artist: 'Rembrandt', title: 'La ronda de noche', year: '1642', place: 'Rijksmuseum, Ámsterdam', story: 'No es una escena nocturna: el barniz oscurecido la hizo parecerlo durante siglos. Es un retrato de grupo con movimiento, nada habitual en su época.' },
  { id: 'tulp', img: tulpImg, artist: 'Rembrandt', title: 'La lección de anatomía', year: '1632', place: 'Mauritshuis, La Haya', story: 'Con solo 26 años, Rembrandt se hizo famoso con este retrato de grupo. El doctor Tulp enseña los tendones del brazo a un grupo de cirujanos.' },
  { id: 'prodigo', img: prodigoImg, artist: 'Rembrandt', title: 'El regreso del hijo pródigo', year: 'h. 1668', place: 'Museo del Hermitage, San Petersburgo', story: 'Una de sus últimas obras. Las manos del padre, una fuerte y otra suave, son el centro emocional de un abrazo que ocupa casi todo el lienzo.' },
  { id: 'caballero', img: caballeroImg, artist: 'Frans Hals', title: 'El caballero sonriente', year: '1624', place: 'Wallace Collection, Londres', story: 'El hombre ni sonríe del todo ni es un caballero: es un retrato de un joven holandés. El apodo llegó siglos después, cuando el cuadro se hizo famoso.' },
  { id: 'vocacion', img: vocacionImg, artist: 'Caravaggio', title: 'La vocación de san Mateo', year: '1599-1600', place: 'San Luis de los Franceses, Roma', story: 'Un haz de luz entra por la derecha y señala al recaudador de impuestos. Caravaggio convirtió una escena sagrada en una taberna romana.' },
  { id: 'columpio', img: columpioImg, artist: 'Jean-Honoré Fragonard', title: 'El columpio', year: 'h. 1767', place: 'Wallace Collection, Londres', story: 'Un joven escondido entre los arbustos mira a una mujer que se columpia y lanza al aire un zapato. Es el emblema del rococó, con su picardía y sus rosas.' },
  { id: 'saturno', img: saturnoImg, artist: 'Francisco de Goya', title: 'Saturno devorando a su hijo', year: '1819-1823', place: 'Museo del Prado, Madrid', story: 'Goya lo pintó en las paredes de su casa, la Quinta del Sordo, sin pensar en exponerlo. Siglos después fue trasladado a lienzo y hoy está en el Prado.' },
  { id: 'tresmayo', img: tresmayoImg, artist: 'Francisco de Goya', title: 'Los fusilamientos del tres de mayo', year: '1814', place: 'Museo del Prado, Madrid', story: 'El fusilado de camisa blanca abre los brazos bajo la luz del farol. Goya pintó el horror de la guerra sin héroes, solo con víctimas.' },
  { id: 'marat', img: maratImg, artist: 'Jacques-Louis David', title: 'La muerte de Marat', year: '1793', place: 'Museos Reales de Bellas Artes, Bruselas', story: 'Marat fue asesinado en su bañera. David, su amigo y revolucionario, lo pintó como a un mártir, con una composición que recuerda a una piedad.' },
  { id: 'odalisca', img: odaliscaImg, artist: 'Jean-Auguste-Dominique Ingres', title: 'La gran odalisca', year: '1814', place: 'Museo del Louvre, París', story: 'A Ingres le gustó tanto la elegancia de la línea que alargó la espalda de la modelo con vértebras de más. La crítica lo notó enseguida.' },
  { id: 'libertad', img: libertadImg, artist: 'Eugène Delacroix', title: 'La libertad guiando al pueblo', year: '1830', place: 'Museo del Louvre, París', story: 'Pintada tras la Revolución de Julio. Libertad, con la bandera tricolor, lidera a gente de todas las clases sociales sobre los cuerpos caídos.' },
  { id: 'medusa', img: medusaImg, artist: 'Théodore Géricault', title: 'La balsa de la Medusa', year: '1818-1819', place: 'Museo del Louvre, París', story: 'Retrata los supervivientes de un naufragio real, abandonados en una balsa. Géricault estudió cadáveres de verdad para pintarlo.' },
  { id: 'carro', img: carroImg, artist: 'John Constable', title: 'El carro de heno', year: '1821', place: 'National Gallery, Londres', story: 'Un carro cruza un arroyo ante una casa de campo. Cuando se expuso en París deslumbró a los pintores franceses por su modo de tratar la luz.' },
  { id: 'espigadoras', img: espigadorasImg, artist: 'Jean-François Millet', title: 'Las espigadoras', year: '1857', place: 'Museo de Orsay, París', story: 'Tres campesinas recogen las espigas que quedan tras la cosecha. Millet dio a los más pobres la dignidad que antes se reservaba a los héroes.' },
  { id: 'angelus', img: angelusImg, artist: 'Jean-François Millet', title: 'El Ángelus', year: '1857-1859', place: 'Museo de Orsay, París', story: 'Dos campesinos detienen la faena para rezar al oír la campana. Salvador Dalí le dedicó una obsesión entera y todo un libro.' },
  { id: 'ornans', img: ornansImg, artist: 'Gustave Courbet', title: 'Un entierro en Ornans', year: '1849-1850', place: 'Museo de Orsay, París', story: 'Un lienzo del tamaño de una pintura histórica para un funeral de pueblo, con vecinos reales. Escandalizó porque trataba a la gente corriente como a héroes.' },
  { id: 'whistler', img: whistlerImg, artist: 'James McNeill Whistler', title: 'La madre de Whistler', year: '1871', place: 'Museo de Orsay, París', story: 'Su título real es Arreglo en gris y negro. Whistler decía que le importaba la armonía de color, no quién era la modelo. Acabó siendo un icono de la maternidad.' },
  { id: 'hierba', img: hierbaImg, artist: 'Édouard Manet', title: 'El almuerzo sobre la hierba', year: '1863', place: 'Museo de Orsay, París', story: 'Una mujer desnuda comparte picnic con dos hombres vestidos. Escandalizó en el Salón de 1863 y acabó en el Salón de los Rechazados.' },
  { id: 'olimpia', img: olimpiaImg, artist: 'Édouard Manet', title: 'Olimpia', year: '1863', place: 'Museo de Orsay, París', story: 'Una cortesana que mira al espectador sin pudor. El escándalo en 1865 fue tal que hubo que colgar el cuadro muy alto y vigilarlo.' },
  { id: 'folies', img: foliesImg, artist: 'Édouard Manet', title: 'Un bar en el Folies Bergère', year: '1882', place: 'Courtauld Gallery, Londres', story: 'Una camarera mira al frente mientras el espejo refleja una escena que no cuadra con su posición. Fue su último gran cuadro.' },
  { id: 'moulin', img: moulinImg, artist: 'Pierre-Auguste Renoir', title: 'Baile en el Moulin de la Galette', year: '1876', place: 'Museo de Orsay, París', story: 'Una tarde de domingo en un salón de baile de Montmartre. Las manchas de luz sobre las ropas dan al cuadro un aire de recuerdo vivo.' },
  { id: 'remeros', img: remerosImg, artist: 'Pierre-Auguste Renoir', title: 'El almuerzo de los remeros', year: '1881', place: 'The Phillips Collection, Washington', story: 'Renoir reunió a sus amigos en una terraza sobre el Sena. La mujer con el perrito de la izquierda era Aline Charigot, con quien se casó.' },
  { id: 'jatte', img: jatteImg, artist: 'Georges Seurat', title: 'Tarde de domingo en la isla de la Grande Jatte', year: '1884-1886', place: 'Art Institute of Chicago', story: 'Está hecho con miles de puntos de color puro, una técnica llamada puntillismo. Seurat tardó dos años en pintarlo.' },
  { id: 'danza', img: danzaImg, artist: 'Edgar Degas', title: 'La clase de danza', year: 'h. 1871-1874', place: 'Museo de Orsay, París', story: 'Degas retrató a las bailarinas entre ensayos, estirándose o esperando. Prefería el ambiente de los bastidores al escenario brillante.' },
  { id: 'jugadores', img: jugadoresImg, artist: 'Paul Cézanne', title: 'Los jugadores de cartas', year: '1890-1892', place: 'Varios museos', story: 'Cézanne pintó varias versiones con campesinos jugando a las cartas. La más famosa se vendió por una de las cifras más altas de la historia.' },
  { id: 'girasoles', img: girasolesImg, artist: 'Vincent van Gogh', title: 'Los girasoles', year: '1888-1889', place: 'Varios museos', story: 'Van Gogh pintó varias versiones para decorar la habitación de Gauguin, que iba a visitarlo en Arlés. Usó tres tonos de amarillo y casi nada más.' },
  { id: 'terraza', img: terrazaImg, artist: 'Vincent van Gogh', title: 'Terraza de café por la noche', year: '1888', place: 'Museo Kröller-Müller, Otterlo', story: 'Fue el primero de sus cuadros nocturnos con estrellas. Dijo que pintar la noche le parecía más rico en colores que el día.' },
  { id: 'habitacion', img: habitacionImg, artist: 'Vincent van Gogh', title: 'La habitación en Arlés', year: '1888', place: 'Museo Van Gogh, Ámsterdam', story: 'Su dormitorio de la Casa Amarilla, pintado en colores planos. Lo repitió tres veces, con pequeñas diferencias.' },
  { id: 'oreja', img: orejaImg, artist: 'Vincent van Gogh', title: 'Autorretrato con la oreja vendada', year: '1889', place: 'Courtauld Gallery, Londres', story: 'Lo pintó semanas después del episodio en que se cortó parte de la oreja. Se muestra sereno, con abrigo y gorro de piel.' },
  { id: 'patatas', img: patatasImg, artist: 'Vincent van Gogh', title: 'Los comedores de patatas', year: '1885', place: 'Museo Van Gogh, Ámsterdam', story: 'Su primera gran obra. Quiso que se vieran las manos que cavaron la tierra, y por eso eligió tonos oscuros y rostros toscos.' },
  { id: 'cuervos', img: cuervosImg, artist: 'Vincent van Gogh', title: 'Campo de trigo con cuervos', year: '1890', place: 'Museo Van Gogh, Ámsterdam', story: 'Se pintó en las últimas semanas de su vida. Se ha leído como un presagio, pero lo cierto es que él mismo hablaba en sus cartas de la soledad que lo inquietaba.' },
  { id: 'gauguin', img: gauguinImg, artist: 'Paul Gauguin', title: 'De dónde venimos', year: '1897-1898', place: 'Museum of Fine Arts, Boston', story: 'Gauguin lo pintó en Tahití y lo consideró su testamento. Hay que leerlo de derecha a izquierda, del nacimiento a la muerte.' },
  { id: 'gitana', img: gitanaImg, artist: 'Henri Rousseau', title: 'La gitana dormida', year: '1897', place: 'MoMA, Nueva York', story: 'Un león olfatea a una mujer dormida bajo la luna. Rousseau, empleado de aduanas y pintor autodidacta, la describió como un sueño.' },
  { id: 'adele', img: adeleImg, artist: 'Gustav Klimt', title: 'Retrato de Adele Bloch-Bauer', year: '1907', place: 'Neue Galerie, Nueva York', story: 'Hecho con óleo y láminas de oro. Los nazis lo confiscaron y décadas después, tras una larga batalla legal, volvió a la familia de la retratada.' },
  { id: 'negro', img: negroImg, artist: 'Kazimir Malévich', title: 'Cuadrado negro', year: '1915', place: 'Galería Tretiakov, Moscú', story: 'Un cuadrado negro sobre fondo blanco. Malévich quería liberar la pintura de la representación y llamó a esta obra el grado cero del arte.' },
];
const POOL: Painting[] = [...BASE.flatMap(r => r.paintings), ...NEW];
const P = (ids: string) => ids.split(' ').map(id => POOL.find(p => p.id === id) as Painting);
export const ROOMS: Room[] = [
  { id: 'I', name: 'Sala I', era: 'El Renacimiento italiano', blurb: 'Luz, perspectiva y mito. Italia, 1480 a 1540.', track: satie, paintings: P('gioconda venus adan cena atenas primavera vitruvio armino urbino tempestad juicio cana transfig ariadna sixtina salvator') },
  { id: 'II', name: 'Sala II', era: 'El Norte y Toledo', blurb: 'Flandes, Países Bajos y un cielo de El Greco.', track: debussy, paintings: P('arnolfini embajadores jardin cazadores orgaz toledo babel') },
  { id: 'III', name: 'Sala III', era: 'El Siglo de Oro español', blurb: 'Velázquez y la corte de los Austrias.', track: chopin, paintings: P('meninas rendicion espejo baco inocencio hilanderas cristo aguador agnus') },
  { id: 'IV', name: 'Sala IV', era: 'El Barroco europeo', blurb: 'Sombras profundas y miradas que te siguen.', track: chopin, paintings: P('perla lechera rembrandt ronda tulp prodigo caballero vocacion encajera delft arte novia') },
  { id: 'V', name: 'Sala V', era: 'Goya y la Revolución', blurb: 'Del rococó a la guerra y la libertad.', track: satie, paintings: P('columpio saturno tresmayo marat odalisca libertad medusa carro maja gainsborough familia citera') },
  { id: 'VI', name: 'Sala VI', era: 'Romanticismo y realismo', blurb: 'Niebla, olas y gente corriente hecha héroe.', track: debussy, paintings: P('caminante ola espigadoras angelus ornans whistler turner temerario hayez monje fuji hiroshige') },
  { id: 'VII', name: 'Sala VII', era: 'El Impresionismo', blurb: 'París, luz y amaneceres. Nace una escuela.', track: debussy, paintings: P('impresion hierba olimpia folies moulin remeros jatte danza jugadores parasol ajenjo paraguas madamex') },
  { id: 'VIII', name: 'Sala VIII', era: 'Postimpresionismo', blurb: 'Van Gogh, Gauguin y los cielos que giran.', track: satie, paintings: P('noche girasoles terraza habitacion oreja patatas cuervos gauguin gitana rodano lirios cafe sueno') },
  { id: 'IX', name: 'Sala IX', era: 'La modernidad', blurb: 'Angustia, oro y el cuadrado que lo cambió todo.', track: chopin, paintings: P('grito beso adele negro judith mondrian') },
];

export const ALL: Painting[] = ROOMS.flatMap(r => r.paintings);

export const CREDITS = 'Pinturas de dominio público (Wikimedia Commons). Música: "Clair de lune" de Debussy, grabación de dominio público; Nocturno op. 9 n.º 2 de Chopin, grabación de Beeswaxcandle (CC BY-SA 3.0); Gymnopédie n.º 1 de Satie, grabación de Daisy78 (CC BY-SA 4.0). Bach, Preludio en do mayor (CC0, Musopen); Beethoven, Sonata Claro de luna, adagio (dominio público); Mozart, Pequeña serenata nocturna, romanza (dominio público, Musopen); Vivaldi, La primavera, Allegro y Largo (Modena Chamber Orchestra, dominio público); Chopin, Nocturnos op. 15 n.º 1 y op. 55 n.º 1 (CC0). Todas desde Wikimedia Commons.';

export function norm(s: string): string { return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().replace(/[^A-Z ]/g, ' ').replace(/\s+/g, ' ').trim(); }
export function rng(seed: number) { let a = seed >>> 0; return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
export function hash(s: string): number { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
