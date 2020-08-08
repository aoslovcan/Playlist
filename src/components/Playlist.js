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
            visible: true,


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
   


    myFunction = e => {


        const target = e.target;
        const value = target.value;
        /*console.log(value);*/
        let song = this.state.songs;

        /* console.log(song)*/
        const list = song.sort((a, b) => a.duration - b.duration).map((exemple, index, array) => exemple)
        const listDESC = song.sort((a, b) => b.duration - a.duration).map((exemple, index, array) => exemple)
        /*  console.log(list)
          console.log(listDESC)*/
        switch (value) {
            case 'asc':

                this.setState({
                    songs: list
                })
                console.log(listDESC);

                break;
            case 'desc':
                this.setState({

                    songs: listDESC
                })
                console.log(list);

                break;

          

        }






    }


    render() {
        console.log(this.state.songs);
        var { songs } = this.state;

        return (
            <>

                <div className="section">
                    <div className="container">
                        <div className="row">



                            <ul className="list-group">

                                <form>
                                    <label for="songs">Sortiraj po trajanju: </label>

                                    <select onChange={this.myFunction} name="songs" id="song">
                                        <option name="none" value="none" >None</option>
                                        <option name="asc" value="asc" >Uzlazno</option>
                                        <option name="desc" value="desc">Silazno</option>


                                    </select>
                                </form>


                                {


                                    songs.map(song =>
                                        (
                                            <Song items={song} />

                                        ))
                                }
                            </ul>
                        </div>
                    </div>


                </div>

            </>
        );
    }
}

export default Playlist;
