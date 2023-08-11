import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/adeayomide112/",
      name: "Adelaja Ayomide",
      role: "Fullstack & Blockchain Developer | React | React Native | Next | Rust | Solidity | Sanity.",
      test: "I would highly recommend Micheal to anyone at anytime. He’s very diligent and takes keen attention to microscopic details that would have been otherwise ignored. Simply put, Micheal is amazing at his job and he knows his way around people, he is good with the clients, does whatever it takes to help colleagues and gets things done. He makes sure that everyone is on the same page and focused on the main goal.",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/great-oloyede-854918199/",
      name: "Great Oloyede",
      role: "Content Writer. Exploring the colorful world of Java. Loving Community Management. Busy being alive and living.",
      test: "If you're looking for a focused, high powered, creative, smart, brilliant,and understanding individual to work with... this is your guy! Micheal is a team player. He's valuable wherever he is and he never slacks in putting in the work. He is great at what he does and never stops upgrading. Working with Micheal is a blessing",
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/elena-bargaoanu/",
      name: "Elena Bargaoanu",
      role: "UX/UI Designer with a background in customer support.",
      test: "Micheal is an agile problem solver and a great collaborator who built amazing designs over time. He’s reliable, articulate, dedicated, and has a strong ability to assist teams to optimize their time and workflows. I highly recommend Micheal who would be a true asset for your business!",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Recommendations</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">
              <a href={test.link}>
                <BsLinkedin />
              </a>
            </div>
            <h3 className="client__name">{test.name}</h3>
            <h6 className="client__role">{test.role}</h6>
            <small className="client__review">{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
