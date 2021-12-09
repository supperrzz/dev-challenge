import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Modal } from "@mui/material";

export function Album() {
  const { id } = useParams();
  const albumUrl = `https://jsonplaceholder.typicode.com/albums/${id}`
  const url = `https://jsonplaceholder.typicode.com/albums/${id}/photos`
  const [albumData, setAlbumData] = useState([]);
  const [content, setContent] = useState([]);
  const [album, setAlbum] = useState({});
  const getAlbum = fetch(albumUrl);
  const getAlbumData = fetch(url);

  const [open, setOpen] = useState(false);
  const handleOpen = (data) => {
    setOpen(true);
    setContent(data);
  }
  
  const handleClose = () => setOpen(false);

  const style = {

  };

  useEffect(() => {
    getAlbumData
    .then((response) => response.json())
    .then((json) => {
      setAlbumData(json);
    })
  }, []);

  useEffect(() => {
    getAlbum
    .then((response) => response.json())
    .then((json) => {
      setAlbum(json);
    })
  }, []);

  const albumPhotos = albumData.map((item, i) => (
    <div className="album">
      <div className="album__content" onClick={() => handleOpen(item)}>
        <img style={{maxWidth:'100%'}} src={item.url} alt={item.title}/>
      </div>
      <p>{item.title}</p>
    </div>
  ))

  return (
    <div className="section">
      <div className="album container">
        <h1 className="album__heading">{album.title}</h1>
        <div className="album__photos__wrap">
          {albumPhotos}
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="modal__content">
            <img style={{width:'100%'}} src={content.url} alt={content.title}/>
            <p className="modal__content__title">{content.title}</p>
          </div>
        </Modal>
      </div>
    </div>
  );
}
