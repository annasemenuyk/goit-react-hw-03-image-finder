import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import fetchImagesApi from './services/pixabay';
import Container from './components/Container';
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

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    const prevSearchQuery = prevState.searchQuery;
    const prevPage = prevState.page;
    if (prevSearchQuery !== searchQuery || prevPage !== page) {
      this.setState({ status: Status.PENDING });
      fetchImagesApi(searchQuery, page)
        .then(images => {
          if (images.hits.linght === 0) {
            toast.error('Requested images not found!');
            this.resetPage();
          }
          this.setState(prevState =>
            page > 1
              ? {
                  imagesArray: [...prevState.imagesArray, ...images.hits],
                  status: Status.RESOLVED,
                }
              : { imagesArray: images.hits, status: Status.RESOLVED }
          );
        })
        .catch(error => {
          this.setState({ error, status: Status.REJECTED });
          toast.error('Requested images not found!');
        });
    }
  }
  handleFormSubmit = searchQuery => {
    this.resetPage();
    this.setState({ searchQuery });
  };
  resetPage = () => {
    this.setState({ page: 1 });
  };

  handleLoadMoreBtn = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  toggleModal = imagesArray => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      imagesModal: imagesArray,
    }));
  };
  render() {
    const { imagesArray, status, showModal, imagesModal } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
      </Container>
    );
  }
}

export default App;
