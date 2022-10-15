
import React from 'react'

import {Card} from 'react-bootstrap';


import { useNavigate } from 'react-router-dom';


const ImageCard = (props) =>{

    //console.log(props.image_details);

    const navigateNow = useNavigate();



    const clicked = ()=>
    {
        //props.click(props.image_details.id);
        navigateNow(`/image/${props.image_details.id}`)
    }

    return (

        <>

            <Card className="bg-dark text-white     mb-4" 
                    onClick = {clicked}  style = {{cursor: 'pointer'}}>


                <Card.Img src={props.image_details.urls.small}

                alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{props.image_details.user.name}</Card.Title>


                    <Card.Text>
                        {props.image_details.created_at}
                    </Card.Text>

                    <Card.Text>
                        {props.image_details.description}
                    </Card.Text>


                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </>
    )
}

export default ImageCard;