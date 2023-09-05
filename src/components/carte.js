import React from 'react'
import Button from 'react-bootstrap/Button';
import './../assets/images/panneauInterrogation.jpg';
import Card from 'react-bootstrap/Card';

export default function carte() {
    return (
        <Card className='cartebody' style={{ width: '18rem' }}>
            <Card.Img className='cardimage' variant="top" src='' alt='image Carte' />
            <Card.Body>
                <Card.Title>Qui suis-je ?</Card.Title>
                <Card.Text>
                    <p>Quel nombre se cache derrière cette carte mistère ?</p>
                </Card.Text>
                <input className='guessbox' value="?"></input><br />
                <Button className='guessbutton' variant="primary">J'ai trouvé !</Button>
            </Card.Body>
        </Card>
    );
}
