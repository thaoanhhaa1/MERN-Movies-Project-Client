import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { v4 } from 'uuid';
import { CloseIcon } from '~/components/Icons';
import {
    MovieBackdropItem,
    MovieBackdropItemSkeleton,
} from '~/components/MovieBackdropList';
import useAuth from '~/context/Auth';
import * as httpRequest from '~/utils/httpRequest';
import PageNotFound from './PageNotFound';

const FavoritePage = () => {
    const { user } = useAuth();
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            setLoading(true);
            try {
                const result = await httpRequest.get(
                    `user/${user.uid}/favorites-movie-list`,
                );

                const list = Array.isArray(result?.list)
                    ? result.list.map((movieId) =>
                          httpRequest.get(`movie/${movieId}`),
                      )
                    : [];

                const movieList = await Promise.all(list);

                setMovieList(movieList);
            } catch (error) {
                console.log('🚀 ~ getData ~ error', error);
            } finally {
                setLoading(false);
            }
        }

        if (user?.uid) getData();
    }, [user?.uid]);

    if (!user && !loading) return <PageNotFound />;

    const handleClickFavorite = (event, movieId) => {
        event.preventDefault();
        setMovieList((movieList) =>
            movieList.filter((movie) => movie.id !== movieId),
        );
        httpRequest
            .post(`/user/${user?.uid}/favorites-movie?movieId=${movieId}`)
            .then()
            .catch((error) => toast.error(error.message));
    };

    return (
        <div className="grid grid-cols-3 gap-x-[30px] gap-y-[10px]">
            {(loading &&
                new Array(6)
                    .fill(null)
                    .map(() => <MovieBackdropItemSkeleton key={v4()} />)) ||
                movieList.map((movie) => (
                    <MovieBackdropItem
                        render={
                            <div className="group-hover:bg-opacity-20 transition-all absolute inset-0 bg-black bg-opacity-0">
                                <button
                                    onClick={(e) =>
                                        handleClickFavorite(e, movie.id)
                                    }
                                    className="transition-all absolute top-[5px] right-2 flex items-center justify-center w-[22px] h-[22px] text-white bg-[rgba(0,0,0,.61961)] opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:text-red-600"
                                >
                                    <CloseIcon className="w-[14px] h-[14px]" />
                                </button>
                            </div>
                        }
                        data={movie}
                        key={movie.id}
                    />
                ))}
        </div>
    );
};

export default FavoritePage;
