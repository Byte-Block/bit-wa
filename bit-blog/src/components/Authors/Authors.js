import React from "react";
import { Link } from "react-router-dom";

import { fetchAuthors } from "../fetch/fetch";

class Authors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
    };
  }

  componentDidMount() {
    fetchAuthors().then((data) =>
      this.setState(
        {
          authors: data.slice(0, 6),
        },
        () => console.log(this.state.authors)
      )
    );
  }

  render() {
    return (
      <>
        <h1>Authors({this.state.authors.length})</h1>
        {this.state.authors.map((author, i) => (
          <Link key={i} to={`/authors/${author.id}`}>
            <div className="Authors">
              <h2>{author.name}</h2>
            </div>
          </Link>
        ))}
      </>
    );
  }
}

export { Authors };
