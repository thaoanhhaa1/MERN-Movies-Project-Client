import { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import Button from '~/components/Button';
import { HeartSolidIcon } from '~/components/Icons';
import Image from '~/components/Image';
import SlugLink from '~/components/SlugLink';
import config from '~/config';
import useAuth from '~/context/Auth';
import { useMovieDetails } from '~/context/MovieDetails';
import getDMY from '~/utils/getDMY';
import * as httpRequest from '~/utils/httpRequest';

const MovieDetailsInfo = () => {
    const { user } = useAuth();
    const { slug, movieId, movieDetail, credits } = useMovieDetails();
    const [favorites, setFavorites] = useState(false);

    const handleToggleFavorites = async () => {
        setFavorites((favorites) => !favorites);
        await httpRequest.post(
            `/user/${user.uid}/favorites-movie?movieId=${movieId}`,
        );
    };

    useLayoutEffect(() => {
        async function getData() {
            const result = await httpRequest.get(
                `/user/${user.uid}/favorites-movie?movieId=${movieId}`,
            );
            setFavorites(result?.favorites);
        }

        if (user?.uid) getData();
    }, [movieId, user?.uid]);

    return (
        <div className="flex mt-10">
            <Link
                to={`/movie/${slug}?id=${movieId}`}
                className="group relative w-2/12 rounded-[5px] overflow-hidden aspect-[2/3]"
            >
                <Image
                    alt=""
                    src={config.movieDB.image + movieDetail?.poster_path}
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 ease-linear duration-[400ms]" />
            </Link>
            <div className="w-6/12 px-[15px]">
                <h3
                    className="mb-1 font-medium text-2xl"
                    title={movieDetail?.title}
                >
                    {movieDetail?.title}
                </h3>
                <p className="font-medium text-lg text-slate-500">
                    {movieDetail?.tagline}
                </p>
                <Button
                    onClick={handleToggleFavorites}
                    className={`w-[135px] mt-1 transition-all duration-[400ms] ${
                        favorites
                            ? 'bg-[linear-gradient(90deg,#ff3055,#fb685f)]'
                            : 'bg-[linear-gradient(90deg,#252728,#3f4143)]'
                    } text-white`}
                >
                    <HeartSolidIcon className="w-[18px] h-[18px]" />
                    <span>{favorites ? 'Followed' : 'Follow'}</span>
                </Button>
                <div className="mt-4">
                    <h4 className="font-semibold text-sm mb-2">Overview</h4>
                    <p
                        title={movieDetail?.overview}
                        className="text-justify text-sm text-slate-500 line-clamp-5"
                    >
                        {movieDetail?.overview}
                    </p>
                </div>
            </div>
            <div className="w-4/12 px-[15px]">
                <div className="flex">
                    <h5 className="w-[30%] flex-shrink-0 font-bold text-sm pb-1">
                        Director
                    </h5>
                    <span className="text-sm pb-1 flex-1">
                        {credits?.cast
                            ?.filter(
                                (cast) =>
                                    cast.known_for_department === 'Directing',
                            )
                            ?.map((cast) => (
                                <SlugLink key={cast.id}>{cast.name}</SlugLink>
                            ))}
                    </span>
                </div>
                <div className="flex gap-[10px]">
                    <h5 className="w-[30%] flex-shrink-0 font-bold text-sm pb-1">
                        Casts
                    </h5>
                    <span className="text-sm pb-1 flex-1">
                        {credits?.cast
                            ?.filter(
                                (cast) =>
                                    cast.known_for_department === 'Acting',
                            )
                            ?.slice(0, 4)
                            ?.map((cast) => (
                                <SlugLink
                                    to={`/cast/${cast.id}&${slugify(
                                        cast?.name || '',
                                        {
                                            locale: 'vi',
                                            lower: true,
                                            strict: true,
                                        },
                                    )}`}
                                    key={cast.id}
                                >
                                    {cast.name}
                                </SlugLink>
                            ))}
                    </span>
                </div>
                <div className="flex gap-[10px]">
                    <h5 className="w-[30%] flex-shrink-0 font-bold text-sm pb-1">
                        Nation
                    </h5>
                    <span className="text-sm pb-1 flex-1">
                        {movieDetail?.production_countries?.[0]?.name}
                    </span>
                </div>
                <div className="flex gap-[10px]">
                    <h5 className="w-[30%] flex-shrink-0 font-bold text-sm pb-1">
                        Genres
                    </h5>
                    <span className="text-sm pb-1 flex-1">
                        {movieDetail?.genres?.map((genre) => (
                            <SlugLink key={genre.id}>{genre.name}</SlugLink>
                        ))}
                    </span>
                </div>
                <div className="flex gap-[10px]">
                    <h5 className="w-[30%] flex-shrink-0 font-bold text-sm pb-1">
                        Release
                    </h5>
                    <span className="text-sm pb-1 flex-1">
                        {getDMY(new Date(movieDetail.release_date))}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsInfo;
