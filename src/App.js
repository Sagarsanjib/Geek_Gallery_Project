
import Header from "./compoonents/Header";
import 'bootstrap/dist/css/bootstrap.min.css';



//import PopUp from "./compoonents/PopUp";

//import {useState} from 'react';

//import{useEffect} from 'react';
import './App.css';




import { Routes, Route } from "react-router-dom";

import Detail from './compoonents/Detail';

import Footer from "./compoonents/Footer";



import Search from "./compoonents/Search";
import Home from "./compoonents/Home";

const App = () => {

  //console.log(process.env.REACT_APP_ACESS_KEY);

  //ALL THE STATE WILL BE HERE IN APP.JS i.e all the state should be inside app.js
  
 // const [showModal, setShowModal] = useState(false);

  //const [Listed_Image, setImageList] = useState([]);

 // const [modalData, setModalData] = useState([]);

 //const [searchKey, setSearchKey] = useState("");

  
/*
  useEffect(()=>
  {
    //console.log(searchKey);

    if (searchKey !== "")
    {
      axios.get(`https://api.unsplash.com/search/photos/?query=${searchKey}&per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
    
    .then(response => setImageList(response.data.results));

    }
  }, [searchKey])
*/
  


  
  /*const closeModal = () => setShowModal(false);

  
  const openModal = id => 
  {
    
    const selected_img = Listed_Image.find(single_elem =>single_elem.id === id)
    //console.log(selected_img);
    setModalData(selected_img);
    setShowModal(true);
  }*/


  /*
  useEffect(()=>
  {


    axios.get(`https://api.unsplash.com/photos/?per_page=30&client_id=${process.env.REACT_APP_API_KEY}`)
    
    .then(response =>setImageList(response.data));
  
  
  }, []);
  */
  
  

  return (

    <>

      <Header /*setSearchKey={setSearchKey} */  />

      
              <Routes>


                      <Route path="/" element = {<Home/>}
                      />
                            
                            
                      <Route path="/image/:id" element={<Detail/>}  />

                     <Route path="/search" element = {<Search/>}/>  
                      
              </Routes>

      





    {/*
    
    <ImageList onCardClick ={openModal} images={Listed_Image} />

    
    */ }
      

    {
      /*  
    
      <PopUp  showModal = {showModal} 
      
              closeModal = {closeModal} 

              Each_modalData = {modalData} />
      */
    }

      



      <Footer />
    </>
  );
}

export default App;
