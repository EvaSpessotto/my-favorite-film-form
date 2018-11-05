import React, { Component } from 'react';
import './App.css';
import FavoriteMovieForm from './components/FavoriteMovieForm';
class App extends Component {
  render() {
    return (
      <div className="App">
        <FavoriteMovieForm/>
      </div>
    );
  }
}

export default App;
