// src/components/LikedProfiles.js
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function LikedProfiles({ likedProfiles }) {
  return (
    <div>
      <h3>Upcoming Fights</h3>
      <Row>
        {likedProfiles.map((profile) => (
          <Col key={profile.id} xs={6} className="mb-3">
            <Card>
              <Card.Img variant="top" src={`https://via.placeholder.com/150x150?text=${profile.name}`} />
              <Card.Body>
                <Card.Title className="text-center">{profile.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default LikedProfiles;
