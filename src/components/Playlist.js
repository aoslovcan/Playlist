import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styleComponent.css';
import Song from './Song';
import axios from 'axios';

import './styleComponent.css';

import { getApiData } from '../actions/getApiData.js'
class Playlist extends Component {
    constructor(props) {
        super(props);


        this.state = {
            songs: [],
            visible: true

        }


    }
    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    componentDidMount() {

        const config = {
            headers: {
                "Access-Control-Allow-Origin": "YOUR-DOMAIN.TLD",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        };


        axios.get("http://localhost:3001/chart", config)
            .then(res => {
                let songs = JSON.parse(res.data);

                let items = songs['tracks']['data'];

                console.log(songs);
                this.setState({

                    songs: items

                })

            })

    }


    render() {
        console.log(this.state.songs);
        var { songs } = this.state

        return (
            <>
        
                <div className="section">
                    <div className="container">
                        <div className="row">
                      
                            <ul className="list-group">
                         
                                {
                               
                                
                                songs.map(song =>
                                    (
                                        <Song  items={song}/>

                                    ))}
                            </ul>
                        </div>
                    </div>


                </div>

            </>
        );
    }
}

export default Playlist;
