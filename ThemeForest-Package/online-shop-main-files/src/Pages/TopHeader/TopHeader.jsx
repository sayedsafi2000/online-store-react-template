import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Mousewheel } from 'swiper/modules';

const TopHeader = () => {
    return (
        <div className='bg-white dark:bg-gray-900 dark:border-gray-700 border-b dark:shadow-md'>
            <div className='bg-white dark:bg-gray-900 py-3 md:py-4'>
                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    slidesPerView={4}
                    breakpoints={{
                        640: {
                            slidesPerView: 6,
                        },
                        1024: {
                            slidesPerView: 8,
                        }
                    }}
                    mousewheel={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Mousewheel, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="flex flex-col items-center text-center justify-center group cursor-pointer">
                            <div className="relative overflow-hidden rounded-full bg-gray-50 dark:bg-gray-800 p-2 transition-all duration-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900">
                                <img 
                                    className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 transition-transform duration-300 group-hover:scale-110" 
                                    src="https://res.cloudinary.com/domn2k79e/image/upload/v1721061979/Pantry_Staples_q91qwa.png" 
                                    alt="Pantry Staples" 
                                />
                            </div>
                            <p className='text-xs md:text-sm xl:text-base font-medium mt-2 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>Pantry Staples</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center text-center justify-center group cursor-pointer">
                            <div className="relative overflow-hidden rounded-full bg-gray-50 dark:bg-gray-800 p-2 transition-all duration-300 group-hover:bg-green-50 dark:group-hover:bg-green-900">
                                <img 
                                    className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 transition-transform duration-300 group-hover:scale-110" 
                                    src="https://res.cloudinary.com/domn2k79e/image/upload/v1721061988/Vegetables_ee5d0r.png" 
                                    alt="Vegetables" 
                                />
                            </div>
                            <p className='text-xs md:text-sm xl:text-base font-medium mt-2 text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300'>Vegetables</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center text-center justify-center group cursor-pointer">
                            <div className="relative overflow-hidden rounded-full bg-gray-50 dark:bg-gray-800 p-2 transition-all duration-300 group-hover:bg-red-50 dark:group-hover:bg-red-900">
                                <img 
                                    className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 transition-transform duration-300 group-hover:scale-110" 
                                    src="https://res.cloudinary.com/domn2k79e/image/upload/v1721061979/meat_rnjgx3.png" 
                                    alt="Meat" 
                                />
                            </div>
                            <p className='text-xs md:text-sm xl:text-base font-medium mt-2 text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300'>Meat</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center text-center justify-center group cursor-pointer">
                            <div className="relative overflow-hidden rounded-full bg-gray-50 dark:bg-gray-800 p-2 transition-all duration-300 group-hover:bg-yellow-50 dark:group-hover:bg-yellow-900">
                                <img 
                                    className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 transition-transform duration-300 group-hover:scale-110" 
                                    src="https://res.cloudinary.com/domn2k79e/image/upload/v1721061988/vegetable-busket_ujn2xd.png" 
                                    alt="Snacks" 
                                />
                            </div>
                            <p className='text-xs md:text-sm xl:text-base font-medium mt-2 text-gray-700 dark:text-gray-300 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300'>Snacks</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center text-center justify-center group cursor-pointer">
                            <div className="relative overflow-hidden rounded-full bg-gray-50 dark:bg-gray-800 p-2 transition-all duration-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900">
                                <img 
                                    className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 transition-transform duration-300 group-hover:scale-110" 
                                    src="https://res.cloudinary.com/domn2k79e/image/upload/v1721061971/dairy_ua9wc1.png" 
                                    alt="Dairy" 
                                />
                            </div>
                            <p className='text-xs md:text-sm xl:text-base font-medium mt-2 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>Dairy</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center text-center justify-center group cursor-pointer">
                            <div className="relative overflow-hidden rounded-full bg-gray-50 dark:bg-gray-800 p-2 transition-all duration-300 group-hover:bg-orange-50 dark:group-hover:bg-orange-900">
                                <img 
                                    className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 transition-transform duration-300 group-hover:scale-110" 
                                    src="https://res.cloudinary.com/domn2k79e/image/upload/v1721061988/vegetable-busket_ujn2xd.png" 
                                    alt="Bakery" 
                                />
                            </div>
                            <p className='text-xs md:text-sm xl:text-base font-medium mt-2 text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300'>Bakery</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center text-center justify-center group cursor-pointer">
                            <div className="relative overflow-hidden rounded-full bg-gray-50 dark:bg-gray-800 p-2 transition-all duration-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900">
                                <img 
                                    className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 transition-transform duration-300 group-hover:scale-110" 
                                    src="https://res.cloudinary.com/domn2k79e/image/upload/v1721061972/fish_iyyh7z.png" 
                                    alt="Fish" 
                                />
                            </div>
                            <p className='text-xs md:text-sm xl:text-base font-medium mt-2 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>Fish</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center text-center justify-center group cursor-pointer">
                            <div className="relative overflow-hidden rounded-full bg-gray-50 dark:bg-gray-800 p-2 transition-all duration-300 group-hover:bg-purple-50 dark:group-hover:bg-purple-900">
                                <img 
                                    className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 transition-transform duration-300 group-hover:scale-110" 
                                    src="https://res.cloudinary.com/domn2k79e/image/upload/v1721061966/beverage_avof98.png" 
                                    alt="Beverage" 
                                />
                            </div>
                            <p className='text-xs md:text-sm xl:text-base font-medium mt-2 text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300'>Beverage</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center text-center justify-center group cursor-pointer">
                            <div className="relative overflow-hidden rounded-full bg-gray-50 dark:bg-gray-800 p-2 transition-all duration-300 group-hover:bg-green-50 dark:group-hover:bg-green-900">
                                <img 
                                    className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 transition-transform duration-300 group-hover:scale-110" 
                                    src="https://res.cloudinary.com/domn2k79e/image/upload/v1721061967/Cleaning_ekwoy1.png" 
                                    alt="Cleaning" 
                                />
                            </div>
                            <p className='text-xs md:text-sm xl:text-base font-medium mt-2 text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300'>Cleaning</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default TopHeader;