import "../Hero/Hero.scss";
import Image from "next/image";
import Link from "next/link";
import Lamp from "../../../public/assets/images/light.webp";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <div className="hero__container-images">
            <Image
              className="hero__image"
              alt="Himalayan Bowl Lamp"
              src={Lamp}
              quality={75}
              size="50vw"
              style={{
                width: "45vh",
                height: "auto",
              }}
            />
          </div>
          <div className="hero__header-container">
            <div className="hero__title-container">
              <h1 className="hero__title">Welcome to your spiritual home, Illuminate Your Space</h1>
            </div>
            <div className="hero__button-container">
              <Link
                href="https://squareup.com/appointments/book/8c805443-b0f7-4e3a-b3fe-40e11b7419f5/ZTP8PZRX5ME1Y/start"
                target="_blank"
                rel="noopener noreferrer"
              >
              <button className="hero__button ">
                Book Now
              </button>
                
              </Link>
            </div>
          </div>
          {/* <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSwcGj5RMKbrjCZt_Cx0VlVpXyKchXbufwjQcNcAC-Omv9ZEcxXB1lrQwO8VQfOD80WII-1wc9FlFVI/pubhtml?widget=true&amp;headers=false"></iframe> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
