const baseUrl = 'https://api.themoviedb.org/3';

export const createTmdbClient = apiKey => {
  const request = async endpoint => {
    const response = await fetch(`${baseUrl}${endpoint}&api_key=${apiKey}&language=ar-SA`);
    if (!response.ok) throw new Error(`TMDb request failed: ${response.status}`);
    return response.json();
  };

  const mapMedia = item => ({
    id: item.id,
    title: item.title || item.name,
    year: (item.release_date || item.first_air_date || '').slice(0, 4),
    rating: Number(item.vote_average || 0).toFixed(1),
    genre: item.media_type === 'tv' ? 'مسلسل' : 'فيلم',
    poster: item.poster_path,
    desc: item.overview
  });

  return {
    async loadCatalog() {
      const [nowPlaying, films, shows] = await Promise.all([
        request('/movie/now_playing?region=EG&page=1'),
        request('/discover/movie?sort_by=popularity.desc&primary_release_date.gte=2016-01-01&page=1'),
        request('/discover/tv?sort_by=popularity.desc&page=1')
      ]);
      return {
        movies: [...new Map([...nowPlaying.results, ...films.results].map(item => [item.id, mapMedia(item)])).values()],
        shows: shows.results.map(mapMedia)
      };
    },
    async loadDetails(item, type) {
      const endpoint = type === 'show' ? `/tv/${item.id}` : `/movie/${item.id}`;
      const data = await request(`${endpoint}?append_to_response=credits`);
      return {...item, desc: data.overview || item.desc, cast: data.credits?.cast?.slice(0, 8) || [], loading: false};
    }
  };
};
