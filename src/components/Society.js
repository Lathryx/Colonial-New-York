import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Autoplay, Pagination, Navigation } from 'swiper'; 

import ColonialNewYorkCity from './images/Colonial_New_York_City.png'; 
import ColonialAlbany from './images/Colonial_Albany.png'; 
import ColonialBrooklyn from './images/Colonial_Brooklyn.png'; 
import ColonialRochester from './images/Colonial_Rochester.png'; 


const cities_info = [
    {
        image: ColonialNewYorkCity, 
        name: 'New York City' 
    }, 
    {
        image: ColonialAlbany, 
        name: 'Albany' 
    }, 
    {
        image: ColonialBrooklyn, 
        name: 'Brooklyn' 
    }, 
    {
        image: ColonialRochester, 
        name: 'Rochester' 
    }
]; 

export default function Society() {
    return (
        <div className="relative my-5 px-10 py-5 w-full max-h-[75vh] bg-neutral"> 
            <p className="mx-auto mb-5 pb-2 w-1/4 text-center text-2xl font-bold border-b-2 border-b-primary">Locations</p> 
            <Swiper className="my-5 w-full md:w-1/3 h-full rounded-lg" style={{ "--swiper-pagination-color": "#3ABEF8", "--swiper-navigation-color": "#3ABEF8" }} slidesPerView={1} centeredSlides={true} spaceBetween={30} autoplay={{ delay: 2500, disableOnInteraction: false }} loop={true} pagination={{ clickable: true }} navigation={true} modules={[Autoplay, Pagination, Navigation]}>
                {cities_info.map((city, index) => (
                    <SwiperSlide className="flex flex-col justify-center items-center" key={index}>
                        <p className="mb-3 text-lg font-semibold italic">{city.name}</p>
                        <img className="w-full h-full rounded-xl" src={city.image} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <p className="mx-auto w-3/4 text-center footer-title normal-case font-semibold italic">The Dutch first settled along the Hudson River in 1624; two years later they established the colony of New Amsterdam on Manhattan Island. In 1664, the English took control of the area and renamed it New York. </p> 
        </div> 
    ); 
}