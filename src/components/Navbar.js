import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className='navbody' >
                <Navbar.Brand className='navLinkBrand' href="#home">React Brain</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="links me-auto">
                        <Nav.Link className='navlink' href="#home">Jouer</Nav.Link>
                        <Nav.Link className='navlink' href="#link">Classement</Nav.Link>
                        <Nav.Link className='navlink' href="#link">Equipes</Nav.Link>  
                        <Nav className='login'>
                            <Nav.Link className='navlinklogin' href="#link">Connexion</Nav.Link>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>  
        </Navbar>
    );
}

export default BasicExample;