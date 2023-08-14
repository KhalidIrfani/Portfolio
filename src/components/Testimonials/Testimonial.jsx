import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Collaborating with M.Khalid Irfani has been a delight. His expertise in React, Material-UI, and Tailwind CSS shines through the project. The dynamic React components, polished and elevated our project's quality.Khalid's seamless integration of these technologies showcases his dedication and skill",
    },
    {
      img: profilePic2,
      review:
        "An embodiment of full-stack excellence, this project harmoniously merges captivating front-end design with robust back-end functionality. Crafted with React, Material-UI, and Tailwind CSS, it delivers a seamless user experience while efficiently managing data and interactions",
    },
    {
      img: profilePic3,
      review:
        "Experience innovation with our cutting-edge e-commerce platform. Seamlessly designed for intuitive navigation and powered by secure payment gateways, our site offers a vast product range. With a user-friendly interface, personalized recommendations, and efficient order processing, shopping becomes a delightful journey.",
    },
    {
      img: profilePic4,
      review:
        "The front-end work done by M.Khalid Irfani is nothing short of awe-inspiring. Their expertise in harnessing the power of React, Material-UI, and Tailwind CSS is evident in every pixel. Navigating our project is a visual treat, showcasing their ability to craft stunning interfaces and engaging layouts. Khalid's contribution has truly elevated our user experience",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
