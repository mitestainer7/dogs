import React from "react";
import styles from "./FeedModal.module.css";
import useFetch from "../../../hooks/useFetch";
import { PHOTO_GET } from "../../../api/api";
import Error from "../../../components/Error/Error";
import Loading from "../../../components/Loading/Loading";
import PhotoContent from "../../../components/Photo/PhotoContent/PhotoContent";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
    // Essa verificação ocorre pq mesmo clicando na img, o currentTarget será a div com a classe 'modal', mas o target será a img clicada, porém ao clicar fora do modal, o target assumirá a div com a classe 'modal', então quando target e currentTarget forem iguais, significa que o clique foi fora do modal, fazendo assim ele fechar.
  }

  return (
    <div className={`${styles.modal} animeLeft`} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
