import { useEffect, useLayoutEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '~/components/Icons';
import MovieItem from '~/components/MovieList/MovieItem';
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

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

    const paginationClassName =
        'flex items-center px-6 py-[15px] text-base text-[#146ebe] rounded-lg transition-all hover:text-[#183153] hover:bg-[#c3c6d1]';

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
                        hoverImage={false}
                        rounded="5px"
                        key={movie.id}
                        data={movie}
                    />
                ))}
            </div>
            <div className="mt-12 mb-24">
                <ReactPaginate
                    className="flex items-center justify-center"
                    breakLabel="..."
                    nextLabel={
                        <>
                            Next
                            <ChevronRightIcon className="w-[20px] h-[20px] ml-[15px]" />
                        </>
                    }
                    previousLabel={
                        <>
                            <ChevronLeftIcon className="w-[20px] h-[20px] mr-[15px]" />
                            Previous
                        </>
                    }
                    nextLinkClassName={paginationClassName}
                    previousLinkClassName={paginationClassName}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                    disabledLinkClassName="hidden"
                    pageLinkClassName={paginationClassName}
                    breakLinkClassName="inline-block px-[6px] py-[15px] text-[rgb(24,49,83)]"
                    activeLinkClassName="!text-white !bg-[rgb(20,110,190)]"
                />
            </div>
        </div>
    );
};

export default CategoryPage;
