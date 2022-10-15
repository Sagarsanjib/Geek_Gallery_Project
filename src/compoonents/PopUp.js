

import React from 'react';

import {Modal, Button, Container, Col, Row} from 'react-bootstrap';




const PopUp = (props) => {

    
    const popupImages = props.Each_modalData;

    return (

        <>
            

            <Modal

            
                show={props.showModal}
                onHide={props.closeModal}
                backdrop="static"
                keyboard={false}
                centered

                dialogClassName="modal-60w"

                style={{backgroundColor: `${props.Each_modalData.color}77`}}
                
                
            >
                
                <Modal.Body>
                    
                    <Container>

                        <Row>
                                <Col md={6}>

                                    <img  style={{maxWidth: "100%" , maxHeight:"75vh", borderRadius:"5px"}}
                                    
                                    //src='https://images.unsplash.com/photo-1499551660540-eaf7882f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' />

                                    src= {popupImages?.urls?.full} alt ="" 
                                    
                                    />
                                   
                                </Col>
                                <Col md={6}>

                                
                                    <h3>
                                        
                                        Uploaded By :{props.Each_modalData?.user?.name} 
                                        (@{props.Each_modalData?.user?.id})
                                    
                                    </h3>

                                    <h4>
                                        Upload Date: {props.Each_modalData?.created_at}
                                    </h4>

                                    


                                    {props.Each_modalData?.description  ? (

                                        <>
                                        <hr />

                                        <h5>Description:</h5>
                                        <h6>{props.Each_modalData?.description}</h6>

                                        <hr />
                                        </>
                                    ) : false}

                                    
                                    <br />

                                    <h6>Width: {props.Each_modalData?.width}</h6>
                                    <h6>Height: {props.Each_modalData?.height}</h6>
                                    
                                </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeModal}>
                        Close
                    </Button>   
                    <Button variant="primary" 
                    
                                    style={{
                                    backgroundColor:props.Each_modalData?.color,
                                    borderColor:props.Each_modalData?.color,
                                    color:'black'
                                    }}

                                    href={props.Each_modalData?.links?.download} target="_blank"
                    
                    >Download </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default PopUp; 