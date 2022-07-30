import Skeleton from 'react-loading-skeleton';

const BannerItemSkeleton = () => {
    return (
        <div className="min-h-[350px] rounded-xl bg-cover bg-center relative overflow-hidden">
            <Skeleton
                className="!block"
                containerClassName="absolute inset-0"
                height="100%"
            />
        </div>
    );
};

export default BannerItemSkeleton;
