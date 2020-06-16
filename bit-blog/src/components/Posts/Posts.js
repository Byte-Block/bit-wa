import React from "react";

import { fetchPosts } from "../fetch/fetch";
// import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SinglePost } from "../SinglePost/SinglePost";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetchPosts().then((data) =>
      this.setState(
        {
          posts: data.slice(0, 4),
        },
        () => console.log(this.state.posts)
      )
    );
  }

  render() {
    return (
      <>
        <h1 className="Posts__Title my-1">Posts</h1>
        {this.state.posts.map((post, i) => (
          <Link key={i} to={`/post/${post.id}`}>
            <SinglePost title={post.title} body={post.body} />
          </Link>
        ))}
      </>
    );
  }
}

export { Posts };
