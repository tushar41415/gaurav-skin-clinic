import OurServices from "./OurServices";

const Treatments = () => {
  return (
    <section id="treatments" className="section-padding">
      <div className="container">
        <div className="page-hero mb-4">
          <div className="hero-card">
            <span className="section-badge">All Treatments</span>
            <h1 className="section-title">
              Complete Treatment Portfolio for <span className="text-gradient">Hair, Skin & Aesthetics</span>
            </h1>
            <p className="section-subtitle mb-0">
              Explore our most requested procedures including anti-hair fall programs, PRP,
              laser care, facials, anti-ageing protocols and advanced skin correction treatments.
            </p>
          </div>
        </div>

        <OurServices limit={null} showHeader={false} />
      </div>
    </section>
  );
};

export default Treatments;
