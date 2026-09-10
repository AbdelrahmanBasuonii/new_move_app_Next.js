export const translations = {
  ar: {
    home: 'الرئيسية', movies: 'الأفلام', shows: 'المسلسلات', logo: 'سينما',
    search: 'ابحث عن فيلم أو مسلسل', heroEyebrow: 'اكتشف عالم السينما والتلفزيون',
    heroTitle: <>شاهد شيئاً<br/>يستحق وقتك.</>, heroText: 'أحدث الأفلام، المسلسلات الأكثر مشاهدة، والنجوم خلف كل قصة من مكان واحد.',
    exploreMovies: 'استكشف الأفلام', latest: 'الأحدث على الشاشة', latestLabel: 'مختارات اليوم',
    topRated: 'الأعلى تقييماً', topRatedLabel: 'تقييمات الجمهور', unforgettable: 'مسلسلات لا تُنسى', tvLibrary: 'مكتبة التلفزيون',
    movieLibrary: 'مكتبة الأفلام', allMovies: 'كل الأفلام', allShows: 'كل المسلسلات', item: 'عمل',
    detailsMovie: 'تفاصيل الفيلم', detailsShow: 'تفاصيل المسلسل', loading: 'جاري تحميل التفاصيل...', cast: 'طاقم التمثيل',
    footer: 'سينما · اكتشف، شاهد، وتكلم عن الأفلام التي تحبها.', language: 'English', theme: 'تغيير المظهر'
  },
  en: {
    home: 'Home', movies: 'Movies', shows: 'TV Shows', logo: 'Cinema',
    search: 'Search for a movie or show', heroEyebrow: 'Discover the world of film and television',
    heroTitle: <>Watch something<br/>worth your time.</>, heroText: 'The latest movies, most popular shows, and the stars behind every story in one place.',
    exploreMovies: 'Explore movies', latest: 'Latest on screen', latestLabel: "Today's picks",
    topRated: 'Top rated', topRatedLabel: 'Audience ratings', unforgettable: 'Unforgettable shows', tvLibrary: 'TV library',
    movieLibrary: 'Movie library', allMovies: 'All movies', allShows: 'All shows', item: 'titles',
    detailsMovie: 'Movie details', detailsShow: 'Show details', loading: 'Loading details...', cast: 'Cast',
    footer: 'Cinema · Discover, watch, and talk about the movies you love.', language: 'العربية', theme: 'Toggle theme'
  }
};

export const translateGenre = (genre, language) => {
  if (language === 'ar') return genre;
  return {
    'خيال علمي': 'Science Fiction', 'دراما': 'Drama', 'كوميديا': 'Comedy', 'أكشن': 'Action',
    'إثارة': 'Thriller', 'جريمة': 'Crime', 'مغامرة': 'Adventure', 'موسيقي': 'Musical',
    'حرب': 'War', 'فيلم': 'Movie', 'مسلسل': 'TV Show'
  }[genre] || genre;
};
