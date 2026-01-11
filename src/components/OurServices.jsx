import React from "react";

const services = [
  {
    title: "Hair Thinning & Anti Dandruff Treatment",
    img: "/Hair.jpeg",
  },
  {
    title: "Hair Fast Treatment & Hair Scalp Therapy",
    img: "/Hairfast.png",
  },
  {
    title: "Advanced Hair Regrowth Treatment",
    img: "/Hairgrowth.jpg",
  },
  {
    title: "Alopecia Areata Treatment",
    img: "/Areata.jpg",
  },
  {
    title: "Female Pattern Hair Loss Treatment",
    img: "/FemaleHair.jpg",
  },
  {
    title: "Male Pattern Hair Loss Treatment",
    img: "/MaleHair.jpg",
  },
  {
    title: "Hair Transplant Consultation",
    img: "/PainlessHair.jpg",
  },
  {
    title: "PRP & Advanced Hair Procedures",
    img: "/HairPRP.jpeg",
  },
  {
    title: "Hair Density Treatment",
    img: "/service1.jpeg",
  },
  {
    title: "Hair Loss Treatment",
    img: "/service2.jpeg",
  },
  {
    title: "Hair Thickness Treatment",
    img: "/service3.jpeg",
  },
  {
    title: "Acne, Pimple, Zap, Acne Scars Treatment",
    img: "/service4.jpeg",
  },
  {
    title: "Chemical Peeling",
    img: "/service5.jpeg",
  },
  {
    title: "Carbon Laser Facial",
    img: "/service6.jpeg",
  },
  {
    title: "Face Meso",
    img: "/service7.jpeg",
  },
  {
    title: "Face MN Glow Treatment",
    img: "/service8.jpeg",
  },
  {
    title: "Hydrafacial (with Jelly Mask & Sheet Mask)",
    img: "/service9.jpeg",
  },
  {
    title: "IV Glow Drip Treatment",
    img: "/service10.jpeg",
  },
  {
    title: "Korean Glass Glow Facial",
    img: "/service11.jpeg",
  },
  {
    title: "Medifacial – Skin Detan, Skin Lightening, Whitening, Brightening, Aqua gold Facial",
    img: "/service12.jpeg",
  },
  {
    title: "Laser Hair Reduction – Full body & Body Part",
    img: "/service13.jpeg",
  },
  {
    title: "Skin Rejuvenation / Full Body Polishing via laser machine",
    img: "/service14.jpeg",
  },
  {
    title: "Photo Facial",
    img: "/service15.jpeg",
  },
  {
    title: "Pigmentation, Sun damage, Freckle, Dark Spots, Melasma Treatment",
    img: "/service16.jpeg",
  },
  {
    title: "Skin Glow Facial Treatment",
    img: "/service17.jpeg",
  },
  {
    title: "BB Glow Treatment & Oxygen Facial",
    img: "/service18.jpeg",
  },
  {
    title: "Tattoo Removal Treatment",
    img: "/service19.jpeg",
  },
  {
    title: "Cupping Therapy",
    img: "/service20.jpeg",
  },
  {
    title: "Mole, Wart Removal",
    img: "/service21.jpeg",
  },
  {
    title: "PMU makeup, PMU eye brow",
    img: "/service22.jpeg",
  },
  {
    title: "Fillers",
    img: "/service23.jpeg",
  },
  {
    title: "Stretch Marks Removal Treatment",
    img: "/service24.png",
  },
  {
    title: "Thread, Face lift",
    img: "/service25.jpeg",
  },
  {
    title: "Anti Ageing treatment, Face wrinkles, sagging eyelid eyebrows",
    img: "/service26.jpeg",
  },
  {
    title: "Lip Lightening Treatment",
    img: "/service27.jpeg",
  },
  {
    title: "HIFU Treatment",
    img: "/service28.jpeg",
  },
  {
    title: "Wellness Services, Slimming, Diet, Body Contouring",
    img: "/service29.jpeg",
  },
  {
    title: "Under Eye Dark Circles Treatment",
    img: "/service30.jpeg",
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
