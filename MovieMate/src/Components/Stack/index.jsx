import React, { Component } from 'react';
import stackImg from './stackImg';
import './style.css';

class Stack extends Component {

    state = {
        img: stackImg
    }

    render() {
        return (
            <div className="Stack">
                {this.state.img.map(item => (
                    <div className="Stack__item" key={item.id}>
                        <img src={item.src} alt="" width="100px" height="100px" />
                    </div>
                ))}
            </div>
        );
    }
}

export default Stack;
