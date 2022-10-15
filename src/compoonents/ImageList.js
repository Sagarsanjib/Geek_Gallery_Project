
import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import ImageCard from './ImageCard';

import Masonry from "react-masonry-css";


const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

const ImageList = (props) => {


    //const arr = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];


    return (

        <>

            <Container fluid className='mt-4' style={{paddingTop:"70px"}}>



                <Row>

                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        
                        {props.images.map((single_image, idx) => {

                            //console.log(single_image);
                            return (

                                <Col  key={idx}>

                                    <ImageCard /*click={props.onCardClick}*/ image_details={single_image} />
                                </Col>
                            );
                        })}

                    </Masonry>
                </Row>


            </Container>

        </>
    )
}
export default ImageList;