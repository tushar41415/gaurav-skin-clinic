import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="cta-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={8} className="mb-4 mb-lg-0">
            <h2 className="cta-title mb-3">Ready to Transform Your Look?</h2>
            <p className="cta-text mb-0">
              Book a free consultation with our expert dermatologists today. 
              Take the first step towards a more confident you!
            </p>
          </Col>
          <Col lg={4} className="text-lg-end">
            <div className="d-flex gap-3 justify-content-lg-end flex-wrap">
              <Link to="/contact" className="btn btn-light btn-lg px-4 rounded-pill">
                <i className="bi bi-calendar-check me-2"></i>
                Book Appointment
              </Link>
              <a href="tel:1800-102-7291" className="btn btn-drpauls-outline btn-lg px-4">
                <i className="bi bi-telephone-fill me-2"></i>
                Call Now
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTASection;
