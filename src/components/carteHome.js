import React from 'react'
import Button from 'react-bootstrap/Button';
import Image from './../assets/images/panneauInterrogation.jpg';
import Card from 'react-bootstrap/Card';

export default function carteHome() {
    return (
        <Card className='carteHomebody' style={{ width: '18rem' }}>
            <Card.Img className='cardimage' variant="top" src={Image} alt='image Carte' />
            <Card.Body>
                <Card.Title className='cardTitle'>React Game</Card.Title>
                <Button className='playbutton' variant="primary">Jouer</Button>
            </Card.Body>
        </Card>
    );
}
