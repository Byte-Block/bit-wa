import React from 'react';
//import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';


const Main = ({ searchResults }) => {

    return (
        <div>
            {searchResults !== undefined ?
                <iframe width="560" height="315" src={'https://www.youtube.com/embed/'} title="W3Schools Free Online Web Tutorials"></iframe>
                : <iframe width="560" height="315" src={'https://www.youtube.com/embed/' + searchResults.id.videoId} title="W3Schools Free Online Web Tutorials"></iframe>
            }
        </div>
    );

}
export { Main };