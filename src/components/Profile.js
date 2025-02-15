import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

function Profile() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/home');
  };

  const uploadImage = () => {
    alert('This is a fake upload button!');
  };

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>
          <h2>John Doe</h2>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={4}>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300x300.png?text=Profile+Image"
                alt="Profile"
              />
              <Button variant="secondary" className="mt-3" onClick={uploadImage}>
                Upload Image
              </Button>
            </Col>
            <Col md={8}>
              <Card.Text>
                <p><strong>Height:</strong> 6'1" (185 cm)</p>
                <p><strong>Weight:</strong> 220 lbs (100 kg)</p>
                <p><strong>Reach:</strong> 78 inches (198 cm)</p>
                <p><strong>Record:</strong> 15 Wins / 2 Losses</p>
                <p>
                  <strong>Bio:</strong> Pull up lil bro unless u scared 
                </p>
              </Card.Text>
              <Button variant="primary" onClick={goHome}>
                Back to Home
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Profile;
