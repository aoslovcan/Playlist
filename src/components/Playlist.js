import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styleComponent.css';
import Song from './Song';
import axios from 'axios';
import { getApiData } from '../actions/getApiData'
class Playlist extends Component {
    constructor(props) {
        super(props);


        this.state = {
            songs: []


        }


    }

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

                let items = songs['playlists']['data'];

                console.log(songs);
                this.setState({

                    songs: items

                })

            })

    }



    render() {
        var { songs } = this.state

        return (
            <>
            <div className="section">
                <div className="container">
                    <div className="row">
                         <ul className="list-group">
                            {songs.map(song =>
                                (
                                <div className="row">
                                   
                                        <div className="col-sm-8">
                                        <li key={song.id} className="list-group-item"><a href="#">{song.title}</a>{} </li>
                                        </div>
                                        <div className="col-sm-4">
                                        <button className="more"><FontAwesomeIcon icon="play-circle"/></button>
                                        </div>
                                    
                                
                                
                                </div>
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
