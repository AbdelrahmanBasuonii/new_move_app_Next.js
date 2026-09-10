import { image } from '../lib/media';
import { translateGenre } from '../lib/i18n';

export default function DetailsModal({ item, onClose, labels, language }) {
  if (!item) return null;
  return <div className="modal" onClick={onClose}><article onClick={event => event.stopPropagation()}>
    <button className="close" onClick={onClose}>×</button>
    <img src={image(item.poster)} alt={item.title}/>
    <div>
      <em>{item.type === 'show' ? labels.detailsShow : labels.detailsMovie}</em>
      <h2>{item.title}</h2>
      <p className="meta">{item.year} · {translateGenre(item.genre, language)} · ★ {item.rating}/10</p>
      <p>{item.loading ? labels.loading : item.desc}</p>
      <h3>{labels.cast}</h3>
      <div className="cast">{item.cast?.map(person => <span key={person.id}><img src={image(person.profile_path)}/>{person.name}</span>)}</div>
    </div>
  </article></div>;
}
