import React from 'react';

import { Row } from 'react-materialize';
import { SingleResult } from '../SingleResult/SingleResult';

const ResultsPage = ({ searchResults, onGet }) => {

    return (
        <>
            {
                searchResults.length ?
                    <Row >
                        {
                            searchResults.map((result, i) => (
                                <SingleResult key={i}
                                    videoId={result.id.videoId}
                                    thumbnail={result.snippet.thumbnails.default.url}
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