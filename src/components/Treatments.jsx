
import { Modal } from "bootstrap";
import OurServices from "./OurServices";





const Treatments = () => {


  return (
    <section id="treatments" className="section-padding bg-light position-relative overflow-hidden">
      <div className="container">
        {/* HERO */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Our <span className="text-warning">Treatments</span></h1>
          <p className="text-muted">Discover premium hair & skin care solutions</p>
        </div>

        <OurServices />
      </div>
    </section>
  );
};

export default Treatments;
