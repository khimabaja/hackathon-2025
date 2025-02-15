import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Row, Col, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LikedProfiles() {
  const navigate = useNavigate();
  const [likedProfiles, setLikedProfiles] = useState([]);

  // Load liked profiles when component mounts
  useEffect(() => {
    let savedProfiles = JSON.parse(localStorage.getItem('likedProfiles')) || [];

    // Log the saved profiles to inspect the data
    console.log('Saved profiles:', savedProfiles);

    // Remove invalid or empty profiles
    savedProfiles = savedProfiles.filter(profile => profile && profile.name);

    // Remove duplicates based on the profile name (or another unique identifier)
    const uniqueProfiles = savedProfiles.filter((value, index, self) =>
      index === self.findIndex((t) => (
        t.name === value.name
      ))
    );
    
    setLikedProfiles(uniqueProfiles);
  }, []);

  return (
    <Container fluid>
      {/* Navigation */}
      <Row className="mb-3">
        <Col>
          <Nav className="justify-content-between">
            {/* ... your existing nav items ... */}
          </Nav>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Liked Profiles</h2>
          <Row xs={1} md={2} lg={3} className="g-4">
            {likedProfiles.map((profile, index) => (
              <Col key={index}>
                <Card>
                  <Card.Img 
                    variant="top" 
                    src={profile.profile_picture || `https://via.placeholder.com/150x150?text=${profile.name}`} 
                  />
                  <Card.Body>
                    <Card.Title>{profile.name}, {profile.age}</Card.Title>
                    <Card.Text>
                      {profile.Traits && profile.Traits.map((trait, i) => (
                        <div key={i}>{trait}</div>
                      ))}
                      <p className="mt-2"><em>"{profile.bio}"</em></p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Button 
            className="mt-4" 
            variant="primary" 
            onClick={() => navigate('/home')}
          >
            Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default LikedProfiles;