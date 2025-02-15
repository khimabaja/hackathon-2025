// src/components/Matches.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, ListGroup, Button } from 'react-bootstrap';

function Matches() {
  const navigate = useNavigate();

  // Some fake match data
  const fakeMatches = [
    {
      id: 1,
      date: 'March 1, 2025',
      time: '7:00 PM',
      address: '123 Fight Club St, Some City, SC',
      opponent: 'Name 1'
    },
    {
      id: 2,
      date: 'March 15, 2025',
      time: '9:00 PM',
      address: '456 Underground Ave, Another City, NC',
      opponent: 'Name 2'
    },
    {
      id: 3,
      date: 'April 2, 2025',
      time: '8:30 PM',
      address: '789 Back Alley Rd, Fightville, TX',
      opponent: 'Name 3'
    },
  ];

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>
          <h2>Upcoming Matches</h2>
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            {fakeMatches.map(match => (
              <ListGroup.Item key={match.id}>
                <p><strong>Date:</strong> {match.date}</p>
                <p><strong>Time:</strong> {match.time}</p>
                <p><strong>Location:</strong> {match.address}</p>
                <p><strong>Opponent:</strong> {match.opponent}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button variant="primary" className="mt-3" onClick={() => navigate('/home')}>
            Back to Home
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Matches;
