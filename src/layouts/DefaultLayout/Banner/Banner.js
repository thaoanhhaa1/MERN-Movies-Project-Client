import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as httpRequest from '~/utils/httpRequest';
import BannerItem from './BannerItem';
import BannerItemSkeleton from './BannerItemSkeleton';

const Banner = () => {
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        async function getData() {
            const result = await httpRequest.get('/banner');
            setBanner(result.results.slice(0, 4));
        }

        getData();
    }, []);

    return (
        <div className="banner-wrapper">
            {(banner?.length > 0 && (
                <Swiper
                    className="banner-swiper"
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop
                >
                    {banner?.map((item) => (
                        <SwiperSlide key={item.id} className="!w-full">
                            <BannerItem data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )) || (
                <>
                    <BannerItemSkeleton />
                    <div className="flex gap-[10px] mt-7">
                        <Skeleton
                            containerClassName="flex"
                            baseColor="#9aa6af"
                            width="50px"
                            height="8px"
                        />
                        <Skeleton
                            containerClassName="flex"
                            width="32px"
                            height="8px"
                        />
                        <Skeleton
                            containerClassName="flex"
                            width="32px"
                            height="8px"
                        />
                        <Skeleton
                            containerClassName="flex"
                            width="32px"
                            height="8px"
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default Banner;
