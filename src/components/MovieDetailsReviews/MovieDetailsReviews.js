import Avatar from '~/components/Avatar';
import { SendIcon } from '~/components/Icons';
import MovieDetailsReview from '~/components/MovieDetailsReview';
import { Select } from '~/context';
import { useMovieDetails } from '~/context/MovieDetails';

const MovieDetailsReviews = () => {
    const { reviews } = useMovieDetails();
    console.log('🚀 ~ MovieDetailsReviews ~ reviews', reviews);

    return (
        <div className="mt-12">
            <h5 className="mb-4 font-medium text-base">Comments</h5>
            <div className="w-9/12 p-6 bg-slate-200 rounded">
                <div className="flex justify-between items-center">
                    <span className="flex-shrink-0 w-1/4 text-sm leading-snug">
                        {reviews.total_results} comments
                    </span>
                    <div className="flex-1 flex justify-end items-center">
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
                        src="https://vietartproductions.com/wp-content/uploads/2022/04/chup-anh-dep-anh-sang-min.jpg"
                    />
                    <form className="flex-1 flex items-center pr-4 text-[#9b9b9b] bg-[#fff] rounded-3xl overflow-hidden">
                        <textarea
                            placeholder="Write a comment..."
                            className="flex-1 py-2 px-4 text-inherit leading-[32px] h-[48px] bg-[#fff] text-xs outline-none resize-none"
                        ></textarea>
                        <SendIcon className="w-6 h-6 rotate-45 fill-current cursor-pointer hover:fill-primary ease-ease duration-300" />
                    </form>
                </div>

                <div>
                    {reviews?.results?.map((review) => (
                        <MovieDetailsReview data={review} key={review.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsReviews;
