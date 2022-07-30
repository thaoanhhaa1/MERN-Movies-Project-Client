import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';
import MoviesGrid, { MoviesGridSkeleton } from '~/components/MoviesGrid';
import { useBackToTop } from '~/hooks';
import { PageNotFound } from '~/pages';
import * as httpRequest from '~/utils/httpRequest';
import InfiniteScroll from 'react-infinite-scroll-component';

const CastDetailsPage = () => {
    const { castSlug, castId } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [hasMore, setHasMore] = useState(true);

    useBackToTop(castId);

    useEffect(() => {
        async function getData() {
            setLoading(true);
            try {
                const result = await httpRequest.get(`/cast/${castId}/movies`, {
                    params: {
                        page,
                    },
                });

                setMovies((movies) => [...movies, ...result?.cast]);
                setTotalPages(result?.total_pages);
            } catch (error) {
                console.error('🚀 ~ getData ~ error', error);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, [castId, page]);

    if (!loading && movies?.length <= 0 && !totalPages) return <PageNotFound />;

    const fetchMoreData = () => {
        if (page >= totalPages) {
            setHasMore(false);
            return;
        }

        setPage((page) => page + 1);
    };

    return (
        <div>
            {(loading && !totalPages && (
                <>
                    <Skeleton
                        baseColor="#c3c3c3"
                        containerClassName="block px-10 py-[113px] bg-slate-50"
                        className="text-5xl leading-none"
                    />
                    <MoviesGridSkeleton />
                </>
            )) || (
                <>
                    <header className="px-10 py-[113px] bg-slate-50 font-medium text-5xl leading-none text-center">
                        {castSlug}
                    </header>
                    <InfiniteScroll
                        dataLength={movies.length}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={
                            <div className="flex justify-center">
                                <div className="relative w-[60px] h-[60px] rounded-full inline-block align-middle">
                                    <svg
                                        className="absolute top-[calc(50%-30px)] left-[calc(50%-30px)] w-[60px] h-[60px] scale-[0.7] animate-loader-start"
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.1"
                                    >
                                        <polygon
                                            points="29.8 0.3 22.8 21.8 0 21.8 18.5 35.2 11.5 56.7 29.8 43.4 48.2 56.7 41.2 35.1 59.6 21.8 36.8 21.8 "
                                            fill="#18ffff"
                                        />
                                    </svg>
                                    <div className="w-2 h-2 bg-[#18ffff] rounded-full absolute left-[calc(50%-4px)] top-[calc(50%-4px)] transition-all duration-1000 ease-ease animate-loader-circles"></div>
                                </div>
                            </div>
                        }
                    >
                        <MoviesGrid title="Participating movies">
                            {movies?.map((movie) => (
                                <MoviesGrid.Item
                                    data={movie}
                                    key={movie.id + movie.credit_id}
                                />
                            ))}
                        </MoviesGrid>
                    </InfiniteScroll>
                </>
            )}
        </div>
    );
};

export default CastDetailsPage;
