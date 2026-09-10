export const image = path => path ? `https://image.tmdb.org/t/p/w500${path}` : 'https://placehold.co/500x750/123344/90cea1?text=No+Poster';

export const fallbackMovies = [
  {id:1,title:'Dune: Part Two',year:2024,rating:8.7,genre:'خيال علمي',poster:'/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',desc:'يواصل بول أتريدس رحلته متحداً مع تشاني وشعب الفريمن.'},
  {id:2,title:'Oppenheimer',year:2023,rating:8.6,genre:'دراما',poster:'/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',desc:'قصة العالم الذي قاد فريقاً علمياً غيّر مجرى التاريخ.'},
  {id:3,title:'Poor Things',year:2023,rating:8,genre:'كوميديا',poster:'/kCGlIMHnOm8JPXq3qY9t6e6H3p.jpg',desc:'تخوض بيلا رحلة اكتشاف مذهلة للحرية والحب والعالم.'},
  {id:4,title:'The Batman',year:2022,rating:7.8,genre:'أكشن',poster:'/74xTEgt7R36Fpooo50r9T25onhq.jpg',desc:'يواجه باتمان قاتلاً متسلسلاً في مدينة غارقة بالفساد.'},
  {id:5,title:'Parasite',year:2019,rating:8.5,genre:'إثارة',poster:'/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',desc:'تتقاطع حياة عائلتين من طبقتين اجتماعيتين مختلفتين.'},
  {id:6,title:'Interstellar',year:2014,rating:8.7,genre:'خيال علمي',poster:'/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',desc:'يسافر فريق من المستكشفين عبر ثقب دودي بحثاً عن مستقبل للبشرية.'}
];

export const fallbackShows = [
  {id:1396,title:'Breaking Bad',year:2008,rating:8.9,genre:'جريمة',poster:'/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',desc:'مدرس كيمياء يقرر دخول عالم الجريمة لتأمين مستقبل عائلته.'},
  {id:1399,title:'Game of Thrones',year:2011,rating:8.4,genre:'دراما',poster:'/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg',desc:'سبع عائلات نبيلة تتصارع للسيطرة على ويستروس.'},
  {id:40008,title:'Hannibal',year:2013,rating:8.2,genre:'إثارة',poster:'/mCwQJqyuCFlbFyJR5sWg3PqtHEN.jpg',desc:'عميل موهوب يطارد قاتلاً غامضاً بمساعدة طبيب نفسي.'}
];
