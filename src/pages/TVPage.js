import { useEffect } from 'react';
import MovieList from '~/components/MovieList';
import Banner from '~/layouts/DefaultLayout/Banner';

const TVPage = () => {
    useEffect(() => {
        document.title = 'WMovies';
    }, []);

    return (
        <div>
            <Banner url="tv/banner" />
            <MovieList className="mt-10" type="top_rated">
                TV Top Rated
            </MovieList>
            <MovieList movieUi="glass" className="mt-10" type="popular">
                TV Popular
            </MovieList>
        </div>
    );
};

export default TVPage;
