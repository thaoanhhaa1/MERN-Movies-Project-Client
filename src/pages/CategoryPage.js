import { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieItem from '~/components/MovieList/MovieItem';
import Paginate from '~/components/Paginate';
import { useBackToTop } from '~/hooks';
import * as httpRequest from '~/utils/httpRequest';

const CategoryPage = () => {
    const params = useParams();
    const [category, setCategory] = useState();
    const [movies, setMovies] = useState([]);
    const [pageCount, setPageCount] = useState();
    const [page, setPage] = useState(1);

    const handlePageClick = (e) => {
        setPage(e.selected + 1);
    };

    useLayoutEffect(() => {
        async function getData() {
            const result = await httpRequest.get(`category/${params.category}`);
            if (!result) return;
            setCategory({
                name: result.name,
                type: result.type,
            });
        }

        if (params?.category) getData();
    }, [params?.category]);

    useBackToTop(page);

    useEffect(() => {
        async function getData() {
            const result = await httpRequest.get(`movie/${category.type}`, {
                params: { page },
            });
            setPageCount(Math.min(result?.total_pages, 500) ?? 0);
            setMovies(result?.results ?? []);
        }

        if (category?.type) getData();
    }, [category?.type, page]);

    if (!params?.category || !category || !pageCount) return null;

    return (
        <div className="max-w-[960px] mx-auto mt-9">
            <header className="flex justify-center items-center h-24 bg-slate-400 text-white">
                <h1 className="p-6 font-medium text-[28px] leading-tight">
                    {category.name}
                </h1>
            </header>
            <div className="mt-4 grid grid-cols-5 gap-[10px]">
                {movies?.map((movie) => (
                    <MovieItem
                        className="flex flex-col"
                        hoverImage={false}
                        rounded="5px"
                        key={movie.id}
                        data={movie}
                    />
                ))}
            </div>
            <Paginate
                className="mt-12 mb-24"
                pageCount={pageCount}
                handlePageClick={handlePageClick}
            />
        </div>
    );
};

export default CategoryPage;
