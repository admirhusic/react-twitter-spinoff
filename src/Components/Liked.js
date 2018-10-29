import React, { Component } from 'react';
import Spinner from '../Components/Spinner';
import Posts from '../Components/Posts';
class Liked extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tweets: [],
            loading: true,
            searchInput: '',
            resultsFound: false,
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {


        this.getFavorites();

    }


    getFavorites(screenName = '') {
        let form = new FormData();
        if (screenName === '') {
            form.append("screen_name", "blabladev");
        } else {
            form.append("screen_name", screenName)
        }

        fetch('https://projects.blabladev.com/twitter/favorites/list', {
            method: 'POST',
            body: form
        })

            .then(res => res.json())
            // .then(res => console.log('Raw data', res))
            .then(data => this.setState({ tweets: data, loading: false, resultsFound: true }))
            .catch(error => console.log('Parsing failed', error));
    }



    handleChange(e) {

        this.setState({ searchInput: e.target.value });
    }


    handleSubmit(e) {
        e.preventDefault();
        this.getFavorites(this.state.searchInput);
    }




    render() {
        if (this.state.loading) {
            return (
                <Spinner />
            )
        } else {
            return (
                <div className="col">
                    <p className="nav-desc">Search liked by...</p>
                    <div className="search-input">
                        <form onSubmit={this.handleSubmit}>
                            <span className="search-input-icon"></span>
                            <input value={this.state.searchInput} onChange={this.handleChange} type="text" placeholder="Search" />
                        </form>
                    </div>

                    <Posts data={this.state} />

                </div>


            );
        }

    }

}


export default Liked;