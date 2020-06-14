import React from 'react';

import { Col } from 'react-materialize';

const SingleResult = ({ thumbnail, videoId, onGet }) => {

    return (
        <Col s={12}>
            <div className="card">
                <div className="card-image">
                    <img src={thumbnail} alt="Video" onClick={() => onGet(videoId)}/>
                </div>
            </div>
        </Col>
    );
}

export { SingleResult };