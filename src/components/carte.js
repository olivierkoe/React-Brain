import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Image from './../assets/images/panneauInterrogation.jpg';
import Card from 'react-bootstrap/Card';
import { PlayGame } from './data';

// console.log(PlayGame());

export const Carte = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        PlayGame().then(games => {
            setGames(games);
        });
    });

    return (
        <Card className='cartebody' style={{ width: '18rem' }}>
            <Card.Img className='cardimage' variant="top" src={Image} alt='image Carte' />
            <Card.Body>
                <Card.Title>Qui suis-je ?</Card.Title>
                <Card.Text>
                    Quel nombre se cache derrière cette carte mistère ?
                </Card.Text>
                <input className='guessbox' value="?"></input><br />
                <Button className='guessbutton' variant="primary">J'ai trouvé !</Button>
            </Card.Body>
        </Card>
    );
}
