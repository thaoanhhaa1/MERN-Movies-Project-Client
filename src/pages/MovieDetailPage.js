import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import MovieDetailsInfo from '~/components/MovieDetailsInfo';
import MovieDetailsReviews from '~/components/MovieDetailsReviews';
import Video from '~/components/Video';
import MovieDetailsProvider from '~/context/MovieDetails';
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

                const video =
                    videos.results.find((video) =>
                        ['Featurette', 'Teaser'].includes(video.type),
                    ) ?? videos.results[0];

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
        <MovieDetailsProvider
            value={{
                slug,
                movieDetail,
                video,
                credits,
                reviews,
                movieId,
            }}
        >
            <div className="flex-1 pr-10 pl-5 mt-4 pb-20">
                <Video videoId={video?.key}></Video>
                <MovieDetailsInfo />
                <MovieDetailsReviews />
            </div>
        </MovieDetailsProvider>
    );
};

export default MovieDetailPage;
