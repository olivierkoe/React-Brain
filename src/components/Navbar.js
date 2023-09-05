import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className='navbody' >
                <Navbar.Brand className='navLinkBrand' href="/">React Brain</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="links me-auto">
                        <Nav.Link className='navlink' href="/jouer">Jouer</Nav.Link>
                        <Nav.Link className='navlink' href="/classement">Classement</Nav.Link>
                        <Nav.Link className='navlink' href="/equipe">Equipes</Nav.Link>
                        <Nav className='login'>
                            <Nav.Link className='navlinklogin' href="/login">Connexion</Nav.Link>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;