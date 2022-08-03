import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Avatar from '~/components/Avatar';
import Button from '~/components/Button';
import { SendIcon } from '~/components/Icons';
import MovieDetailsReview from '~/components/MovieDetailsReview';
import { Select } from '~/context';
import useAuth from '~/context/Auth';
import { useMovieDetails } from '~/context/MovieDetails';
import { useTV } from '~/hooks';
import * as httpRequest from '~/utils/httpRequest';

// TODO Sort, Upload, Like & Reply Comments

const MovieDetailsReviews = ({ className = '' }) => {
    const { movieId } = useMovieDetails();
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState(() => ({ results: [] }));
    const isTV = useTV();
    const { user } = useAuth();

    const handleLoadMore = () => setPage((page) => page + 1);

    useEffect(() => {
        async function getData() {
            setLoading(true);
            try {
                const reviewsNew = await httpRequest.get(
                    `/${isTV ? 'tv' : 'movie'}/reviews`,
                    {
                        params: {
                            id: movieId,
                            page,
                        },
                    },
                );

                setReviews((reviews) => ({
                    ...reviewsNew,
                    results: [...reviews.results, ...reviewsNew.results],
                }));
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }

        if (movieId) getData();
    }, [isTV, movieId, page]);

    return (
        <div className={className + ' mt-12'}>
            <h5 className="mb-4 font-medium text-base">Comments</h5>
            <div className="w-full md:w-9/12 p-6 bg-slate-200 rounded">
                <div className="flex flex-wrap gap-[15px] justify-between items-center">
                    <span className="flex-shrink-0 w-full xs:w-1/4 text-sm leading-snug">
                        {reviews?.results?.length || 0} comments
                    </span>
                    <div className="w-full xs:flex-1 flex xs:justify-end items-center">
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

                <div className="mt-6 mb-8 flex items-center gap-6">
                    <Avatar
                        className="w-10 h-10"
                        alt=""
                        src={user?.avatar?.url}
                    />
                    <form className="flex-1 flex items-center pr-4 text-[#9b9b9b] bg-[#fff] rounded-3xl overflow-hidden">
                        <textarea
                            placeholder="Write a comment..."
                            className="flex-1 py-2 px-4 text-inherit leading-[32px] h-[48px] bg-[#fff] text-xs outline-none resize-none"
                        />
                        <SendIcon className="w-6 h-6 rotate-45 fill-current cursor-pointer hover:fill-primary ease-ease duration-300" />
                    </form>
                </div>

                <div>
                    {reviews?.results?.map((review) => (
                        <MovieDetailsReview data={review} key={review.id} />
                    ))}
                </div>

                {reviews.page && reviews.page < reviews.total_pages && (
                    <Button
                        onClick={handleLoadMore}
                        className="-ml-5 hover:text-primary"
                        link
                    >
                        {(loading && 'Loading comments') ||
                            'See previous comments'}
                    </Button>
                )}
            </div>
        </div>
    );
};

MovieDetailsReviews.propTypes = {
    className: PropTypes.string,
};

export default MovieDetailsReviews;
