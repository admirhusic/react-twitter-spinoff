import React, { Component } from 'react';
import TweetParser from '../Components/TweetParser';


class Mentions extends Component {

    constructor(props) {

        super(props);

        this.state = {
            mentions: [],
            loading: true
        }
    }

    componentDidMount() {


        fetch('https://projects.blabladev.com/twitter/statuses/mentions_timeline', { method: 'POST' })
            .then(res => res.json())
            // .then(res => console.log('Mentions:', res))
            .then(data => this.setState({ mentions: data, loading: false }))
            .catch(error => console.log('Parsing failed', error));

    }






    render() {

        if (!this.state.loading) {
            return (
                <div className="posts-small">
                    <p className="title">#blablaDev</p>
                    {this.state.mentions.map((tweet,index)=> { 
                 return (
                    <div key={index} className="post-box post-box-small">
                        <div className="media">
                            <img src={tweet.user.profile_image_url} alt="" />
                        </div>
                        <div className="content">
                            <h4 className="tweet-name">{tweet.user.name}</h4>
                            <h5 className="tweet-username">@{tweet.user.screen_name}</h5>
                            <p className="tweet-content"><TweetParser children={tweet.text}></TweetParser></p>
                            <p className="tweet-timestamp">{tweet.created_at}</p>
                        </div>
                    </div>
                 );
                 })
                }
                   
                </div>
            );
        } else {
            return (
                <div className="posts-small">
                 <p className="title">#blablaDev</p>
                    <p>Loading...</p>
                </div>
            );
        }
    }
}


export default Mentions;