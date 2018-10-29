import React, {Component} from 'react';

export default class Spinner extends Component {
    render() {
        return (
            <div className="col">
                <div className="spinner-wrapper">
                <img className="spinner" alt="spinner" src="https://abs.twimg.com/a/1496350504/img/t1/Spinner-Dots-30fps-200px.gif"/>
                </div>
            </div>
        );
        
    };
}