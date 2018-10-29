import React, { Component } from 'react';
import TweetParser from '../Components/TweetParser';


export default class Posts extends Component {

    render() {
     
        if(this.props.data.tweets.length > 0) {
            return (
                this.props.data.tweets.map((tweet, index) => {
                    return (
                        <div key={index} className="post-box">
                            <div className="media">
                                <img src={tweet.user.profile_image_url} alt="" />
                            </div>
                            <div className="content">
                                <h4 className="tweet-name">{tweet.user.name}</h4>
                                <h5 className="tweet-username">@{tweet.user.screen_name}</h5>
                                <p className="tweet-content" ><TweetParser children={tweet.text}></TweetParser></p>
                                <p className="tweet-timestamp">{tweet.created_at}</p>
                            </div>
                        </div>
                    );
    
                })
            )
        }else {

                if(this.props.data.notSearched) {
                    return(
                        <h3 className="info">Search something...</h3>
                    )
                }else {
                    return(
                        <h3 className="info">No results :(</h3>
                    )
                }
            }
           
        }

   
}