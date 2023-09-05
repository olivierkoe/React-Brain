import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import { CardActionArea } from '@mui/material';

export default function connexion() {
    return (
        <div>
            <Card className='carteconnexion' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Text>
                        <p>Email</p>
                        <input className='emailbox' name='email' id='email' value=""></input><br />
                    </Card.Text>
                    <Card.Text>
                        <p>Mot de passe</p>
                        <input className='emailbox' name='password' id='password' value=""></input><br />
                    </Card.Text>
                    <Button className='connexionbutton' variant="primary">Se connecter</Button>
                    <div className='separationboutton'>----</div>
                    <Button className='registerbutton' variant="primary">Créer un compte</Button>
                </Card.Body>
            </Card>

        </div>
    )
}
