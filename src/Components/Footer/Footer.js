import "../../Components/Footer/Footer.scss"
import { Instagram, Facebook, YouTube, EmailRounded, Phone } from "@mui/icons-material";
import React from 'react';

const Footer = () => {
    return (
      <>
        <div className="footer">
          <div className="footer__container ">
            <div className="footer__card">
              <section className="footer__label">
                <h2 className="footer__title" style={{ color: "white" }}>
                  Stay in Touch
                </h2>
                <a
                  className="footer__icon"
                  href="https://www.instagram.com/esmeraldassaltyairretreat/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram  />
                </a>
                <a className="footer__icon" href="https://www.facebook.com/profile.php?id=100067194408450" target="_blank" rel="noopener noreferrer">
                  <Facebook  />
                </a>
                <a className="footer__icon" href="https://www.youtube.com/@esmeraldasearthwindandfire4390" target="_blank" rel="noopener noreferrer">
                  <YouTube  />
                </a>
              </section>
            </div>
            <div className="footer__card">
              <section className="footer__label">
                <h2 >Contact Us</h2>
                <p >
                  <strong>
                    <EmailRounded />
                    Email:
                  </strong>
                  <a className="footer__email" href="mailto: esmeraldassaltyairretreat@gmail.com">
                    esmeraldassaltyairretreat@gmail.com{" "}
                  </a>
                </p>
                <p >
                  <strong>
                    <Phone />
                    Phone:&nbsp;
                  </strong>
                  <a href="tel:3055620090">
                    (305)-562-0090
                  </a>
                </p>
                <address >12307 SW 224th St, Miami, FL 33170</address>
              </section>
            </div>
          </div>
          <div className="footer__label">
            <p className="footer__address">
              CopyRight &copy; 2023 Esmeraldas Salty Air Retreat LLC - All Rights Reserved.
            </p>
          </div>
        </div>
      </>
    );
};

export default Footer;