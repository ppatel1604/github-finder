import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Axios from 'axios';
import Search from './components/users/Search';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  getdata = async url => {
    this.setState({ loading: true });
    const res = await Axios.get(url);
    return res.data;
  };

  async componentDidMount() {
    const users = await this.getdata(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      users,
      loading: false
    });
  }

  searchUsers = async text => {
    if (text) {
      const result = await this.getdata(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      this.setState({
        users: result.items,
        loading: false
      });
    }
  };

  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    });
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0}
          />
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
