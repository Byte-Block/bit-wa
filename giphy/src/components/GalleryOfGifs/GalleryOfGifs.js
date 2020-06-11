import React from 'react';
import './GalleryOfGifs.css';

const GalleryOfGifs = ({ gifs }) => {
    return (
        <div className="GalleryOfGifs">
            {gifs.map((gif, i) => <img className="GalleryOfGifs__img" key={i} src={gif.images.downsized.url} alt="GIPHY" />)}
        </div>
    );
}

export { GalleryOfGifs };