const MOVIES_DB = '25430d89c638452d8bbe44f5414bf115';
const moviesEndpoint = 'https://api.themoviedb.org/3/search/';

const movieDB = {
    movie: `${moviesEndpoint}movie?api_key=${MOVIES_DB}`,
    image: 'https://image.tmdb.org/t/p/original',
};

export default movieDB;
