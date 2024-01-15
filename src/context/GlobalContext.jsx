import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  const toggleFavoritePhoto = (photo) => {
    photo.liked = !photo.liked;
    const exist = favorites.includes(photo);
    exist ? setFavorites(favorites.filter((favorite) => favorite.id !== photo.id)) : setFavorites([...favorites, photo]);
  };

  const state = { photos, setPhotos, favorites, toggleFavoritePhoto };

  return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
