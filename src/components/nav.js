import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styleComponent.css';

function Nav() {
    return (
        <>
            <div className="navigation">
                <h3><FontAwesomeIcon icon='music' color='#ffc0cb' /></h3>
                <h3> <FontAwesomeIcon icon='music' color='#ffff00' /> Dobrodošli u TopPop <FontAwesomeIcon icon='music' color='#008000' />
                </h3>
                <h3><FontAwesomeIcon icon='music' color='#b3b3ff' /> </h3>
            </div>
        </>
    );
}
export default Nav;