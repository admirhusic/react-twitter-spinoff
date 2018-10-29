import React, { Component } from 'react';

class PopularTweets extends Component {


  constructor(props) {
    super(props);

    this.state = {
      popularTweets: [],
      loading: true
    }
  }

  componentDidMount() {
     fetch('https://projects.blabladev.com/twitter/trends/place')
     .then(res => res.json())
    //  .then(res => console.log('Raw data', res[0].trends))
     .then(data => this.setState({popularTweets: data[0].trends, loading: false}))
     .catch(error => console.log('Parsing failed', error));
    
  }


  render() {

      if(!this.state.loading) {
        return (
          <div className="col">
          <p className="title">#populartweets</p>
              <div className="hashtag-box">
                <ul>
                {this.state.popularTweets.map((tweet, index) => {
  
                  return <li key={index}> <a href={tweet.url} target="_blank" rel="noopener noreferrer"> {tweet.name} </a></li>
  
                })}
              </ul>
              
              </div>
          </div>
      );
      }else {
        return (
            <div className="col">
            <p className="title">#popularTweets</p>
            <div className="hashtag-box"><p>Loading...</p></div>
            </div>

        );
      }



    
  }
}

export default PopularTweets;
