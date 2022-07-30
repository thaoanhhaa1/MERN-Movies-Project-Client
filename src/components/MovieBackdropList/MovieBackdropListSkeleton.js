import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';
import MovieBackdropItemSkeleton from './MovieBackdropItemSkeleton';

const MovieBackdropListSkeleton = ({ className }) => {
    return (
        <>
            <div className={className}>
                <Skeleton
                    containerClassName="inline-block w-[180px] mb-2"
                    className="text-2xl"
                />
                <div className="grid grid-cols-4 gap-5">
                    {new Array(4).fill(null).map(() => (
                        <MovieBackdropItemSkeleton key={v4()} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default MovieBackdropListSkeleton;
