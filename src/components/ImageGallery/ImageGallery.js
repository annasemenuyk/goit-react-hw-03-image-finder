import { Component } from 'react';
import { toast } from 'react-toastify';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';
import '../../services/pixabay';
const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          imagesUrl={image.webformatURL}
          imagesAlt={image.tags}
          imageId={image.id}
          onClick={() => {
            onOpenModal(image);
          }}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
