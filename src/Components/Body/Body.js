import "../Body/Body.scss";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import Image from "next/image";
import Lamps from "../../../public/assets/images/lamps.jpg";
import Shop from "../../../public/assets/images/salt-shop.jpg";
import Class from "../../../public/assets/images/cave_class.jpg";
import Candle from "../../../public/assets/images/candle.jpg";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../../Components/Footer/Footer";
import React from "react";
import Video from "../Video/Video";

const Body = () => {
  const bookingUrl = "https://squareup.com/appointments/book/8c805443-b0f7-4e3a-b3fe-40e11b7419f5/ZTP8PZRX5ME1Y/start";
  return (
    <>
      <section className="body">
        <div className="body__info-container">
          <ul className="body__image-grid">
       

            <li className="body__image-row">
              <Image
                className="body__image"
                alt="three salt lamps in a row"
                src={Lamps}
                quality={75}
                size="50vw"
                style={{
                  width: "50%",
                  height: "auto",
                }}
              />{" "}
              
                <Image
                  alt="Group Class inside the cave"
                  src={Class}
                  quality={75}
                  size="50vw"
                  style={{
                    width: "50%",
                    height: "auto",
                  }}
                />
            </li>
          </ul>
          <div className="body__container">
            <div className="body__header-container">
              <h2 className="body__header body__title">Soothing Salts </h2>
            </div>
            <div className="body__subheader-container">
              <h3 className="body__subheader body__title">Why Salt? </h3>
            </div>
            <div className="body__text-container">
              <p className="body__text  body__paragraph">
                Your skin is an excretory organ that mirrors the condition of your intestines. When you take a salt water (brine) bath, the salt
                minerals penetrate your skin in the form of ions. This stimulation will cause natural cell growth in your living cell layers.
                Bio-energetic weak points will be balanced and your body's energy flow will be activated. While anyone can benefit from a brine bath,
                it is particularly soothing for those with:
                <div className="body__text-container">
                  <p className="body__text  body__paragraph">
                    Various Skin Diseases, Rheumatism and joint diseases, A post-operative care regimen, Recurring infections Severe insect bites,
                    blisters or wounds Skin irritations from poison oak, ivy or sumac.
                  </p>
                </div>
              </p>
            </div>

            <div className="events__fact-container fact">
              <TipsAndUpdatesIcon />
              <p className="events__fact">
                WARNING: While brine baths have a positive effect on many ailments, they are also demanding on your circulatory system. If you suffer
                from weak or poor heart circulation, always consult your doctor first.
              </p>
            </div>
          </div>
        </div>
        <div className="body__text-container">
          <div className="body__header-container">
            <h2 className="body__header body__title">The Benefits </h2>
          </div>
          <div className="body__text">
            <h3 className="body__title">Mineral Soak</h3>
            <p className="body__text body__paragraph">
              Mineral Soak Salt and mineral baths are a great way to relax at the end of the day while simultaneously infusing the skin and body with
              minerals and hydration. Through the process of dermal absorption, skin soaks up minerals from the water - often better than if the same
              minerals were consumed internally. Because it contains so many of the different minerals our bodies need to stay healthy, when it comes
              to the best things to put in your bath water, Himalayan pink salt is at the top of the list.
            </p>
          </div>
          <div className="body__text">
            <h3 className="body__title">Soothe Away Soreness</h3>
            <p className="body__text body__paragraph">
              Mineral Soak Salt and mineral baths are a great way to relax at the end of the day while simultaneously infusing the skin and body with
              minerals and hydration. Through the process of dermal absorption, skin soaks up minerals from the water - often better than if the same
              minerals were consumed internally. Because it contains so many of the different minerals our bodies need to stay healthy, when it comes
              to the best things to put in your bath water, Himalayan pink salt is at the top of the list.
            </p>
          </div>{" "}
          <div className="body__text">
            <h3 className="body__title">Detoxifiction</h3>
            <p className="body__text body__paragraph">
              When H.P.S. is added to a bath of warm (preferably about the same as body temperature) water, it not only provides much-needed nutrients
              to your body. Himalayan pink salt also works as a powerful detoxifier. When dissolved in water, H.P.S. becomes an ionic solution that
              helps to draw the toxins out of skin and adipose tissues. This process combined with the healing mineral infusion offered by a good
              Himalayan pink salt soak will leave you feeling refreshed and energized. Bath Salts: Bath salts are great for soaking in. The ancient
              Greeks even recommended seaside health resorts in order to help cure skin diseases, and 16th-century physician and alchemist Paracelsus
              proclaimed that a salt bath was 'better than all the health spas arising out of nature.' Himalayan salt baths take it to a whole new
              level. Since Himalayan Salt is rich in minerals, soaking in a solution of bath water infused with it allows the skin to soak up these
              minerals including calcium, copper, iodine, iron, magnesium, manganese, phosphorus, potassium, selenium, sodium, and zinc in a process
              known as dermal absorption.
            </p>
          </div>
        </div>

        <div className="body__content">
          <div className="body__image-container">
            <Image
              alt="Salty Aire Retreat Shop"
              src={Shop}
              quality={75}
              size="50vw"
              style={{
                width: "50vh",
                height: "auto",
              }}
            />
          </div>
          <div className="body__paragraph-container">
            <h2 className="body__title">Nature's Healing Happiness</h2>
            <p className="body__paragraph">
              Himalayan Pink Salt Lamps (HSL) are celebrated for their natural healing properties and their ability to enhance overall well-being.
              These remarkable creations of nature offer a multitude of benefits for our lives. HSL function as air purifiers by utilizing hygroscopic
              properties to attract and trap contaminated water molecules from the environment, effectively removing cigarette smoke, dust, allergens,
              and other pollutants. As the lamp heats up from the incandescent light source, the trapped particles remain locked in the salt crystal.
              This purification process significantly reduces allergy symptoms and can even benefit individuals with asthma.
            </p>
            <p className="body__paragraph">
              Moreover, HSL release negative ions, which promote healthier breathing by enhancing cilia activity and filtering foreign particles,
              potentially safeguarding against airborne germs. These negative ions can also boost energy levels, akin to the invigorating effects of
              spending time in natural settings rich in negative ions, counteracting the draining impact of positive ions on our bodies.
            </p>
          </div>
        </div>
      </section>
      <section className="info">
        <div
          className="
        info__container info__container--first"
        >
          <div className="info__item info__item--first reiki">
            <div className="info__content">
              <h2 className="info__subtitle">Reiki Services</h2>
              <p className="info__text">Energy Healing</p>
            </div>
            <p className="info__text">
              Experience the transformative power of Reiki, a holistic healing practice that balances your energy and enhances your well-being. Book a
              session today to alleviate stress, improve mental clarity, and restore harmony to your mind and body.
            </p>
          </div>
        </div>
        <div className=" info__container info__container--second">
          <div className="info__item info__item--first kim">
            <div className="info__content">
              <h2 className="info__subtitle">Going to Kim's </h2>
              <p className="info__text">Come start your healing journey </p>
            </div>
            <p className="info__text">
              Open your Faith, Mind, Power Center! Light Therapy, Pendulum, and Chakra classes are available seasonally! Contact us for more details!{" "}
            </p>
          </div>
        </div>
        <div className="info__container info__container--third">
          <div className="info__item info__item--second yoga">
            <div className="info__content">
              <h2 className="info__subtitle">Salt Cave Yoga </h2>
              <p className="info__text">Gentle flow, Stretch & Breathwork</p>
            </div>
            <p className="info__text">
              Receive the benefits of both modalities: yoga for mind, body and soul and salt for physical and spiritual healing
              <p className="info__text">All practice levels</p>
            </p>
          </div>
        </div>
      </section>
      <section className="events">
        <div className="events__title-container">
          <h2 className="body__title">Events</h2>{" "}
          <div className="events__frame-container">
            <iframe
              className="events__frame"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTwxajben8bAl8w4pVVLYU3FyMSCtM47CcjppaIfo7Flq41B9uiPIaWnOO_2_OwPRU7GtjW_5seUQrb/pubhtml?widget=true&amp;headers=false"
              width=" 140%"
              height="1000vh"
              overflow="auto"
            ></iframe>
          </div>
          <div className="events__fact-container fact">
            <TipsAndUpdatesIcon />
            <p className="events__fact">
              Thank you for considering us! Feel free to contact us at{" "}
              <strong>
                <a href="tel:+13055620090" className="contact-link">
                  (305)-562-0090
                </a>{" "}
              </strong>{" "}
              with any further questions or to proceed with the payment to complete your booking process. We look forward to assisting you!
            </p>
          </div>
          <div className="events__fact-container fact">
            <TipsAndUpdatesIcon />
            <p className="events__fact">
              Please remember to wear socks at all times inside the cave and bring a blanket and/or comfy clothes as it can get cold! Food and drinks
              are not permitted inside the cave. Thank you!
            </p>
          </div>
          <div className="events__button-container">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
              <button className="events__button button">Book Now</button>
            </a>
          </div>
        </div>
      </section>
      <section className="video">
        <Video />

      </section>
      <section className="contact">
        <form className="contact__form" action="https://formsubmit.co/esmeraldassaltyairretreat@gmail.com" method="POST">
          <h2 className="contact__page-header">Contact Us!</h2>
          <div className="contact__container">
            <ContactForm label="Name:" name="Name" type="text" id="name" />
            <ContactForm label="Email:" name="Email" type="email" id="email" />
            <ContactForm label="Phone Number:" name="Phone Number" type="tel" id="phoneNumber" />
            <ContactForm label="Message:" name="Message" type="text" id="Message" />
            <button className="contact__form-button button">
              <p className="contact__form-button--text">Send</p>
            </button>
          </div>
        </form>
        <Image
          alt="Candle"
          src={Candle}
          quality={75}
          size="25vw"
          className="contact__image
          "
          style={{
            width: "25%",
            height: "auto",
          }}
        />
      </section>
      <Footer />
    </>
  );
};

export default Body;
