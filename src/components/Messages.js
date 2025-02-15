// src/components/Messages.js
import React from 'react';
import { Container, Card, ListGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Messages() {
  const navigate = useNavigate();

  // Fake DM messages
  const fakeMessages = [
    {
      id: 1,
      sender: 'Name 1',
      text: "Yo when we fighting lil bro?",
      time: '2:45 PM',
    },
    {
      id: 2,
      sender: 'Name 2',
      text: "Hey when did you want to meet to fight?",
      time: '3:00 PM',
    },
    {
      id: 3,
      sender: 'Name 3',
      text: "You got lucky last time, rematch ASAP",
      time: '3:15 PM',
    },
    {
      id: 4,
      sender: 'Name 4',
      text: "Training hard or hardly training? I think we all know the answer from that last fight....",
      time: '3:30 PM',
    },
  ];

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>
          <h2>Messages</h2>
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            {fakeMessages.map((message) => (
              <ListGroup.Item key={message.id}>
                <div className="d-flex justify-content-between">
                  <strong>{message.sender}</strong>
                  <small className="text-muted">{message.time}</small>
                </div>
                <p className="mb-0">{message.text}</p>
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

export default Messages;
