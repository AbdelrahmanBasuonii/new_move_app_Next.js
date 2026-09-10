import { image } from '../lib/media';
import { translateGenre } from '../lib/i18n';

export default function MediaCard({ item, type = 'movie', language = 'ar', onOpen }) {
  return <button className="card" onClick={() => onOpen(item, type)}>
    <span className="poster"><img src={image(item.poster)} alt={item.title}/><b>★ {item.rating}</b></span>
    <strong>{item.title}</strong>
    <small>{item.year} · {translateGenre(item.genre, language)}</small>
  </button>;
}
