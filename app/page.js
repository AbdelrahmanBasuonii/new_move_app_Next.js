'use client';

import { useEffect, useMemo, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ContentRow from '../components/ContentRow';
import DetailsModal from '../components/DetailsModal';
import Footer from '../components/Footer';
import { fallbackMovies, fallbackShows } from '../lib/media';
import { createTmdbClient } from '../lib/tmdb';
import { translations } from '../lib/i18n';

export default function Home() {
  const [movies, setMovies] = useState(fallbackMovies);
  const [shows, setShows] = useState(fallbackShows);
  const [active, setActive] = useState('home');
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState('');
  const [dark, setDark] = useState(true);
  const [language, setLanguage] = useState('ar');
  const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const labels = translations[language];

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('cinema-language');
    if (savedLanguage === 'ar' || savedLanguage === 'en') setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.title = language === 'ar' ? 'سينما | اكتشف عالم الأفلام والمسلسلات' : 'Cinema | Discover Movies and TV Shows';
    window.localStorage.setItem('cinema-language', language);
  }, [language]);

  useEffect(() => {
    if (!key) return;
    createTmdbClient(key).loadCatalog().then(({ movies: liveMovies, shows: liveShows }) => {
      setMovies(liveMovies);
      setShows(liveShows);
    }).catch(() => {});
  }, [key]);

  const openItem = async (item, type) => {
    setSelected({...item, type, loading: true});
    if (!key) return;
    try {
      const details = await createTmdbClient(key).loadDetails(item, type);
      setSelected({...details, type});
    } catch {
      setSelected({...item, type, loading: false});
    }
  };

  const navigate = value => {
    setActive(value);
    setSelected(null);
  };

  const toggleLanguage = () => setLanguage(value => value === 'ar' ? 'en' : 'ar');

  const rows = active === 'movies'
    ? [{title: labels.allMovies, label: labels.movieLibrary, items: movies, type: 'movie'}]
    : active === 'shows'
      ? [{title: labels.allShows, label: labels.tvLibrary, items: shows, type: 'show'}]
      : [
        {title: labels.latest, label: labels.latestLabel, items: movies.slice(0, 6), type: 'movie'},
        {title: labels.topRated, label: labels.topRatedLabel, items: [...movies].sort((a, b) => b.rating - a.rating).slice(0, 6), type: 'movie'},
        {title: labels.unforgettable, label: labels.tvLibrary, items: shows, type: 'show'}
      ];

  const visibleRows = useMemo(() => rows.map(row => ({...row, items: row.items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))})), [rows, query]);

  return <main className={dark ? 'app' : 'app light'}>
    <Header active={active} query={query} dark={dark} language={language} labels={labels} onNavigate={navigate} onQueryChange={setQuery} onToggleTheme={() => setDark(value => !value)} onToggleLanguage={toggleLanguage}/>
    {active === 'home' && <Hero labels={labels} onExplore={() => navigate('movies')}/>} 
    <section className="content">{visibleRows.map(row => <ContentRow key={row.title} {...row} language={language} itemLabel={labels.item} onOpen={openItem}/>)}</section>
    <Footer labels={labels}/>
    <DetailsModal item={selected} language={language} labels={labels} onClose={() => setSelected(null)}/>
  </main>;
}
