import { useEffect } from 'react';

const HomePage = () => {
    useEffect(() => {
        document.title = 'WMovies';
    }, []);

    return <div>HomePage</div>;
};

export default HomePage;
