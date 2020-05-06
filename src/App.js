import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header';
import ProfilesList from './components/ProfilesList';
import CardList from './components/CardList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };

    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  toggleDarkMode() {
    const newValue = !this.state.darkMode;
    this.setState({
      darkMode: newValue,
    });
  }

  render() {
    return (
      <div className={this.state.darkMode ? 'App App--darkMode' : 'App'}>
        <Header toggleDarkMode={this.toggleDarkMode} />
        <main>
          <ProfilesList profiles={this.state.profiles} />
          <div className='container'>
            <h2 className='overview__title text-xl mt-5 font-bold'>
              Overview - Today
            </h2>
          </div>
          <CardList />
        </main>
      </div>
    );
  }
}

export default App;
