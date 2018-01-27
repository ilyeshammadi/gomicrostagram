import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {grpc, BrowserHeaders, Code} from "grpc-web-client";

import {PostsService} from './proto/posts/posts_pb_service'
// import {GetAllPostsRequest, Post} from './proto/posts/posts_pb'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
