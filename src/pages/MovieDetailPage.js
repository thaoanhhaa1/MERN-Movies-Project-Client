import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import MovieBackdropList from '~/components/MovieBackdropList';
import MovieDetailsInfo from '~/components/MovieDetailsInfo';
import MovieDetailsReviews from '~/components/MovieDetailsReviews';
import Video from '~/components/Video';
import MovieDetailsProvider from '~/context/MovieDetails';
import * as httpRequest from '~/utils/httpRequest';
import PageNotFound from './PageNotFound';

const MovieDetailPage = () => {
    const { slug } = useParams();
    const [params] = useSearchParams();
    const [movieDetail, setMovieDetail] = useState();
    const [loading, setLoading] = useState(false);
    const [video, setVideo] = useState();
    const [credits, setCredits] = useState();

    const movieId = params.get('id');

    useEffect(() => {
        document.title = movieDetail?.title || 'WMovies';
    }, [movieDetail]);

    useEffect(() => {
        async function getData() {
            setLoading(true);
            try {
                const [movieDetail, videos, credits, similar] =
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
                        httpRequest.get(`/movie/similar`, {
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
            } catch (error) {
                console.log('🚀 ~ getData ~ error', error);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, [movieId]);

    if (!slug || !movieId || !movieDetail || !video || !credits)
        if (loading) return null;
        else return <PageNotFound />;

    return (
        <MovieDetailsProvider
            value={{
                slug,
                movieDetail,
                video,
                credits,
                movieId,
            }}
        >
            <div className="flex-1 pr-10 pl-5 mt-4 pb-20">
                <Video videoId={video?.key}></Video>
                <MovieDetailsInfo />
                <MovieDetailsReviews className="mb-12" />
                <MovieBackdropList>Similar Movies</MovieBackdropList>
            </div>
        </MovieDetailsProvider>
    );
};

export default MovieDetailPage;
