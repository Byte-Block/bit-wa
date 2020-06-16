import React from "react";
import { Link } from "react-router-dom";

import { fetchPostById } from "../fetch/fetch";

class DisplaySinglePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };
  }

  componentDidMount() {
    fetchPostById(this.props.match.params.id).then((data) =>
      this.setState({
        post: data,
      })
    );
  }

  render() {
    return (
      <>
        <Link to="/">&lt; Back</Link>
        <h3>{this.state.post.title}</h3>
        <p>{this.state.post.body}</p>
      </>
    );
  }
}

export { DisplaySinglePost };
