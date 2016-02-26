import React from 'react';
import { Component } from 'react';

export default class App extends Component {
	//this.props.children used when you define nested routes
  render() {
    return (
      <div>
      	{this.props.children} 
      </div>
    );
  }
}
