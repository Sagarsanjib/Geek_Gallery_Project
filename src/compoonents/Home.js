

import InfiniteScroll from "react-infinite-scroller";
import ImageList from "./ImageList";
import { useState } from "react";
import axios from 'axios';


const Home = () => {
    const [Listed_Image, setImageList] = useState([]);

    const loadFunc = (e) =>
  {
    console.log(e);
    axios.get(`https://api.unsplash.com/photos/?page=${e}&per_page=30&client_id=${process.env.REACT_APP_API_KEY}`)
    
    .then(response => setImageList( old => [...old,...response.data]));
  }
    return (

        <>
            <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={true || false}
                loader={<div className="loader" key={0}>Loading ...</div>}>
            
                <ImageList    images={Listed_Image} />
                
            </InfiniteScroll>
        </>
    )
}
export default Home;