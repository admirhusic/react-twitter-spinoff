import React, { Component } from 'react';

import Mentions from '../Components/Mentions'

class RecentSearches extends Component {


  constructor(props) {
    super(props);

    this.state = {
        recentSearches: null,
        loading: true
    }
  }

  componentDidMount() {
    fetch('https://projects.blabladev.com/twitter/saved_searches/list')
     .then(res => res.json())
    //  .then(res => console.log('Raw data', res))
     .then(data => this.setState({recentSearches: data, loading: false}))
     .catch(error => console.log('Parsing failed', error));
  }


  render() {
    if(!this.state.loading){
        return (
            <div className="col">
            <p className="title">#recentSearches</p>
            <div className="hashtag-box">
                <ul>
                {this.state.recentSearches.map((search, index) => {
                    return <li key={index}>  {search.name} </li>
                    })} 
                </ul>  
            </div>
            
                <Mentions/>

            </div>

           
         );
    }else {
        return (
            <div className="col">
            <p className="title">#recentSearches</p>
            <div className="hashtag-box">
               <p>Loading...</p> 
            </div>
            </div>

        );
    }


     }

    
}

export default RecentSearches;
