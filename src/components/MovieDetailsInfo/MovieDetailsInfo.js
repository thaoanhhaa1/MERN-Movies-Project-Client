import { Link } from 'react-router-dom';
import config from '~/config';
import { useMovieDetails } from '~/context/MovieDetails';
import getDMY from '~/utils/getDMY';
import Image from '../Image';
import SlugLink from '../SlugLink';

const MovieDetailsInfo = () => {
    const { slug, movieId, movieDetail, credits } = useMovieDetails();

    return (
        <div className="flex mt-10">
            <Link
                to={`/movie/${slug}?id=${movieId}`}
                className="group relative w-2/12 rounded-[5px] overflow-hidden"
            >
                <Image
                    alt=""
                    src={config.movieDB.image + movieDetail?.poster_path}
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 ease-linear duration-[400ms]"></div>
            </Link>
            <div className="w-6/12 px-[15px]">
                <h3 className="mb-1 font-medium text-2xl">
                    {movieDetail?.title}
                </h3>
                <p className="mb-4 font-medium text-lg text-slate-500">
                    {movieDetail?.tagline}
                </p>
                <div>
                    <h4 className="font-medium text-sm mb-2">Overview</h4>
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
                <div className="flex">
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
                                <SlugLink key={cast.id}>{cast.name}</SlugLink>
                            ))}
                    </span>
                </div>
                <div className="flex">
                    <h5 className="w-[30%] flex-shrink-0 font-bold text-sm pb-1">
                        Nation
                    </h5>
                    <span className="text-sm pb-1 flex-1">
                        {movieDetail?.production_countries?.[0]?.name}
                    </span>
                </div>
                <div className="flex">
                    <h5 className="w-[30%] flex-shrink-0 font-bold text-sm pb-1">
                        Genres
                    </h5>
                    <span className="text-sm pb-1 flex-1">
                        {movieDetail?.genres?.map((genre) => (
                            <SlugLink key={genre.id}>{genre.name}</SlugLink>
                        ))}
                    </span>
                </div>
                <div className="flex">
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
