import { GlobalContext } from "../context/GlobalContext";
import { useContext, useState, useEffect } from "react";
import Card from "./Card";

const Gallery = () => {
  const { photos } = useContext(GlobalContext);

  return (
    <div className="gallery p-3">
      {photos.map((photo) => (
        <Card photo={photo} key={photo.id}></Card>
      ))}
    </div>
  );
};
export default Gallery;
