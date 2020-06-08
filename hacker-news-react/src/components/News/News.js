import React from 'react';
import './News.css';

import { fetchIDsTopStories } from '../fetchIDsTopStories/fetchIDsTopStories';
import { Posties } from '../Posties/Posties';

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newsID: []
        }
    }

    componentDidMount() {
        fetchIDsTopStories()
            .then(data => this.setState({
                newsID: data.slice(0, 10)
            }))
            .catch(error => {
                console.log(error);
                alert(error);
            });
    }

    render() {
        return (
            <ol className="News">
                {this.state.newsID.map((id, i) => <Posties key={i} id={id} />)}
            </ol>
        );
    }
}

export { News };