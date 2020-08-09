import React,  { Component } from 'react';

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