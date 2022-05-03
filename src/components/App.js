import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import fetchImagesApi from './services/pixabay';
// import Container from "./components/Container";
import Searchbar from './components/Searchbar';
// import ImageGallery from "./components/ImageGallery";
// import Button from "./components/Button";
// import LoaderSpinner from "./components/Loader";
// import Modal from "./components/Modal";
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
class App extends Component {
  state = {
    SearchQuery: '',
    Page: 1,
  };
}

componentDidUpdate(prevProps, prevState){
  const { searchQuery, page } = this.state;
  const prevSearchQuery = prevState.searchQuery;
  const prevPage = prevState.page;
}
