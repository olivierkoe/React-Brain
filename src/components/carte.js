import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Image from './../assets/images/panneauInterrogation.jpg';
import Card from 'react-bootstrap/Card';
import { getToPlay } from './data';

// const token = getToken("admin@express-brains.local", "admin");
// console.log(token);

export const Carte = () => {
    const [games, setGames] = useState([]);
    const [guess, setGuess] = useState(''); // État pour stocker la supposition de l'utilisateur

    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche le formulaire de se soumettre normalement

        try {
            const result = await getToPlay(guess); // Envoyez la supposition à la fonction getToPlay
            setGames(result);
        } catch (error) {
            console.error('Erreur lors de la requête getToPlay :', error);
        }
    };

    return (
        <Card className='cartebody' style={{ width: '18rem' }}>
            <Card.Img className='cardimage' variant="top" src={Image} alt='image Carte' />
            <Card.Body>
                <Card.Title>Qui suis-je ?</Card.Title>
                <Card.Text>

                    Quel nombre se cache derrière cette carte mistère ?
                </Card.Text>
                <form onSubmit={handleSubmit}>
                    <input type='text'
                        className='guessbox'
                        placeholder='entrez un chiffre'
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)} // Mettre à jour l'état "guess"
                    /><br />
                    <Button type='submit' className='guessbutton' variant="primary">J'ai trouvé !</Button>
                </form>
            </Card.Body>
        </Card>
    );
}
