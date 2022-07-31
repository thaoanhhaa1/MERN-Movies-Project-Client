import { useLayoutEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Casts, { CastsSkeleton } from '~/components/Casts';
import MovieBackdropList, {
    MovieBackdropListSkeleton,
} from '~/components/MovieBackdropList';
import MovieDetailsInfo, {
    MovieDetailsInfoSkeleton,
} from '~/components/MovieDetailsInfo';
import MovieDetailsReviews, {
    MovieDetailsReviewsSkeleton,
} from '~/components/MovieDetailsReviews';
import Video, { VideoSkeleton } from '~/components/Video';
import MovieDetailsProvider from '~/context/MovieDetails';
import { useBackToTop, useTV } from '~/hooks';
import PageNotFound from '~/pages/PageNotFound';
import * as httpRequest from '~/utils/httpRequest';

const MovieDetailPage = () => {
    const { slug } = useParams();
    const [params] = useSearchParams();
    const [movieDetail, setMovieDetail] = useState();
    const [video, setVideo] = useState();
    const [credits, setCredits] = useState();
    const [loading, setLoading] = useState(true);
    const isTV = useTV();

    const movieId = params.get('id');

    useBackToTop(movieId);

    useLayoutEffect(() => {
        document.title = movieDetail?.title || 'WMovies';
    }, [movieDetail]);

    useLayoutEffect(() => {
        async function getData() {
            setLoading(true);
            try {
                const [movieDetail, videos, credits] = await Promise.all([
                    httpRequest.get(`/${isTV ? 'tv' : 'movie'}/${movieId}`),
                    httpRequest.get(`/${isTV ? 'tv' : 'movie'}/videos`, {
                        params: {
                            id: movieId,
                        },
                    }),
                    httpRequest.get(`/${isTV ? 'tv' : 'movie'}/credits`, {
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
    }, [isTV, movieId]);

    if (!slug || !movieId) return <PageNotFound />;

    if (!loading && !movieDetail && !video && !credits) return <PageNotFound />;

    return (
        <>
            {(loading && (
                <>
                    <VideoSkeleton />
                    <MovieDetailsInfoSkeleton />
                    <MovieDetailsReviewsSkeleton className="mb-12" />
                    <MovieBackdropListSkeleton className="mb-6" />
                    <CastsSkeleton />
                </>
            )) || (
                <MovieDetailsProvider
                    value={{
                        slug,
                        movieDetail,
                        video,
                        credits,
                        movieId,
                    }}
                >
                    <Video />
                    <MovieDetailsInfo />
                    <MovieDetailsReviews className="mb-12" />
                    <MovieBackdropList className="mb-6">
                        Similar Movies
                    </MovieBackdropList>
                    <Casts />
                </MovieDetailsProvider>
            )}
        </>
    );
};

export default MovieDetailPage;
