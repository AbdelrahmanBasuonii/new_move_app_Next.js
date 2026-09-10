export default function Header({ active, query, dark, language, labels, onNavigate, onQueryChange, onToggleTheme, onToggleLanguage }) {
  return <header>
    <button className="logo" onClick={() => onNavigate('home')}><i>▶</i> {labels.logo}</button>
    <nav>
      <button className={active === 'home' ? 'active' : ''} onClick={() => onNavigate('home')}>{labels.home}</button>
      <button className={active === 'movies' ? 'active' : ''} onClick={() => onNavigate('movies')}>{labels.movies}</button>
      <button className={active === 'shows' ? 'active' : ''} onClick={() => onNavigate('shows')}>{labels.shows}</button>
    </nav>
    <div className="tools">
      <button onClick={onToggleLanguage} aria-label="Change language">{language === 'ar' ? 'EN' : 'عربي'}</button>
      <button onClick={onToggleTheme} aria-label={labels.theme}>{dark ? '☼' : '☾'}</button>
      <input value={query} onChange={event => onQueryChange(event.target.value)} placeholder={labels.search}/>
    </div>
  </header>;
}
