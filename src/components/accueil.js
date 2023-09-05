import React from 'react'
import Container from 'react-bootstrap/Container';
import Carte from './carte'

export default function accueil() {
  return (
    <Container className='body'>
      <h1>REACT BRAIN</h1>
      <p>Découvrer en un minimum de tour le nombre qui se cache derrière la carte mistère !</p>
      <Carte/>
    </Container>
  )
}
