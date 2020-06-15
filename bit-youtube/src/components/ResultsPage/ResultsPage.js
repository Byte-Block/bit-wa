import React from 'react';

import { Row } from 'react-materialize';
import { SingleResult } from '../SingleResult/SingleResult';

const ResultsPage = ({ searchResults, onGet, relatedVideos }) => {

    return (
        <>
            {
                relatedVideos.length ?
                    <Row>
                        {
                            relatedVideos.map((result, i) => (
                                <SingleResult key={i}
                                    videoId={result.id.videoId}
                                    thumbnail={result.snippet.thumbnails.default.url}
                                    iframeTitle={result.snippet.title}
                                    onGet={onGet}
                                />
                            ))
                        }
                    </Row>
                    :
                    searchResults.length ?
                        <Row >
                            {
                                searchResults.map((result, i) => (
                                    <SingleResult key={i}
                                        videoId={result.id.videoId}
                                        thumbnail={result.snippet.thumbnails.default.url}
                                        iframeTitle={result.snippet.title}
                                        onGet={onGet}
                                    />
                                ))
                            }
                        </Row>
                        :
                        <Row />
            }
        </>

    );
}

export { ResultsPage };