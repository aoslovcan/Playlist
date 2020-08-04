import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styleComponent.css';
import Song from './Song';
import axios from 'axios';
class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
           songs: [],
            
            
        }

         
    }

      componentDidMount() {
        const config = {
            headers: {
              "Access-Control-Allow-Origin" : "YOUR-DOMAIN.TLD",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
          };
        fetch('http://localhost:3001/chart', config )
            .then(res => res.json())
            .then(json => {
                this.setState({
                    songs : json
                })
                console.log(json)
            });

        console.log(this.state.songs);
    }
    /*componentDidMount() {
        const config = {
            headers: {
              "Access-Control-Allow-Origin" : "YOUR-DOMAIN.TLD",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
          };
      
         axios.get("https://api.deezer.com/chart", config)
         .then(response => response.json())
  .then(data => console.log(data));
      }*/

    render() {
       let {songs} = this.state
        return (
            <>
                <div className="section">
                   <div className="container">
                       <div className="row">
                       <div className="col-sm-3">
                       { songs.map(person => <Song name={songs.name} />)}    
                        </div>
                       </div>
                   </div>
                       
                   
                </div>

            </>
        );
    }
}

export default Playlist;
