import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Toaster } from "react-hot-toast";

import SearchBar from "../searchBar/SearchBar";
import ImageGallery from "../imageGallery/ImageGallery";
import Loader from "../loader/Loader";
import LoadMoreBtn from "../loadMoreBtn/LoadMoreBtn";
import { getImages } from "../../api";
import ImageModal from "../imageModal/ImageModal";

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchImages() {
      try {
        setLoading(true);
        setIsError(false);
        const img = await getImages(query, page);
        setLoading(false);
        setImages((prevState) => [...prevState, ...img]);
        const perPage = 12;
        setLoadMore(img.length === perPage);
        console.log(img);
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
    console.log(page, query);
  }, [query, page]);

  const hendleSearch = async (value) => {
    setQuery(value);
    setPage(1);
    setImages([]);
  };

  const hendleLoadMore = async () => {
    setPage(page + 1);
  };

  const openModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImageUrl("");
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={hendleSearch} />
      <Toaster position="top-right" reverseOrder={false} />
      {loading && <Loader />}
      {isError && <p>Oops! There was an error! Try again!</p>}
      {images.length > 0 && (
        <ImageGallery images={images} onImgClick={openModal} />
      )}
      {images.length > 0 && !loading && loadMore && (
        <LoadMoreBtn onClick={hendleLoadMore} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imageUrl={selectedImageUrl}
      />
    </>
  );
}
