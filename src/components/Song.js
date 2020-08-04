import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styleComponent.css';
function Song (props) {
    
 return (
    <>
    <div className="song">
        <h1>{props.name}</h1>
    </div>
    </>
    );
    
}
export default Song;
