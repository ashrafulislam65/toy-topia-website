
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';




const Slider = () => {

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className='md:h-[500px] w-full' src="https://i.ibb.co.com/HT8GHbk5/lego-classic-bricks.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='md:h-[500px] w-full' src="https://i.ibb.co.com/Xk7chkK7/Barbie-Dreamhouse-Copy.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='md:h-[500px] w-full' src="https://i.ibb.co.com/rRQM8Qrs/Hot-Wheels-Mega-Track-Set.jpg" alt="" /></SwiperSlide>
                
            </Swiper>
        </>
    );
};

export default Slider;