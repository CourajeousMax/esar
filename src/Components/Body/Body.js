import "../Body/Body.scss";
import Image from "next/image";
import Lamps from "../../../public/assets/images/lamps.jpg";
import Hand from "../../../public/assets/images/hand-salt.jpg";
import Desk from "../../../public/assets/images/lamp-desk.jpg";
import React from "react";

const Body = () => {
  return (
    <section className="body">
      <div className="body__container">
        <div className="body__image-container">
          <ul className="body__image-grid">
            <li className="body__image-row">
              <Image
                alt="three salt lamps in a row"
                src={Lamps}
                quality={75}
                size="50vw"
                style={{
                  width: "50%",
                  height: "auto",
                }}
              />{" "}
            </li>

            <li className="body__image-row">
              <Image
                alt="pouring himalayan salt into hand"
                src={Hand}
                quality={75}
                size="50vw"
                style={{
                  width: "50%",
                  height: "auto",
                }}
              />{" "}
            </li>

            <li className="body__image-row">
              <Image
                alt="himalayan salt lamp on desk"
                src={Desk}
                quality={75}
                size="50vw"
                style={{
                  width: "50%",
                  height: "auto",
                }}
              />
            </li>
          </ul>
        </div>
        <div className="body__header-container">
          <h2 className="body__header">Soothing Salts </h2>
        </div>
        <div className="body__subheader-container">
          <h3 className="body__subheader">Why Salt? </h3>
        </div>
        <div className="body__text-container">
          <p className="body__text">
            Your skin is an excretory organ that mirrors the condition of your intestines. When you take a salt water (brine) bath, the salt minerals
            penetrate your skin in the form of ions. This stimulation will cause natural cell growth in your living cell layers. Bio-energetic weak
            points will be balanced and your body's energy flow will be activated. While anyone can benefit from a brine bath, it is particularly
            soothing for those with:
          </p>
        </div>
      </div>
    </section>
  );
};

export default Body;
