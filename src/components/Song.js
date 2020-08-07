import React, { Component, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Modal from 'react-bootstrap/Modal'

import './styleComponent.css';
import SongsDetails from './SongsDetails';


class Song extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            show: false
        }

    }

    showModal = e => {
        this.setState({
            show: !this.state.show
        });
    };

    onClose = e => {
        this.setState({
            show: false
        });
    };
    render() {
        return (
            <>
                <div className="song">

                    {
                        <div className="row"> <div className="col-sm-8">
                            <li key={this.props.items.id} className="list-group-item">
                             <strong>{this.props.items.position}.</strong>   {this.props.items.title}
                            </li>
                        </div>
                            <div className="col-sm-4">
                                <button onClick={e => { this.showModal() }} className="more">
                                    <FontAwesomeIcon icon="play-circle" color="white" />
                                </button>
                            </div>
                        </div>
                    }

                </div>
                <Modal onClose={this.showModal} show={this.state.show}>
                    <button className="close" onClick={e => { this.onClose(); }}>
                        <FontAwesomeIcon icon="times" color="black" />
                    </button>
                    <SongsDetails items={this.props.items} />

                </Modal>
            </>
        );
    }


}
export default Song;
