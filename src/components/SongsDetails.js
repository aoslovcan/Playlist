import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styleComponent.css';

let TimeFormat = require('hh-mm-ss')
function SongsDetails(props) {

    return (
        <>
            <div className="song">
                <ul className="list-group">
                    <li className="list-group-item">
                        <h3><FontAwesomeIcon icon="music" /> {props.items.title}</h3>
                    </li>
                    <li className="list-group-item">
                        <FontAwesomeIcon icon="medal" color="yellow" /> Redni broj: <strong>{props.items.position}</strong>
                    </li>
                    <li className="list-group-item">
                        <FontAwesomeIcon icon="clock" /> Trajanje:  {TimeFormat.fromS(props.items.duration, 'mm:ss') }
                    </li>

                    <li className="list-group-item"> <FontAwesomeIcon icon="user" /> Skladatelj: <strong>{props.items.artist.name}</strong>
                    </li>

                </ul>
            </div>
        </>
    );

}
export default SongsDetails;
