import React from 'react';

const VideoPlaying = ({ videoURL }) => {
    return (
        <>
            {
                videoURL !== '' ?
                    <div className="video-container">
                        <iframe width="853" height="480" src={videoURL} frameBorder="0" allowFullScreen></iframe>
                    </div>
                    :
                    <div className="video-container">
                        <iframe width="853" height="480" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameBorder="0" allowFullScreen></iframe>
                    </div>
            }
        </>
    );
}

export { VideoPlaying };

/* {searchResults !== undefined ?
                <iframe width="560" height="315" src={'https://www.youtube.com/embed/'} title="W3Schools Free Online Web Tutorials"></iframe>
                : <iframe width="560" height="315" src={'https://www.youtube.com/embed/' + searchResults.id.videoId} title="W3Schools Free Online Web Tutorials"></iframe>
            } */





