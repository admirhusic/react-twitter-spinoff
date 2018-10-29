import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {


    render() {
        return (
               
            <div className="nav">
                <NavLink className="nav-btn" activeClassName="active" to="/search">Search tweets</NavLink>
                <NavLink className="nav-btn" activeClassName="active" to="/liked">Liked by blablaDev</NavLink>
                <NavLink className="nav-btn" activeClassName="active" to="/recent">Recent</NavLink>
            </div>
                
            
        );
    }

}


export default Navigation