
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import tweetParser from 'tweet-parser'; //https://www.npmjs.com/package/react-twitter-parser

const TweetParser = ({ children, urlClass, textClass, target }) => {
    const tweet = tweetParser(children).map(part => {
      switch (part.type) {
        case 'TEXT':
          return <span key={part.content} className={textClass}>{part.content}</span>;
        default:
          return <a key={part.content} className={urlClass} href={part.url} target={target}>{part.content}</a>;
      }
    });
  
    return <div>{tweet}</div>
  }
  
  TweetParser.propTypes = {
    children: PropTypes.node.isRequired,
    urlClass: PropTypes.string,
    textClass: PropTypes.string,
    target: PropTypes.string,
  };
  
  TweetParser.defaultProps = {
    urlClass: 'tweet-hashtag-link-mention',
    textClass: '',
    target: '_blank',
  }

  export default TweetParser;

