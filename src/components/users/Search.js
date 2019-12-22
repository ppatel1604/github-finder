import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={e => this.onSubmit(e)} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search users...'
            value={this.state.text}
            onChange={e => this.onChange(e)}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
