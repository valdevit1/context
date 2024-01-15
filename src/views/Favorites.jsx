import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import Card from "../components/Card";

const Favorites = () => {
  const { favorites } = useContext(GlobalContext);
  return (
    <div className="fav-container">
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery">
        {favorites.map((photo) => (
          <Card photo={photo} key={photo.id}></Card>
        ))}
      </div>
    </div>
  );
};
export default Favorites;
