import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';

const Header = () => {
    return (
        <div className='bg-blue-600 py-2 hidden sm:hidden md:block'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={4}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>Free Delivery on orders over R 2500</SwiperSlide>
                <SwiperSlide>Free Delivery on orders over R 2500</SwiperSlide>
                <SwiperSlide>Free Delivery on orders over R 2500</SwiperSlide>
                <SwiperSlide>Free Delivery on orders over R 2500</SwiperSlide>
                <SwiperSlide>Free Delivery on orders over R 2500</SwiperSlide>
                <SwiperSlide>Free Delivery on orders over R 2500</SwiperSlide>
                <SwiperSlide>Free Delivery on orders over R 2500</SwiperSlide>
                <SwiperSlide>Free Delivery on orders over R 2500</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Header;