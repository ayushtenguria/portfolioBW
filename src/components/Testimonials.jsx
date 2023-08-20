
import { TestimonialCard } from "./TestimonialCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Testimonial = () => {
  return (
    <section>
      <div className="flex justify-center mt-10 md:mt-28">
        <h1 className="text-3xl md:text-5xl font-semibold">Testimonial</h1>
      </div>

      <div className="flex md:flex-row flex-col justify-around my-10 md:my-36">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>

      {/* <Carousel>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </Carousel> */}
    </section>
  );
};
