import React,  { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from '../components/Nav';
import Playlist from '../components/Playlist';



class Home extends Component {
 
  
  render(){
      return(
          <>
          <Nav/>
          <Playlist/>
          
         
      
        
          </>
      );
  }
}

export default Home;
