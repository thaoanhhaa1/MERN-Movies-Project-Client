import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';

const MovieDetailsInfoSkeleton = () => {
    return (
        <div className="flex mt-10">
            <Skeleton
                containerClassName="flex w-2/12"
                className="!rounded-[5px] overflow-hidden aspect-[2/3]"
            />
            <div className="w-6/12 px-[15px]">
                <Skeleton className="mb-1 !leading-8" />
                <Skeleton className="!leading-6 my-[2px]" />
                <Skeleton className="mt-1 !w-[135px] h-9" />
                <div className="mt-4">
                    <Skeleton className="!leading-5 mb-2 !w-[70px]" />
                    <Skeleton
                        containerClassName="flex flex-col"
                        inline
                        className="h-[14px] my-[3px]"
                        count={5}
                    />
                </div>
            </div>
            <div className="w-4/12 px-[15px]">
                {new Array(4).fill(null).map(() => (
                    <div key={v4()} className="flex gap-[10px] mb-1">
                        <Skeleton
                            containerClassName="flex w-[30%]"
                            className="leading-5"
                        />
                        <Skeleton
                            containerClassName="flex flex-1"
                            className="leading-5"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieDetailsInfoSkeleton;
