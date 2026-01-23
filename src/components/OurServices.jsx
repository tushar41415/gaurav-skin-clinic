import React from "react";

const services = [
  {
    title: "Hair Thinning & Anti Dandruff Treatment",
    img: "/images/Hair.jpeg",
  },
  {
    title: "Hair Fast Treatment & Hair Scalp Therapy",
    img: "/images/Hairfast.png",
  },
  {
    title: "Advanced Hair Regrowth Treatment",
    img: "/images/Hairgrowth.jpg",
  },
  {
    title: "Alopecia Areata Treatment",
    img: "/images/Areata.jpg",
  },
  {
    title: "Female Pattern Hair Loss Treatment",
    img: "/images/FemaleHair.jpg",
  },
  {
    title: "Male Pattern Hair Loss Treatment",
    img: "/images/MaleHair.jpg",
  },
  {
    title: "Hair Transplant Consultation",
    img: "/images/PainlessHair.jpg",
  },
  {
    title: "PRP & Advanced Hair Procedures",
    img: "/images/HairPRP.jpeg",
  },
  {
    title: "Hair Density Treatment",
    img: "/images/service1.jpeg",
  },
  {
    title: "Hair Loss Treatment",
    img: "/images/service2.jpeg",
  },
  {
    title: "Hair Thickness Treatment",
    img: "/images/service3.jpeg",
  },
  {
    title: "Acne, Pimple, Zap, Acne Scars Treatment",
    img: "/images/service4.jpeg",
  },
  {
    title: "Chemical Peeling",
    img: "/images/service5.jpeg",
  },
  {
    title: "Carbon Laser Facial",
    img: "/images/service6.jpeg",
  },
  {
    title: "Face Meso",
    img: "/images/service7.jpeg",
  },
  {
    title: "Face MN Glow Treatment",
    img: "/images/service8.jpeg",
  },
  {
    title: "Hydrafacial (with Jelly Mask & Sheet Mask)",
    img: "/images/service9.jpeg",
  },
  {
    title: "IV Glow Drip Treatment",
    img: "/images/service10.jpeg",
  },
  {
    title: "Korean Glass Glow Facial",
    img: "/images/service11.jpeg",
  },
  {
    title: "Medifacial – Skin Detan, Skin Lightening, Whitening, Brightening, Aqua gold Facial",
    img: "/images/service12.jpeg",
  },
  {
    title: "Laser Hair Reduction – Full body & Body Part",
    img: "/images/service13.jpeg",
  },
  {
    title: "Skin Rejuvenation / Full Body Polishing via laser machine",
    img: "/images/service14.jpeg",
  },
  {
    title: "Photo Facial",
    img: "/images/service15.jpeg",
  },
  {
    title: "Pigmentation, Sun damage, Freckle, Dark Spots, Melasma Treatment",
    img: "/images/service16.jpeg",
  },
  {
    title: "Skin Glow Facial Treatment",
    img: "/images/service17.jpeg",
  },
  {
    title: "BB Glow Treatment & Oxygen Facial",
    img: "/images/service18.jpeg",
  },
  {
    title: "Tattoo Removal Treatment",
    img: "/images/service19.jpeg",
  },
  {
    title: "Cupping Therapy",
    img: "/images/service20.jpeg",
  },
  {
    title: "Mole, Wart Removal",
    img: "/images/service21.jpeg",
  },
  {
    title: "PMU makeup, PMU eye brow",
    img: "/images/service22.jpeg",
  },
  {
    title: "Fillers",
    img: "/images/service23.jpeg",
  },
  {
    title: "Stretch Marks Removal Treatment",
    img: "/images/service24.png",
  },
  {
    title: "Thread, Face lift",
    img: "/images/service25.jpeg",
  },
  {
    title: "Anti Ageing treatment, Face wrinkles, sagging eyelid eyebrows",
    img: "/images/service26.jpeg",
  },
  {
    title: "Lip Lightening Treatment",
    img: "/images/service27.jpeg",
  },
  {
    title: "HIFU Treatment",
    img: "/images/service28.jpeg",
  },
  {
    title: "Wellness Services, Slimming, Diet, Body Contouring",
    img: "/images/service29.jpeg",
  },
  {
    title: "Under Eye Dark Circles Treatment",
    img: "/images/service30.jpeg",
  },
];

const OurServices = () => {
  return (
    <section className="our-services">
      <div className="container">

        <h2 className="services-title">Our services</h2>

        <div className="row">
          {services.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="service-card">
                <img src={item.img} alt={item.title} />
                <h5>{item.title}</h5>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;
