import React from 'react';
import './GalleryOfGifs.css';

import { Gif } from '../Gif/Gif';

const GalleryOfGifs = ({ gifs, onDelete }) => {
    return (
        <div className="GalleryOfGifs">
            {gifs.map((gif, i) =>
                <Gif
                    key={i}
                    id={gif.id}
                    gifURL={gif.images.downsized.url}
                    onDelete={onDelete}
                />
            )}
        </div>
    );
}

export { GalleryOfGifs };