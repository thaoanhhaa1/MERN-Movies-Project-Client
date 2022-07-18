import { useEffect, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as httpRequest from '~/utils/httpRequest';
import BannerItem from './BannerItem';

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
        </div>
    );
};

export default Banner;
