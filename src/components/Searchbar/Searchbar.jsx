import React, { Component } from 'react';
import css from './Searchbar.module.css';

export class Search extends Component {
  state = {
    query: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;
    if (query.trim() !== '') {
      this.props.onSubmit(query);
    }
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    const { query } = this.state;

    return (
      <>
        <header className={css.container}>
          <form className={css.form} onSubmit={this.handleSubmit}>
            <button type="submit" className={css.button}>
              <span>Search</span>
            </button>

            <input
              className={css.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={query}
              onChange={this.handleChange}
            />
          </form>
        </header>
      </>
    );
  }
}
