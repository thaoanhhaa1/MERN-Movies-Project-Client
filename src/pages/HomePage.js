import { useEffect } from 'react';
import Banner from '~/layouts/DefaultLayout/Banner';

const HomePage = () => {
    useEffect(() => {
        document.title = 'WMovies';
    }, []);

    return (
        <div className="flex-1 pr-10 pl-5 mt-4">
            <Banner />
        </div>
    );
};

export default HomePage;
