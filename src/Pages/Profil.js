import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
// import {useEffect, useState} from 'react-dom'
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const Profil = () => {

    const {id} = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
      axios
        .get (`https://jsonplaceholder.typicode.com/users/?id=${id}`)
        .then((res) => setUser(res.data[0]))
        .catch((err) => console.log(err));
    });
    
  return (
    <div>
      <h1>the Profil page</h1>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text> {user.username}</Card.Text>
        <Card.Text> {user.email}</Card.Text>
        <Button variant="primary">
            <Link to={`/users`}>
            Go back to users
            </Link>
        </Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profil;
