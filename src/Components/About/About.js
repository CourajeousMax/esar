import "../About/About.scss";
import React from "react";
import Image from "next/image";
import MJ from "../../../public/assets/images/mj.JPG";
import Main from "../../../public/assets/images/salt-main.jpg";
import Private from "../../../public/assets/images/salt-private.jpg";
import Cave from "../../../public/assets/images/cave.jpg";
import Shop from "../../../public/assets/images/salt-shop.jpg";
const About = () => {
  return (
    <section className="about">
      <div className="about__container about__container-item">
        <div className="about__container-image">
          <Image
            className="about__image"
            alt="Mj Headshot"
            src={MJ}
            quality={75}
            size="50vw"
            style={{
              width: "40%",
              height: "auto",
            }}
          />
        </div>
        <div className="about__title">
          <h2 className="about__header about__color">Reverend, Master Therapist of Light Therapy, Reiki, and Energist</h2>
          <h1 className="about__subheader about__color">MJ Gonzalez</h1>
        </div>
        <div className="about__content">
          <p className="about__text about__color">
            Rev. MJ Gonzalez's spiritual journey began at the tender age of 6 when she had her first profound encounter with the Divine. It happened
            while she was standing by her beloved creek behind her childhood home, where she witnessed her initial apparition. This early connection
            with the spiritual realm bestowed upon her the gift of the Clairs, including Clairsentience, Clairvoyance, Clairaudience, Claircognizance,
            Clairalience, Clairgustance, and the capability to perform Home, Office, and Vehicle Energy Clearing, Cleansing, and Protection Gridding –
            a skill set that involves addressing entities, spirits, ghosts, energies, implants, and portals. As she matured, these intuitive abilities
            only grew stronger.
          </p>
          <p className="about__text about__color">
            Additionally, Rev. MJ Gonzalez specializes in Personal Manifestations, Home and Business Grid Work, Candle Imagery Reading, and the
            interpretation of Energy Orbs. She is a gifted Energist, with the capacity to hold space for up to 100 individuals in ceremonial energy
            work. Her talents extend to Aura Reading and Teaching, Reiki Master Therapy of Light Therapy XII, Spiritual Interpretation Reading,
            Pendulum Practice, Intuitive Guidance, Spiritual Surgery, Energetics System Practice, Ionic Foot Detox, and Infrared Detox.
          </p>{" "}
          <p className="about__text about__color">
            With her vast range of spiritual abilities and deep-rooted connection to the metaphysical, Rev. MJ Gonzalez offers a holistic approach to
            healing and guidance, making a significant impact in the lives of those she serves.
          </p>
        </div>
      </div>
      <div className="about__shop">
        <div className="about__image-container">
          <Image
            className="about__image"
            alt="Salt Cave main room"
            src={Main}
            quality={75}
            size="50vw"
            style={{
              width: "50%",
              height: "auto",
            }}
          ></Image>
          <Image
            className="about__image"
            alt="Salt Cave private room"
            src={Private}
            quality={75}
            size="50vw"
            style={{
              width: "50%",
              height: "auto",
            }}
          ></Image>
          <Image
            className="about__image"
            alt="Outside of salt cave"
            src={Cave}
            quality={75}
            size="50vw"
            style={{
              width: "50%",
              height: "auto",
            }}
          ></Image>
          <Image
            className="about__image"
            alt="Salt Shop"
            src={Shop}
            quality={75}
            size="50vw"
            style={{
              width: "50%",
              height: "auto",
            }}
          ></Image>
        </div>
        <div className="about_container-shop">
          <div className="about__content about__container-item">
            <h2 className="about__shop-title">Our Story. Your Healing.</h2>
            <h3 className="about__shop-title">In the Heart of Cauley Square</h3>
            <p className="about__shop-text">
              Esmeralda Salty Air Retreat, located within Cauley Square, boasts a serene and rejuvenating salt cave experience. This unique sanctuary
              offers visitors a tranquil environment filled with therapeutic microsalt particles, known for their potential respiratory and relaxation
              benefits. The cave's soothing ambiance and natural salt-infused air create a serene haven for relaxation and wellness seekers.
            </p>
            <p className="about__shop-text">Located at:12307 SW 224th St, Miami, FL 33170</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
