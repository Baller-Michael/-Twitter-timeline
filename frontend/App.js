import React, { Component } from 'react';
import TweetSingle from './TweetSingle.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      tweets: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.getTweets = this.getTweets.bind(this)
  }

  handleChange(e) {
    this.setState({ username: e.target.value })
  }

  getTweets() {
    const { username } = this.state;

    fetch(`/getTweets?username=${username}`).then(function (response) {
      // The response is a Response instance.
      // You parse the data into a useable format using `.json()`
      return response.json();
    }).then(tweets => this.setState({ tweets }));
  }

  render() {
    const { username, tweets } = this.state;


    return (
      <div className="container">
        <input className="validate col s6" type="text" name="username" placeholder="Enter username" onChange={this.handleChange} value={username} />
        <button className="waves-effect waves-light btn col s3" onClick={this.getTweets}>submit</button>
        {tweets.map(el => (
          <TweetSingle
            photo={el.user.profile_image_url}
            text={el.text}
            fullName={el.user.name}
            userId={el.user.screen_name}
            tweetDate={el.created_at}
          />
        ))
        }
      </div>
    );
  }
}

export default App;
