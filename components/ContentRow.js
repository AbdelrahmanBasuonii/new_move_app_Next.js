import MediaCard from './MediaCard';

export default function ContentRow({ title, label, items, type, onOpen, itemLabel, language }) {
  return <div className="row">
    <div className="row-head"><div><em>{label}</em><h2>{title}</h2></div><span>{items.length} {itemLabel}</span></div>
    <div className="grid">{items.map(item => <MediaCard key={item.id} item={item} type={type} language={language} onOpen={onOpen}/>)}</div>
  </div>;
}
