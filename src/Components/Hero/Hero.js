import "../Hero/Hero.scss";
import Image from "next/image";
import Lamp from "../../../public/assets/images/light.webp";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <div className="hero__image-wrapper">
            <Image
              className="hero__image"
              alt="Himalayan Bowl Lamp"
              src={Lamp}
              quality={75}
              size="50vw"
              style={{
                width: "50%",
                height: "auto",
              }}
            />
          </div>
          <div className="hero__title-container">
            <h1 className="hero__title">Welcome to your spiritual home, Illuminate Your Space</h1>
          </div>
          <div className="hero__button-container">
            <button className="hero__button">
              <h1 className="hero__button-text">View Events</h1>
            </button>
          </div>
          {/* <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSwcGj5RMKbrjCZt_Cx0VlVpXyKchXbufwjQcNcAC-Omv9ZEcxXB1lrQwO8VQfOD80WII-1wc9FlFVI/pubhtml?widget=true&amp;headers=false"></iframe> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
