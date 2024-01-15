import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import Notfound from "./views/NotFound";
import { GlobalContext } from "./context/GlobalContext";
import { useState, useEffect, useContext } from "react";

const App = () => {
  const [error, setError] = useState(false);

  const { setPhotos } = useContext(GlobalContext);

  const getData = async () => {
    try {
      const res = await fetch("/photos.json");
      const json = await res.json();
      setPhotos(json.photos);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      {error && <h3 className="error">Ha ocurrido un error. Intente de nuevo más tarde</h3>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favorites />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
