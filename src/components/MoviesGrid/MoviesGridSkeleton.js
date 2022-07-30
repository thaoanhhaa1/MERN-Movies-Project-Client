import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';
import ItemSkeleton from './ItemSkeleton';

const MoviesGridSkeleton = () => {
    return (
        <div>
            <Skeleton
                containerClassName="inline-block w-[260px] mt-12 mb-2"
                className="!leading-8"
            />
            <div className="grid grid-cols-3 gap-x-5 gap-y-6">
                {new Array(6).fill(null).map(() => (
                    <ItemSkeleton key={v4()} />
                ))}
            </div>
        </div>
    );
};

export default MoviesGridSkeleton;
