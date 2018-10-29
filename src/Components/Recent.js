import React, { Component } from 'react';
import Spinner from '../Components/Spinner';
import Posts from '../Components/Posts';

class Recent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tweets: [],
            loading: false,
            searchInput: '',
            notSearched: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

   
     handleChange(event) {
         this.setState({searchInput: event.target.value});
     }

     handleSubmit(e) {
        this.setState({loading: true});
        e.preventDefault();
        let form = new FormData();
        form.append('screen_name', this.state.searchInput);
        fetch('https://projects.blabladev.com/twitter/statuses/user_timeline', {method: 'POST', body: form})
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => this.setState({tweets: data, loading: false, notSearched: false}))
        .catch(error => console.log(error));
    }




    render() {
        
        if(this.state.loading) {
            return (<Spinner/>)
        }else {
        return (
            <div className="col">
            <p className="nav-desc">Recent tweets</p>
             <div className="search-input">
             <form onSubmit={this.handleSubmit}>
                <span className="search-input-icon"></span>
                <input value={this.state.searchInput} onChange={this.handleChange} type="text" placeholder="Search"/>
            </form>
            </div>
            <div> 
              <Posts data={this.state} /> 

         </div>
            </div>


        );

    }

    }

}


export default Recent;