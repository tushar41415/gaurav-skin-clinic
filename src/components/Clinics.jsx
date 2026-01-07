import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const Clinics = () => {
  const [selectedCity, setSelectedCity] = useState('all');

  const clinics = [
    { id: 1, name: 'Dr. Paul\'s - Park Street', city: 'Kolkata', address: '123 Park Street, Near Metro Station, Kolkata 700016', phone: '033-2229-1234', timings: '10:00 AM - 8:00 PM' },
    { id: 2, name: 'Dr. Paul\'s - Salt Lake', city: 'Kolkata', address: 'Sector V, Salt Lake City, Kolkata 700091', phone: '033-2358-5678', timings: '10:00 AM - 8:00 PM' },
    { id: 3, name: 'Dr. Paul\'s - Howrah', city: 'Kolkata', address: '45 GT Road, Near Howrah Station, Howrah 711101', phone: '033-2660-9012', timings: '10:00 AM - 8:00 PM' },
    { id: 4, name: 'Dr. Paul\'s - South Kolkata', city: 'Kolkata', address: '78 Gariahat Road, Ballygunge, Kolkata 700019', phone: '033-2461-3456', timings: '10:00 AM - 8:00 PM' },
    { id: 5, name: 'Dr. Paul\'s - New Town', city: 'Kolkata', address: 'Action Area II, New Town, Kolkata 700156', phone: '033-2357-7890', timings: '10:00 AM - 8:00 PM' },
    { id: 6, name: 'Dr. Paul\'s - Connaught Place', city: 'Delhi NCR', address: 'Block A, Connaught Place, New Delhi 110001', phone: '011-2341-2345', timings: '10:00 AM - 8:00 PM' },
    { id: 7, name: 'Dr. Paul\'s - Gurgaon', city: 'Delhi NCR', address: 'MG Road, Sector 28, Gurgaon 122002', phone: '0124-256-6789', timings: '10:00 AM - 8:00 PM' },
    { id: 8, name: 'Dr. Paul\'s - Noida', city: 'Delhi NCR', address: 'Sector 18, Noida 201301', phone: '0120-425-0123', timings: '10:00 AM - 8:00 PM' },
    { id: 9, name: 'Dr. Paul\'s - Andheri', city: 'Mumbai', address: 'Andheri West, Near Metro Station, Mumbai 400058', phone: '022-2633-4567', timings: '10:00 AM - 8:00 PM' },
    { id: 10, name: 'Dr. Paul\'s - Bandra', city: 'Mumbai', address: 'Linking Road, Bandra West, Mumbai 400050', phone: '022-2640-8901', timings: '10:00 AM - 8:00 PM' },
    { id: 11, name: 'Dr. Paul\'s - Koramangala', city: 'Bangalore', address: '5th Block, Koramangala, Bangalore 560095', phone: '080-2553-2345', timings: '10:00 AM - 8:00 PM' },
    { id: 12, name: 'Dr. Paul\'s - Indiranagar', city: 'Bangalore', address: '100 Feet Road, Indiranagar, Bangalore 560038', phone: '080-2527-6789', timings: '10:00 AM - 8:00 PM' },
    { id: 13, name: 'Dr. Paul\'s - Banjara Hills', city: 'Hyderabad', address: 'Road No. 12, Banjara Hills, Hyderabad 500034', phone: '040-2335-0123', timings: '10:00 AM - 8:00 PM' },
    { id: 14, name: 'Dr. Paul\'s - Jubilee Hills', city: 'Hyderabad', address: 'Road No. 36, Jubilee Hills, Hyderabad 500033', phone: '040-2360-4567', timings: '10:00 AM - 8:00 PM' },
    { id: 15, name: 'Dr. Paul\'s - T. Nagar', city: 'Chennai', address: 'Usman Road, T. Nagar, Chennai 600017', phone: '044-2434-8901', timings: '10:00 AM - 8:00 PM' },
    { id: 16, name: 'Dr. Paul\'s - Anna Nagar', city: 'Chennai', address: '2nd Avenue, Anna Nagar, Chennai 600040', phone: '044-2626-2345', timings: '10:00 AM - 8:00 PM' },
    { id: 17, name: 'Dr. Paul\'s - Koregaon Park', city: 'Pune', address: 'Lane 6, Koregaon Park, Pune 411001', phone: '020-2615-6789', timings: '10:00 AM - 8:00 PM' },
    { id: 18, name: 'Dr. Paul\'s - Baner', city: 'Pune', address: 'Baner Road, Near Westend Mall, Pune 411045', phone: '020-2729-0123', timings: '10:00 AM - 8:00 PM' },
    { id: 19, name: 'Dr. Paul\'s - Hazratganj', city: 'Lucknow', address: 'Hazratganj, Near GPO, Lucknow 226001', phone: '0522-222-4567', timings: '10:00 AM - 8:00 PM' },
    { id: 20, name: 'Dr. Paul\'s - Ahmedabad', city: 'Ahmedabad', address: 'CG Road, Navrangpura, Ahmedabad 380009', phone: '079-2640-8901', timings: '10:00 AM - 8:00 PM' },
    { id: 21, name: 'Dr. Paul\'s - Jaipur', city: 'Jaipur', address: 'MI Road, Near Panch Batti, Jaipur 302001', phone: '0141-237-2345', timings: '10:00 AM - 8:00 PM' },
  ];

  const cities = ['all', ...new Set(clinics.map(c => c.city))];
  const filteredClinics = selectedCity === 'all' ? clinics : clinics.filter(c => c.city === selectedCity);

  return (
    <>
      <section id="clinics" className="about-hero section-padding">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-4 fw-bold mb-4">Our Clinics</h1>
              <p className="lead mb-0">
                Find a Dr. Paul's center near you - 21+ locations across India
              </p>
            </Col>
          </Row>
        </Container>
      </section>


      <section className="py-4 bg-light section-padding">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-3 mb-md-0">
              <p className="mb-0">
                Showing <strong>{filteredClinics.length}</strong> clinic{filteredClinics.length !== 1 ? 's' : ''}
                {selectedCity !== 'all' && <> in <strong>{selectedCity}</strong></>}
              </p>
            </Col>
            <Col md={6}>
              <Form.Select 
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.target.value)}
                className="border-2"
              >
                <option value="all">All Cities</option>
                {cities.filter(c => c !== 'all').map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Clinics List */}
      <section className="py-5 section-padding" aria-label="Clinics list">
        <Container>
          <Row>
            {filteredClinics.map(clinic => (
              <Col lg={6} key={clinic.id} className="mb-4">
                <div className="clinic-card p-3">
                  <div className="d-flex align-items-start">
                    <div 
                      className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle me-3"
                      style={{ 
                        width: '50px', 
                        height: '50px', 
                        background: 'linear-gradient(135deg, #1a5f7a 0%, #57c5b6 100%)' 
                      }}
                    >
                      <i className="bi bi-geo-alt-fill text-white fs-5"></i>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="clinic-name mb-1">{clinic.name}</h5>
                      <p className="clinic-address mb-2">{clinic.address}</p>
                      <div className="d-flex flex-wrap gap-3">
                        <a href={`tel:${clinic.phone}`} className="clinic-phone text-decoration-none">
                          <i className="bi bi-telephone-fill me-1"></i>
                          {clinic.phone}
                        </a>
                        <span className="text-muted">
                          <i className="bi bi-clock me-1"></i>
                          {clinic.timings}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="cta-section section-padding">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="cta-title mb-3">Can't Find a Clinic Near You?</h2>
              <p className="cta-text mb-4">
                We're expanding rapidly! Contact us to learn about upcoming locations or for a virtual consultation.
              </p>
              <a href="tel:1800-102-7291" className="btn-drpauls btn-lg px-4 rounded-pill">
                <i className="bi bi-telephone-fill me-2"></i>
                Call Toll Free: 1800-102-7291
              </a>
            </Col>
          </Row>
        </Container>
      </section>            
    </>
  );
};

export default Clinics;
