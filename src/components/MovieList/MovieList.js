import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import slugify from 'slugify';
import { FreeMode, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieGlass from '~/components/MovieGlass';
import MovieItemInImg from '~/components/MovieItemInImg';
import { useWindowDimensions } from '~/hooks';
import * as httpRequest from '~/utils/httpRequest';
import MovieHeader from './MovieHeader';
import MovieItem from './MovieItem';
import MovieSeeDetails from './MovieSeeDetails';

const MovieList = ({ movieUi = '', children, type, className = '' }) => {
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
                    <MovieHeader to={link}>{children}</MovieHeader>
                    <MovieSeeDetails to={link} />
                </header>
            )}
            {movieUi ? (
                <div className="grid grid-cols-4 gap-[20px]">
                    {movieList?.map((movie) => (
                        <MovieGlass key={movie.id} data={movie} />
                    ))}
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
