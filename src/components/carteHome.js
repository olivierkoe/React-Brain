import React from 'react'
// import Button from 'react-bootstrap/Button';
import Image from './../assets/images/panneauInterrogation.jpg';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export default function carteHome() {
    return (
        <Card className='carteHomebody' style={{ width: '18rem' }}>
            <Card.Img className='cardimage' variant="top" src={Image} alt='image Carte' />
            <Card.Body>
                <Card.Title className='cardTitle'>React Game</Card.Title>
                <Link to={"./Jouer "} className='playbutton' variant="primary">Jouer</Link>
            </Card.Body>
        </Card>
    );
}
