import {  useState } from "react";
import { useSearchParams } from "react-router-dom";
import  axios  from "axios";

import ImageList from "./ImageList";

import InfiniteScroll from "react-infinite-scroller";



const Search = () =>
{

    const [searchParams] = useSearchParams();

    const [Listed_Image, setImageList] = useState([]);

    
    const loadFunc = (pageNo) =>
    {
       
        axios.get(`https://api.unsplash.com/search/photos/?query=${searchParams.get("q")}&page=${pageNo}&per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
    
        .then(response => setImageList( list => [...list,...response.data.results]))
       
        
    }
    
    return(
        <>

                    <InfiniteScroll
                                pageStart= {0}
                                loadMore={loadFunc}
                                hasMore={true || false}
                                loader={<div className="loader" key={0}>Loading ...</div>}>
                            
                                
                                <ImageList  images={Listed_Image} />
                    </InfiniteScroll >
        
        </>
    )
}

export default Search;




