import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styleComponent.css';
function SongsDetails(props) {

    return (
        <>
        <div className="song">
        <ul className="list-group">
            <li className="list-group-item"><h3>{props.items.title}</h3> </li>
            <li className="list-group-item">  {props.items.duration}</li>
            <li className="list-group-item"> {props.items.position}</li>
            <li className="list-group-item"> {props.items.artist.name}</li>
           
        </ul>
        </div>
        </>
    );

}
export default SongsDetails;
