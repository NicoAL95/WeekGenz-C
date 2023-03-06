import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper';

export default function TestiSlider({ testimonials }) {
  return (
    <section className='testiSlider'>
      <div className='sliderTitle'>
        <h1 className='littleTitle'>Testimonial</h1>
        <h1 className='mainTitle'>People Talk About Us</h1>
      </div>
      <div className='sliderTesti'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          grabCursor={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            10: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            870: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Pagination]}
        >
          {/* dinamis */}
          {testimonials &&
            testimonials.map((testimonial) => {
              const {
                id,
                name,
                rolePosition,
                testimonialText,
                testimonialImage,
              } = testimonial;
              return (
                <SwiperSlide key={id}>
                  <div className='miniCard'>
                    <div className='miniHead'>
                      <div className='miniImg'>
                        <Image
                          src={`${testimonialImage.url}`}
                          layout='fill'
                          objectFit='cover'
                          className='imgFace'
                          alt=''
                        />
                      </div>
                      <div className='miniProfile'>
                        <h1 className='miniName'>{name}</h1>
                        <h1 className='miniJob'>{rolePosition}</h1>
                      </div>
                    </div>
                    <div className='miniBody'>
                      <h1>{testimonialText}</h1>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
}
