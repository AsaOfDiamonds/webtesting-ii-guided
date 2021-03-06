import React, { Component } from 'react';
import Players from './players/Players';
import './App.css';

class App extends Component {
  state = {
    greeting: null,
    players: [
      { id: 1, name: 'Anna' },
      { id: 1, name: 'Jen' },
      { id: 1, name: 'Sarah' },
      { id: 1, name: 'Pat' }
    ]
  }
  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <div>
          <button onClick={this.greet}>Greet</button>
          <div>{this.state.greeting}</div>
          <Players players={this.state.players} />
        </div>
      </div>
    );
  }

  greet = () => {
    this.setState({ greeting: 'Hello Web Students'});
  }

}

export default App;
