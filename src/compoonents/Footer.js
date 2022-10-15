
import {Container,Navbar} from 'react-bootstrap';

const Footer = () => {
    return (

        <>
            <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
                <Container>
                    <Navbar.Brand href="#">
                        
                        <h5 style={{paddingLeft:"410px"}}>
                            
                            copyright &copy; 2022 Sagar & team.
                        
                        </h5>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}
export default Footer;