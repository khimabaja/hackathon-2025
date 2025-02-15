import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Nav, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Home.css';

// Mock data for potential matches
const potentialMatches = [
  { id: 1, name: "Sarah", age: 26, distance: 5, Traits: ["Height: 5-7", "Weight: 120", "Reach: 65"], bio: "Looking for someone to explore the world with!" },
  { id: 2, name: "Emily", age: 24, distance: 3, Traits: ["Height: 5-6", "Weight: 125", "Reach: 62"], bio: "Foodie looking for a partner in culinary adventures!" },
  { id: 3, name: "Jessica", age: 28, distance: 7, Traits: ["Height: 5-11", "Weight: 155", "Reach: 73"], bio: "Artist seeking a muse and a companion." },
  { id: 4, name: "Olivia", age: 25, distance: 2, Traits: ["Height: 5-1", "Weight: 110", "Reach: 49"], bio: "Health enthusiast looking for an active partner." },
];

function Home() {
  const navigate = useNavigate();
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [showMatch, setShowMatch] = useState(false);

  const currentMatch = potentialMatches[currentMatchIndex];

  const handleLike = () => {
    // Get existing likes from localStorage
  const existingLikes = JSON.parse(localStorage.getItem('likedProfiles')) || [];
  
  // Add current match to likes
  const updatedLikes = [...existingLikes, currentMatch];
  
  // Save to localStorage
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
          It's a match! Get ready to fight {currentMatch.name}.
        </Alert>
      )}

      <Row>
        

        <Col md={8}>
          <h2 className="match-title">Today's Match</h2>
          <Card className="match-card">
            <Row>
              <Col md={4}>
                <Card.Img src={`https://via.placeholder.com/200x300?text=${currentMatch.name}`} />
              </Col>
              <Col md={8}>
                <Card.Body className="match-details">
                  <Card.Title>{currentMatch.name}, {currentMatch.age}</Card.Title>
                  <Card.Text>
    {currentMatch.distance} miles away
    <div className="trait-list">
    {currentMatch.Traits.map((trait, index) => (
      <React.Fragment key={index}>
        {trait}
        <br />
      </React.Fragment>
    ))}
    </div>
    "{currentMatch.bio}"
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
