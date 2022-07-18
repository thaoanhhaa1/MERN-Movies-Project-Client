import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BannerItem from './BannerItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '~/config';

const Banner = () => {
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        async function getData() {
            const result = await axios.get(config.movieDB.upcoming);
            setBanner(result.data.results.slice(0, 4));
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
