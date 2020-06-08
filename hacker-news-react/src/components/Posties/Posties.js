import React, { Component } from 'react';
import "./Posties.css";

import { fetchStoryByID } from '../fetchStoryByID/fetchStoryByID';
import { GiBrutalHelm } from "react-icons/gi";

class Posties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            story: {}
        }
    }

    componentDidMount() {
        fetchStoryByID(this.props.id)
            .then(data => this.setState({
                story: data
            }));
    }

    render() {
        // console.log(this.state.story);
        return (
            <>
                <li className="Posties">
                    <span className="Posties__Title">{this.state.story.title}</span>
                    <span className="Posties__Author"><GiBrutalHelm />{this.state.story.by}</span>
                </li>
                <hr className="Posties__Divider" />
            </>
        );
    }
}

export { Posties };