export default function Hero({ onExplore, labels }) {
  return <section className="hero"><div>
    <em>{labels.heroEyebrow}</em>
    <h1>{labels.heroTitle}</h1>
    <p>{labels.heroText}</p>
    <button className="primary" onClick={onExplore}>{labels.exploreMovies}</button>
  </div></section>;
}
