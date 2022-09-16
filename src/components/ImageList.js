import React from "react";

const ImageList = ({ images }) => {
  const imagesUrl = images.map(({description, id, urls}) => {
    return (
      <img alt={description} key={id} src={urls.regular} />
    );
  });
  return imagesUrl;
};

export default ImageList;
