import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Nav, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const S3_URL = "https://userprofiles-fightapp.s3.us-east-2.amazonaws.com/fight_club_profiles.json"; // Your JSON file URL

function Home() {
  const navigate = useNavigate();
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [showMatch, setShowMatch] = useState(false);
  const [potentialMatches, setPotentialMatches] = useState([]); // state to store matches

  // Fetching data from the S3 bucket
  useEffect(() => {
    axios.get(S3_URL)
      .then(response => {
        setPotentialMatches(response.data); // Set the data as an array of profiles
      })
      .catch(error => {
        console.error("Error fetching data from S3:", error);
      });
  }, []);

  const currentMatch = potentialMatches[currentMatchIndex];

  const handleLike = () => {
    const existingLikes = JSON.parse(localStorage.getItem('likedProfiles')) || [];
    const updatedLikes = [...existingLikes, currentMatch];
    localStorage.setItem('likedProfiles', JSON.stringify(updatedLikes));

    setShowMatch(true);
    setTimeout(() => {
      setShowMatch(false);
      nextMatch();
    }, 1500);
  };

  const handlePass = () => {
    nextMatch();
  };

  const nextMatch = () => {
    setCurrentMatchIndex((prevIndex) => (prevIndex + 1) % potentialMatches.length);
  };

  const getProfilePicture = (profile) => {
    // Check if physical_attributes and profile_picture exist before accessing
    return profile?.physical_attributes?.profile_picture || `https://via.placeholder.com/200x300?text=${profile?.name || "Unknown"}`;
  };

  const getPhysicalAttribute = (attribute, profile) => {
    // Check if profile and physical_attributes exist before trying to access the attribute
    return profile?.physical_attributes?.[attribute] || "N/A";
  };

  return (
    <Container fluid>
      <Row className="nav-section mb-3">
        <Col>
          <Nav className="justify-content-between">
            <Nav.Item>
              <Nav.Link onClick={() => navigate('/profile')}>My Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => navigate('/likes')}>Likes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => navigate('/messages')}>Messages</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => navigate('/matches')}>Matches</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Button variant="outline-danger" size="sm" onClick={() => navigate('/login')}>
                Logout
              </Button>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>

      {showMatch && (
        <Alert variant="success" className="match-alert" onClose={() => setShowMatch(false)} dismissible>
          It's a match! Get ready to fight {currentMatch?.name}.
        </Alert>
      )}

      <Row>
        <Col md={8}>
          <h2 className="match-title">Today's Match</h2>
          <Card className="match-card">
            <Row>
              <Col md={4}>
                <Card.Img src={getProfilePicture(currentMatch)} />
              </Col>
              <Col md={8}>
                <Card.Body className="match-details">
                  <Card.Title>{currentMatch?.name}</Card.Title>
                  <Card.Text>
                    {currentMatch?.hometown && <div>Hometown: {currentMatch?.hometown}</div>}
                    {currentMatch?.fight_camp && <div>Fight Camp: {currentMatch?.fight_camp}</div>}
                    <div>Height: {getPhysicalAttribute('height', currentMatch)}</div>
                    <div>Weight: {getPhysicalAttribute('weight', currentMatch)}</div>
                    <div>Reach: {getPhysicalAttribute('reach', currentMatch)}</div>
                    <div>Leg Reach: {getPhysicalAttribute('leg_reach', currentMatch)}</div>
                    <div>Grip Strength: {getPhysicalAttribute('grip_strength', currentMatch)}</div>
                    <div>{currentMatch?.personality_background?.description}</div>
                  </Card.Text>
                  <div className="button-group">
                    <Button variant="success" className="me-2" onClick={handleLike}>Fight</Button>
                    <Button variant="danger" onClick={handlePass}>Flight</Button>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;


