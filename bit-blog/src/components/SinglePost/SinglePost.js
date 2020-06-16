import React from "react";
import "./SinglePost.css";

const SinglePost = ({ title, body }) => {
  return (
    <div className="SinglePost">
      <h3 className="SinglePost__Title text-left">{title}</h3>
      <p className="SinglePost__Body text-left">{body}</p>
    </div>
  );
};

export { SinglePost };
