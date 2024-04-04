import "../Body/Body.scss";
import Image from "next/image";
import Lamps from "../../../public/assets/images/lamps.jpg";
import Shop from "../../../public/assets/images/salt-shop.jpg";
import Class from "../../../public/assets/images/cave_class.jpg";
import React from "react";

const Body = () => {
  return (
    <section className="body">
      <div className="body__container">
        <div className="body__header-container">
          <h2 className="body__header body__title">Soothing Salts </h2>
        </div>
        <div className="body__subheader-container">
          <h3 className="body__subheader body__title">Why Salt? </h3>
        </div>
        <div className="body__image-container">
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
            </li>

            {/* <li className="body__image-row">
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
            </li> */}
          </ul>
          <div className="body__text-container">
            <p className="body__text  body__paragraph">
              Your skin is an excretory organ that mirrors the condition of your intestines. When you take a salt water (brine) bath, the salt
              minerals penetrate your skin in the form of ions. This stimulation will cause natural cell growth in your living cell layers.
              Bio-energetic weak points will be balanced and your body's energy flow will be activated. While anyone can benefit from a brine bath, it
              is particularly soothing for those with:
            </p>
          </div>
          <div className="body__subtext-container">
            <p className="body__subtext ">
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
            minerals were consumed internally. Because it contains so many of the different minerals our bodies need to stay healthy, when it comes to
            the best things to put in your bath water, Himalayan pink salt is at the top of the list.
          </p>
        </div>
        <div className="body__text">
          <h3 className="body__title">Soothe Away Soreness</h3>
          <p className="body__text body__paragraph">
            Mineral Soak Salt and mineral baths are a great way to relax at the end of the day while simultaneously infusing the skin and body with
            minerals and hydration. Through the process of dermal absorption, skin soaks up minerals from the water - often better than if the same
            minerals were consumed internally. Because it contains so many of the different minerals our bodies need to stay healthy, when it comes to
            the best things to put in your bath water, Himalayan pink salt is at the top of the list.
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
      <div className="body__nature-container">
        <div className="body__text">
          <h2 className="body__title">Nature's Healing Happiness</h2>
          <div className="body__image-container">
            <Image
              alt="Salty Aire Retreat Shop"
              src={Shop}
              quality={75}
              size="50vw"
              style={{
                width: "50%",
                height: "auto",
              }}
            />
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
      </div>
    </section>
  );
};

export default Body;
