import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieBackdropItem } from '~/components/MovieBackdropList';
import Paginate from '~/components/Paginate';
import { useBackToTop } from '~/hooks';
import * as httpRequest from '~/utils/httpRequest';

const SearchPage = () => {
    const [params] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [pageCount, setPageCount] = useState();
    const [page, setPage] = useState(1);

    const value = params.get('q');

    useEffect(() => {
        async function getData() {
            const res = await httpRequest.get('/search', {
                params: { query: `'${value ?? ''}'`, page },
            });
            if (!res?.results) return;
            setMovies(res?.results);
            setPageCount(res?.total_pages);
        }

        getData();
    }, [page, value]);

    useBackToTop(page, value);

    if (!pageCount) return null;

    const handlePageClick = (e) => setPage(e.selected + 1);

    return (
        <div>
            <div className="grid grid-cols-4 gap-5">
                {movies?.map((movie) => (
                    <MovieBackdropItem data={movie} key={movie.id} />
                ))}
            </div>
            <div>
                <Paginate
                    handlePageClick={handlePageClick}
                    pageCount={pageCount}
                />
            </div>
        </div>
    );
};

export default SearchPage;
