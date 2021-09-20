import React from "react";

const CardNews = ({ author, image, content, title }) => {
  return (
    <React.Fragment>
      <figure>
        <img src={image} alt={title} />
      </figure>
      <h1>{author}</h1>
      <p>{content}</p>
    </React.Fragment>
  );
};

export default CardNews;
