import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import slugify from 'slugify';
import { FreeMode, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 } from 'uuid';
import MovieGlass from '~/components/MovieGlass';
import MovieItemInImg from '~/components/MovieItemInImg';
import { useTV, useWindowDimensions } from '~/hooks';
import * as httpRequest from '~/utils/httpRequest';
import MovieGlassSkeleton from '../MovieGlass/MovieGlassSkeleton';
import MovieHeader from './MovieHeader';
import MovieIemSkeleton from './MovieIemSkeleton';
import MovieItem from './MovieItem';
import MovieSeeDetails from './MovieSeeDetails';

const MovieList = ({ movieUi = '', children, type, className = '' }) => {
    const [movieList, setMovieList] = useState([]);
    const { width } = useWindowDimensions();
    const isTV = useTV();

    useEffect(() => {
        async function getData() {
            const url = (isTV ? 'tv/type' : 'movies') + `/${type}`;
            const result = await httpRequest.get(url);
            setMovieList(
                result.results
                    .filter((movie) => !!movie.poster_path)
                    .slice(0, 8),
            );
        }

        getData();
    }, [isTV, type]);

    const renderMovieList =
        width >= 1024 ? (
            <div className="grid grid-cols-3 gx:grid-cols-4 gap-6">
                {(movieList?.length > 0 &&
                    movieList?.map((movie) => (
                        <MovieItem key={movie.id} data={movie} />
                    ))) ||
                    new Array(8)
                        .fill(null)
                        .map(() => <MovieIemSkeleton key={v4()} />)}
            </div>
        ) : (
            <Swiper
                className="!-mx-2"
                freeMode={true}
                modules={[FreeMode, Scrollbar]}
                scrollbar={{
                    hide: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    540: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                }}
            >
                {movieList?.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <MovieItemInImg className="mx-2" data={movie} />
                    </SwiperSlide>
                ))}
            </Swiper>
        );

    const link = useMemo(
        () =>
            `/category/${slugify(children ?? '', {
                locale: 'vi',
                lower: true,
                strict: true,
            })}`,
        [children],
    );

    return (
        <div className={className}>
            {children && (
                <header className="mb-4 flex gap-5 justify-between items-center">
                    {(movieList?.length > 0 && (
                        <>
                            <MovieHeader to={link}>{children}</MovieHeader>
                            <MovieSeeDetails to={link} />
                        </>
                    )) || (
                        <>
                            <Skeleton
                                containerClassName="w-[165px]"
                                className="text-2xl !leading-sm"
                            />
                            <Skeleton
                                containerClassName="w-[105px]"
                                className="text-[15px] !leading-sm"
                            />
                        </>
                    )}
                </header>
            )}
            {movieUi ? (
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
                    {(movieList?.length > 0 &&
                        movieList?.map((movie) => (
                            <MovieGlass key={movie.id} data={movie} />
                        ))) ||
                        new Array(8)
                            .fill(null)
                            .map(() => <MovieGlassSkeleton key={v4()} />)}
                </div>
            ) : (
                renderMovieList
            )}
        </div>
    );
};

MovieList.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default MovieList;
