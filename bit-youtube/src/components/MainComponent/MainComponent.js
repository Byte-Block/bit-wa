import React from 'react';

import { Row, Col } from 'react-materialize';
import { VideoPlaying } from '../VideoPlaying/VideoPlaying';
import { ResultsPage } from '../ResultsPage/ResultsPage';


const MainComponent = ({ searchResults, onGet, videoURL }) => {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         searchResults: this.props.searchResults
    //     }
    // }

    // componentDidMount() {
    //     this.setState({
    //         searchResults: this.props.searchResults
    //     }, () => console.log(this.state.searchResults));
    // }

    // componentDidUpdate() {
    //     this.setState({
    //         searchResults: this.props.searchResults
    //     });
    // }

    // componentDidMount() {
    //     console.log(this.state.searchResults);

    // }

    // shouldComponentUpdate() {
    //     this.setState({
    //         searchResults: this.props.searchResults
    //     });
    // }

    //render() {
    return (
        <Row>
            <Col s={9}>
                <VideoPlaying videoURL={videoURL}/>
            </Col>
            <Col s={3}>
                <ResultsPage searchResults={searchResults} onGet={onGet} />
            </Col>
        </Row>
    );
    //}
}

export { MainComponent };

/* {searchResults !== undefined ?
                <iframe width="560" height="315" src={'https://www.youtube.com/embed/'} title="W3Schools Free Online Web Tutorials"></iframe>
                : <iframe width="560" height="315" src={'https://www.youtube.com/embed/' + searchResults.id.videoId} title="W3Schools Free Online Web Tutorials"></iframe>
            } */

/*
×
Error: The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.
*/


    // return (
    //     <div className="MainComponent">
    //         <div className="container">
    //             <div className="row">
    //                 <div className="col-4 offset-5">
    //                     {/*
    //                         ResultsPage
    //                         VideoPage
    //                     */ }
    //                     <div className="card" style={{ width: 18 + 'rem' }}>
    //                         <img src="https://via.placeholder.com/286x180" className="card-img-top" alt="..." />
    //                         <div className="card-body">
    //                             <h5 className="card-title">Card title</h5>
    //                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                             <a href="#" className="btn btn-primary">Go somewhere</a>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
