import React, { Component } from 'react';
import './styleComponent.css';
import Song from './Song';
import axios from 'axios';
import './styleComponent.css';

class Playlist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            songs: [],
            
        }
    }
    
    componentDidMount() {
        axios.get("http://localhost:3001/chart")
            .then(res => {
                let songs = JSON.parse(res.data);
                let items = songs['tracks']['data'];
               // console.log(songs);
                this.setState({
                    songs: items
                });
            })
    }

    myFunction = e => {
        const target = e.target;
        const value = target.value;
        /*console.log(value);*/
        let song = this.state.songs;
        /* console.log(song)*/
        const list = song.sort((a, b) => a.duration - b.duration).map((songs, index, array) => songs)
        const listDESC = song.sort((a, b) => b.duration - a.duration).map((songs, index, array) =>songs)
        /*  console.log(list)
          console.log(listDESC)*/
        switch (value) {
            case 'asc':
                this.setState({
                    songs: list
                });
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
        //console.log(this.state.songs);
        var { songs } = this.state;
        return (
            <>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <ul className="list-group">
                             <form>
                                <div className="form-group container row">
                                    <label className="col-sm-5 col-form-label" htmlFor="songs">Sortiraj po trajanju: </label>
                                    <div className="col-sm-7 ">
                                         <select className="form-control" onChange={this.myFunction} name="songs" id="song">
                                            <option name="none" value="none" >None</option>
                                            <option name="asc" value="asc" >Uzlazno</option>
                                            <option name="desc" value="desc">Silazno</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                            {songs.map(song =>(<Song items={song} key={song.id}/>))}
                        </ul>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
export default Playlist;