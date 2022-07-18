import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FreeMode, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronRightIcon } from '~/components/Icons';
import { useWindowDimensions } from '~/hooks';
import * as httpRequest from '~/utils/httpRequest';
import MovieItemInImg from '../MovieItemInImg';
import MovieItem from './MovieItem';

const MovieList = ({ children, type, className }) => {
    const [movieList, setMovieList] = useState([]);
    const { width } = useWindowDimensions();

    useEffect(() => {
        async function getData() {
            const result = await httpRequest.get(`/movies/${type}`);
            setMovieList(
                result.results
                    .filter((movie) => !!movie.poster_path)
                    .slice(0, 8),
            );
        }

        getData();
    }, [type]);

    const renderMovieList =
        width >= 1024 ? (
            <div className="grid grid-cols-3 gx:grid-cols-4 gap-6">
                {movieList?.map((movie) => (
                    <MovieItem key={movie.id} data={movie} />
                ))}
            </div>
        ) : (
            <Swiper
                className="!-mx-2"
                slidesPerView={3}
                freeMode={true}
                modules={[FreeMode, Scrollbar]}
                scrollbar={{
                    hide: false,
                }}
            >
                {movieList?.map((movie) => (
                    <SwiperSlide key={movie.id} className="!w-4/12">
                        <MovieItemInImg className="mx-2" data={movie} />
                    </SwiperSlide>
                ))}
            </Swiper>
        );

    return (
        <div className={className}>
            <header className="mb-4 flex gap-5 justify-between items-center">
                <h1 className="font-black text-2xl leading-sm">
                    <Link className="text-black" to="/">
                        {children}
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
            {renderMovieList}
        </div>
    );
};

MovieList.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default MovieList;
