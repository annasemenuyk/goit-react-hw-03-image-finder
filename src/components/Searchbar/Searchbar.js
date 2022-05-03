import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    const { searchQuery } = this.state;
    if (searchQuery.trem() === '') {
      return toast.error('Enter something');
    }

    this.props.onSubmit(searchQuery);
    this.state({ searchQuery: '' });
  };

  handleInput = event => {
    this.setState({ searchQuery: event.carrentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <BsSearch
              style={{ width: 20, height: 20 }}
              className="SSearchForm-button-label"
            />
          </button>

          <input
            className="SearchForm-input"
            class="input"
            type="text"
            value={this.state.searchQuery}
            onChange={this.handleInput}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
