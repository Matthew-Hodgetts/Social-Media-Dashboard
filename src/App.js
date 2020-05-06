import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header';
import ProfilesList from './components/ProfilesList';
import CardList from './components/CardList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [
        { name: 'Facebook', username: '@nathanf', followers: 1987, gain: 12 },
        { name: 'Twitter', username: '@nathanf', followers: 1044, gain: 22 },
        {
          name: 'Instagram',
          username: '@realnathanf',
          followers: '11K',
          gain: 32,
        },
        { name: 'Youtube', username: 'Nathan F.', followers: 8239, gain: -12 },
      ],
    };
  }
  render() {
    return (
      <div className='App'>
        <Header />
        <ProfilesList profiles={this.state.profiles} />
        <div className='container'>
          <h2 className='overview__title text-xl mt-5 font-bold'>
            Overview - Today
          </h2>
        </div>
        <CardList />
      </div>
    );
  }
}

export default App;
