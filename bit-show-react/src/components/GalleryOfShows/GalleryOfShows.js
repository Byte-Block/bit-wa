import React from 'react';

import { fetchShows } from '../fetchShows/fetchShows';
import { SingleShowCard } from '../SingleShowCard/SingleShowCard';

class GalleryOfShows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetchShows((results) => this.setState({
            data: results
        }));
    }

    render() {
        return (
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="row listOfShows">
                        {this.state.data.map((show, i) => (
                            <SingleShowCard key={i} showImageURL={show.image.medium} showName={show.name} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export { GalleryOfShows };