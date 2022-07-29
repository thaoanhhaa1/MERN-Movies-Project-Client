import { useEffect } from 'react';
import MovieList from '~/components/MovieList';
import Banner from '~/layouts/DefaultLayout/Banner';

const HomePage = () => {
    useEffect(() => {
        document.title = 'WMovies';
    }, []);

    return (
        <div>
            <Banner />
            <MovieList className="mt-10" type="now_playing">
                Now Playing
            </MovieList>
            <MovieList movieUi="glass" className="mt-10" type="upcoming">
                Upcoming
            </MovieList>
            <MovieList className="mt-10" type="top_rated">
                Top Rated
            </MovieList>
        </div>
    );
};

export default HomePage;
