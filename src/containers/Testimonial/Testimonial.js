import { doc, getDoc } from 'firebase/firestore';
import { forwardRef, useEffect, useState } from 'react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ScreenHeading from '../../components/ScreenHeading/ScreenHeading';
import WaveDecoration from '../../components/WaveDecoration/WaveDecoration';
import { db } from '../../firebase';
import './Testimonial.css';
import TestimonialSlide from './TestimonialSlide/TestimonialSlide';

const Testimonial = forwardRef((props, ref) => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    (async () => {
      const docRef = doc(db, 'portfolio', 'testimonials');
      const docSnap = await getDoc(docRef);

      docSnap.exists() && setTestimonials(docSnap.data().testimonials);
    })();
  }, []);

  return (
    <section className="testimonial" ref={ref}>
      <ScreenHeading
        title="Testimonial"
        subHeading="What My Client Say About Me"
      />

      <div className="testimonial-section">
        <div className="container">
          <div className="row">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false
              }}
              loop
              speed={1000}
              grabCursor
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30
                }
              }}
            >
              {testimonials.map(
                ({ id, name, description, imgSrc, stars, testimonial }) => (
                  <SwiperSlide key={id}>
                    <TestimonialSlide
                      name={name}
                      desc={description}
                      imgSrc={imgSrc}
                      stars={stars}
                    >
                      {testimonial}
                    </TestimonialSlide>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        </div>
        <WaveDecoration />
      </div>
    </section>
  );
});

export default Testimonial;
