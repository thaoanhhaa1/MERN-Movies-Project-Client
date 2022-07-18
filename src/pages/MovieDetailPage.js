import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Image from '~/components/Image';
import SlugLink from '~/components/SlugLink';
import config from '~/config';
import * as httpRequest from '~/utils/httpRequest';

const MovieDetailPage = () => {
    const [params] = useSearchParams();
    const [movieDetail, setMovieDetail] = useState();
    const [video, setVideo] = useState();
    console.log('🚀 ~ MovieDetailPage ~ movieDetail', movieDetail);
    console.log('🚀 ~ MovieDetailPage ~ video', video);

    const movieId = params.get('id');

    useEffect(() => {
        document.title = movieDetail?.title || 'WMovies';
    }, [movieDetail]);

    useEffect(() => {
        async function getData() {
            try {
                const [movieDetail, videos] = await Promise.all([
                    httpRequest.get(`/movie/${movieId}`),
                    httpRequest.get(`/movie/videos`, {
                        params: {
                            id: movieId,
                        },
                    }),
                ]);

                const video = videos.results.find(
                    (video) => video.type === 'Featurette',
                );

                setMovieDetail(movieDetail);
                setVideo(video);
            } catch (error) {
                console.log('🚀 ~ getData ~ error', error);
            }
        }

        getData();
    }, [movieId]);

    if (!movieDetail || !video) return null;

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
                    to="/"
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
                <div className="w-4/12">
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
                                <SlugLink className="relative last:after:content-[',__']">
                                    {genre.name}
                                </SlugLink>
                            ))}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailPage;
