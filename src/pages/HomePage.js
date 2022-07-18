import { useEffect } from 'react';
import MovieList from '~/components/MovieList';
import Banner from '~/layouts/DefaultLayout/Banner';

const HomePage = () => {
    useEffect(() => {
        document.title = 'WMovies';
    }, []);

    return (
        <div className="flex-1 pr-10 pl-5 mt-4 pb-20">
            <Banner />
            <MovieList className="mt-10" type="now_playing">
                Now Playing
            </MovieList>
            <MovieList className="mt-10" type="top_rated">
                Top Rated
            </MovieList>
        </div>
    );
};

export default HomePage;
