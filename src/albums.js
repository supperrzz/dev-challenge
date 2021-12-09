import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Album } from './album';

const url = 'https://jsonplaceholder.typicode.com/albums'
const maxAlbums = 15

export function Albums() {
  const [albums, setAlbums] = useState([]);
  const getAlbums = fetch(url);
  useEffect(function effectFunction() {
    getAlbums
    .then((response) => response.json())
    .then((json) => {
      setAlbums(json);
    });
  }, []);

  const albumList = albums.map((item, i) => {
    if(i < maxAlbums) {
      return (
        <div className="album">
            <div className="album__content">
              <a key={i} href={`/albums/${item.id}`}>
                <p>{`${item.title}`}</p>
              </a>
            </div>
        </div>
      )
    }
  })

  const params = useParams();

  if(params.id) {
    return <Album />
  }

  return (
    <div className="section">
      <div className="albums container">
        <h1 className="albums__heading">Photo Albums</h1>
          <div className="albums__wrap">
            {albumList}
          </div>
      </div>
    </div>
  );
}
