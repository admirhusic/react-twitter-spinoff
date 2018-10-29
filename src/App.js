import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'; 




import Navigation from './Components/Navigation';
import PopularTweets from './Components/PopularTweets';
import Search from './Components/Search';
import Liked from './Components/Liked';
import Recent from './Components/Recent';
import RecentSearches from './Components/RecentSearches';



import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="header">
        <h1 className="header-title">Twitter Spinoff</h1>
      </header>
        <div className="container">
           <PopularTweets/>
            <BrowserRouter>
            <div>
            <Navigation/>
              <Switch>
                <Route path='/search' component={Search} exact />
                <Route path='/liked' component={Liked} />
                <Route path='/recent' component={Recent} />
                <Redirect from='/' to='/search'/>
              </Switch>
              </div>
            </BrowserRouter>
            <RecentSearches/>
        </div>
      </div>
    );
  }
}

export default App;
