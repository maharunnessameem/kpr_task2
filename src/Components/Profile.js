import React from 'react';
import { Card } from 'react-bootstrap';
import meem from '../image/meem.jpg';
import './Profile.css';

const Profile = () => {
    return (
        <div className='card' style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className='image' src={meem} />
                <Card.Body>
                    <h5>Name: Maharun Nessa Meem</h5>
                    <p>Mobile Number: 01636482686</p>
                    <p>Email:maharunnessameem86@gmail.com</p>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Profile;