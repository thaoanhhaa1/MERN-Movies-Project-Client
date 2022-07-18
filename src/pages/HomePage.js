import { useEffect } from 'react';
import MovieList from '~/components/MovieList';
import Banner from '~/layouts/DefaultLayout/Banner';

const HomePage = () => {
    useEffect(() => {
        document.title = 'WMovies';
    }, []);

    return (
        <div className="flex-1 pr-10 pl-5 mt-4">
            <Banner />
            <MovieList />
        </div>
    );
};

export default HomePage;
