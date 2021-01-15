import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'


class App extends Component {
  constructor() {
    super();
    this.state = {
      searchfield: '',
      robots: [],
    };
  }

  onSearchChanged = event => {
    this.setState({ searchfield: event.target.value });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  render() {
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return !robots.length ? 
    <h1>Loading...</h1> :    
      (
        <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChanged} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
          
        </div>
      );
    }
  }

export default App;
