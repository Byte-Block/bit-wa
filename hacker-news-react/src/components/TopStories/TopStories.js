import React from 'react';

import { fetchIDsTopStories } from '../fetchIDsTopStories/fetchIDsTopStories';
import { fetchStoryByID } from '../fetchStroyByID/fetchStoryByID';


class TopStories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            stories: []
        };
    }

    componentDidMount() {
        fetchIDsTopStories()
            .then(data => {
                this.setState({ data: data }, () => {
                    const requests = this.state.stories.map(story => fetchStoryByID(story));
                    Promise.all(requests)
                        .then(data => {
                            this.setState({ stories: data });
                        });
                });
            });
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}