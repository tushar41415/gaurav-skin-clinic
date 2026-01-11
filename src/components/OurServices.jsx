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
