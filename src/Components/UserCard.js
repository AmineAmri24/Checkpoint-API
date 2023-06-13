import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const UserCard = ({user}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text> {user.username}</Card.Text>
        <Card.Text> {user.email}</Card.Text>
        <Button variant="primary">
            <Link to={`/user/${user.id}`}>
            Go check my profie
            </Link>
        </Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard;

