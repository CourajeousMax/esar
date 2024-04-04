import React from "react";
import Image from "next/image";
import MJ from "../../../public/assets/images/mj.JPG"
const About = () => {
  return (
    <div className="about__container">
      <div className="about__image-container">
        <Image
          className="about__image"
          alt="Mj Headshot"
          src={MJ}
          quality={75}
          size="50vw"
          style={{
            width: "50%",
            height: "auto",
          }}
        />
      </div>
      <div className="about__title">
        <h2 className="about__header">Reverend, Master Therapist of Light Therapy, Reiki, and Energist</h2>
        <h1 className="about__subheader">MJ Gonzalez</h1>
      </div>
      <div className="about__content">
        <p className="about__text">
          Rev. MJ Gonzalez's spiritual journey began at the tender age of 6 when she had her first profound encounter with the Divine. It happened
          while she was standing by her beloved creek behind her childhood home, where she witnessed her initial apparition. This early connection
          with the spiritual realm bestowed upon her the gift of the Clairs, including Clairsentience, Clairvoyance, Clairaudience, Claircognizance,
          Clairalience, Clairgustance, and the capability to perform Home, Office, and Vehicle Energy Clearing, Cleansing, and Protection Gridding – a
          skill set that involves addressing entities, spirits, ghosts, energies, implants, and portals. As she matured, these intuitive abilities
          only grew stronger.{" "}
          <p className="about__text">
            Additionally, Rev. MJ Gonzalez specializes in Personal Manifestations, Home and Business Grid Work, Candle Imagery Reading, and the
            interpretation of Energy Orbs. She is a gifted Energist, with the capacity to hold space for up to 100 individuals in ceremonial energy
            work. Her talents extend to Aura Reading and Teaching, Reiki Master Therapy of Light Therapy XII, Spiritual Interpretation Reading,
            Pendulum Practice, Intuitive Guidance, Spiritual Surgery, Energetics System Practice, Ionic Foot Detox, and Infrared Detox.
          </p>{" "}
          <p className="about__text">
            With her vast range of spiritual abilities and deep-rooted connection to the metaphysical, Rev. MJ Gonzalez offers a holistic approach to
            healing and guidance, making a significant impact in the lives of those she serves.
          </p>
        </p>
      </div>
    </div>
  );
};

export default About;
