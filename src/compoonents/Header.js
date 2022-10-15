import React from 'react';
import { useRef } from 'react';
import {Navbar, Container, Nav,  Form, FormControl, Button, Image} from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = (props) =>  {

    const navigate = useNavigate();


    const inputRef = useRef();
    const formSubmitted = (e) =>
    {
        e.preventDefault();
       
        //console.log(inputRef);
        //console.log(inputRef.current.value);
       //props.setSearchKey(inputRef.current.value);

        navigate(`/search?q=${inputRef.current.value}`);
        
    }

    return (
                <Navbar bg="light" expand="lg" fixed="top">
                    
                    <Container fluid>
                        <Navbar.Brand>
                                        <Image src = "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/tbvbvipimh2camf5nb2q" 
                                        
                                            style={{width: "50px"}} />

    
                                        
                                        <Link to = "/"  style={{textDecoration:'none', color:'black'}}>
                                            
                                                GeekGallery 
                                        
                                        </Link> 
                        
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />

                        <Navbar.Collapse id="navbarScroll">
                           <Nav
                                className='me-auto my-2 my-lg-0'
                                style={{maxHeight:"100px"}}
                                navbarScroll>
                                
                           </Nav>
                            <Form className="d-flex" 
                                onSubmit = {formSubmitted}>
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    ref={inputRef}
                                />
                                <Button variant="outline-success" onClick={formSubmitted}>Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                );
    }

    export default Header;