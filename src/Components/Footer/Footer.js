import "../../Components/Footer/Footer.scss";
import { Instagram, Facebook, EmailRounded, LocationOn, Phone } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <section className="footer__label">
          <div className="footer__container ">
            <h2 className="footer__subtext">Stay in Touch</h2>
            <p className="footer__subtext">Follow us on Instagram and Facebook to get the latest updates!</p>
            <div className="footer__card">
              <a className="footer__icon" href="https://www.instagram.com/esmeraldassaltyairretreat/?hl=en" target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>
              <a className="footer__icon" href="https://www.facebook.com/profile.php?id=100067194408450" target="_blank" rel="noopener noreferrer">
                <Facebook />
              </a>
              <a
                className="footer__icon"
                href="https://www.youtube.com/@esmeraldasearthwindandfire4390"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </div>
          </div>
          <div className="footer__icon-container">
            <span className="footer__icon">
              <EmailRounded />
            </span>
            <p className="footer__icon">
              <a className="footer__subtext" href="mailto: esmeraldassaltyairretreat@gmail.com">
                esmeraldassaltyairretreat@gmail.com{" "}
              </a>
            </p>
          </div>
          <div className="footer__icon-container">
            <span className="footer__icon">
              <Phone />
            </span>

            <p className="footer__icon">
              <a className="footer__subtext" href="tel:3055620090">
                (305)-562-0090
              </a>
            </p>
          </div>
          <div className="footer__icon-container">
            <span className="footer__icon">
              <LocationOn />
            </span>
            <p className="footer__icon">
              <a
                className="footer__subtext"
                href="https://www.google.com/maps/place/12307+SW+224th+St,+Miami,+FL+33170/@25.5589887,-80.3932249,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9c33fd4732ca1:0xb6ac7a2689c40900!8m2!3d25.5589839!4d-80.3906446!16s%2Fg%2F11bw3_74wh?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <address>12307 SW 224th St, Miami, FL 33170</address>
              </a>
            </p>
          </div>
        </section>
      <div className="footer__label">
        <p className="footer__subtext">CopyRight &copy; 2024 Stephany (Max) Munoz - All Rights Reserved.</p>
      </div>
      </div>
    </>
  );
};

export default Footer;
