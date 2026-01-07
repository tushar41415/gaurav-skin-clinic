import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ClinicsPreview = () => {
  const clinics = [
    { city: 'Kolkata', centers: 5, icon: 'bi-building' },
    { city: 'Delhi NCR', centers: 3, icon: 'bi-building' },
    { city: 'Mumbai', centers: 2, icon: 'bi-building' },
    { city: 'Bangalore', centers: 2, icon: 'bi-building' },
    { city: 'Hyderabad', centers: 2, icon: 'bi-building' },
    { city: 'Chennai', centers: 2, icon: 'bi-building' },
    { city: 'Pune', centers: 2, icon: 'bi-building' },
    { city: 'Lucknow', centers: 1, icon: 'bi-building' },
  ];

  return (
    <section className="py-5 section-padding">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title text-center">Find Us Near You</h2>
            <p className="text-muted mt-4">
              With 21+ centers across India, world-class hair and skin treatment is always within your reach.
            </p>
          </Col>
        </Row>
        
        <Row>
          {clinics.map((clinic, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <div className="clinic-card text-center p-3">
                <i className={`bi ${clinic.icon} fs-2 mb-3`} style={{ color: '#1a5f7a' }}></i>
                <h5 className="clinic-name">{clinic.city}</h5>
                <p className="text-muted mb-0">{clinic.centers} Center{clinic.centers > 1 ? 's' : ''}</p>
              </div>
            </Col>
          ))}
        </Row>
        
        <Row className="mt-4">
          <Col className="text-center">
            <Link to="/clinics" className="btn btn-drpauls btn-lg">
              View All Clinics <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ClinicsPreview;
