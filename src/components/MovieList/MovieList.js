import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '~/components/Icons';
import MovieItem from './MovieItem';

const MovieList = () => {
    return (
        <div>
            <header className="mb-4 flex gap-5 justify-between items-center">
                <h1 className="font-black text-2xl leading-sm">
                    <Link className="text-black" to="/">
                        Lộ trình học Front-end
                    </Link>
                </h1>
                <Link
                    className="whitespace-nowrap group flex items-center font-semibold text-[15px] text-primary leading-sm"
                    to="/"
                >
                    <span className="group-hover:underline">See details</span>
                    <ChevronRightIcon className="w-4 h-4 ml-1 font-bold group-hover:translate-x-1 ease-linear duration-300" />
                </Link>
            </header>
            <div className="grid grid-cols-4 gap-6">
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
            </div>
        </div>
    );
};

export default MovieList;
