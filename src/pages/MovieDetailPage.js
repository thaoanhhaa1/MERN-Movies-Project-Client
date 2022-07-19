import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import Image from '~/components/Image';
import SlugLink from '~/components/SlugLink';
import config from '~/config';
import { Select } from '~/context';
import getDMY from '~/utils/getDMY';
import * as httpRequest from '~/utils/httpRequest';

const MovieDetailPage = () => {
    const { slug } = useParams();
    const [params] = useSearchParams();
    const [movieDetail, setMovieDetail] = useState();
    const [video, setVideo] = useState();
    const [credits, setCredits] = useState();
    const [reviews, setReviews] = useState();

    const movieId = params.get('id');

    useEffect(() => {
        document.title = movieDetail?.title || 'WMovies';
    }, [movieDetail]);

    useEffect(() => {
        async function getData() {
            try {
                const [movieDetail, videos, credits, reviews] =
                    await Promise.all([
                        httpRequest.get(`/movie/${movieId}`),
                        httpRequest.get(`/movie/videos`, {
                            params: {
                                id: movieId,
                            },
                        }),
                        httpRequest.get(`/movie/credits`, {
                            params: {
                                id: movieId,
                            },
                        }),
                        httpRequest.get(`/movie/reviews`, {
                            params: {
                                id: movieId,
                            },
                        }),
                    ]);

                const video = videos.results.find((video) =>
                    ['Featurette', 'Teaser'].includes(video.type),
                );

                setMovieDetail(movieDetail);
                setVideo(video);
                setCredits(credits);
                setReviews(reviews);
            } catch (error) {
                console.log('🚀 ~ getData ~ error', error);
            }
        }

        getData();
    }, [movieId]);

    if (!slug || !movieId || !movieDetail || !video || !credits || !reviews)
        return null;

    return (
        <div className="flex-1 pr-10 pl-5 mt-4 pb-20">
            <iframe
                className="aspect-video w-full"
                src={`https://www.youtube.com/embed/${video?.key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
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
                                        cast.known_for_department ===
                                        'Directing',
                                )
                                ?.map((cast) => (
                                    <SlugLink key={cast.id}>
                                        {cast.name}
                                    </SlugLink>
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
                                    <SlugLink key={cast.id}>
                                        {cast.name}
                                    </SlugLink>
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
            <div className="mt-12">
                <h5 className="mb-4 font-medium text-base">Comments</h5>
                <div className="w-9/12 p-6 bg-slate-200 rounded">
                    <div className="flex justify-between items-center">
                        <span className="flex-shrink-0 w-1/4 text-sm leading-snug">
                            {reviews.total_results} comments
                        </span>
                        <div className="flex-1 flex justify-end items-center">
                            <span className="text-sm leading-snug mr-4">
                                Sắp xếp theo:
                            </span>
                            <Select>
                                <Select.Option value="frontend">
                                    Frontend
                                </Select.Option>
                                <Select.Option value="backend">
                                    Backend
                                </Select.Option>
                                <Select.Option value="fullstack">
                                    Fullstack
                                </Select.Option>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailPage;
