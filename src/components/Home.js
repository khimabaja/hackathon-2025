// src/components/Home.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Nav, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LikedProfiles from './LikedProfiles';

// Mock data for potential matches
const potentialMatches = [
  { id: 1, name: "Sarah", age: 26, distance: 5, interests: ["Hiking", "Photography", "Travel"], bio: "Looking for someone to explore the world with!" },
  { id: 2, name: "Emily", age: 24, distance: 3, interests: ["Reading", "Cooking", "Yoga"], bio: "Foodie looking for a partner in culinary adventures!" },
  { id: 3, name: "Jessica", age: 28, distance: 7, interests: ["Music", "Dancing", "Art"], bio: "Artist seeking a muse and a companion." },
  { id: 4, name: "Olivia", age: 25, distance: 2, interests: ["Fitness", "Nutrition", "Outdoors"], bio: "Health enthusiast looking for an active partner." },
];

function Home() {
  const navigate = useNavigate();
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [likedProfiles, setLikedProfiles] = useState([]);
  const [showMatch, setShowMatch] = useState(false);

  const currentMatch = potentialMatches[currentMatchIndex];

  const handleLike = () => {
    setLikedProfiles([...likedProfiles, currentMatch]);
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
      <Row className="mb-3">
        <Col>
          <Nav className="justify-content-between">
            <Nav.Item>
              <Nav.Link href="#profile">My Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#matches">Matches</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#messages">Messages</Nav.Link>
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
        <Alert variant="success" onClose={() => setShowMatch(false)} dismissible>
          It's a match! You liked {currentMatch.name}.
        </Alert>
      )}

      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
            <Card.Body>
              <Card.Title>Your Profile</Card.Title>
              <Card.Text>
                John Doe, 28
                <br />
                Moncks Corner, SC
              </Card.Text>
              <Button variant="primary">Edit Profile</Button>
            </Card.Body>
          </Card>
          <LikedProfiles likedProfiles={likedProfiles} />
        </Col>

        <Col md={8}>
          <h2>Today's Match</h2>
          <Card>
            <Row>
              <Col md={4}>
                <Card.Img src={`https://via.placeholder.com/200x300?text=${currentMatch.name}`} />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>{currentMatch.name}, {currentMatch.age}</Card.Title>
                  <Card.Text>
                    {currentMatch.distance} miles away
                    <br />
                    Interests: {currentMatch.interests.join(", ")}
                    <br />
                    "{currentMatch.bio}"
                  </Card.Text>
                  <Button variant="success" className="me-2" onClick={handleLike}>Like</Button>
                  <Button variant="danger" onClick={handlePass}>Pass</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* <Row className="mt-3">
        <Col>
          <LikedProfiles likedProfiles={likedProfiles} />
        </Col>
      </Row> */}
    </Container>
  );
}

export default Home;
