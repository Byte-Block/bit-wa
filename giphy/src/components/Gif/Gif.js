import React from 'react';
import './Gif.css';

const Gif = (props) => {
    return (
        <div className="Gif__Container">
            <button className="Gif__Delete" onClick={() => props.onDelete(props.id)}>X</button>
            <img className="Gif__Img" src={props.gifURL} alt="GIPHY" />
        </div>
    );
}

export { Gif };