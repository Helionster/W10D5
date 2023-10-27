import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries = {harvardArt.records}/>
      <Route path='/galleries/:galleryid'>
        <GalleryView galleries = {harvardArt.records}/>
      </Route>
    </div>
  );
};

export default App;
