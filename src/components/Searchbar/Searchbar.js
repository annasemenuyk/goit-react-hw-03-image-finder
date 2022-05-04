import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    const { searchQuery } = thistyles.state;
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
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchForm - button}>
            <BsSearch style={{ width: 20, height: 20 }} />
          </button>

          <input
            className={styles.SearchForm - input}
            type="text"
            value={this.state.searchQuery}
            onChange={this.handleInput}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
