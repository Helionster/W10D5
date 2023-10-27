import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./GalleryNavigation";

function App() {
  return (
    // <h1>Hello from App</h1>
    <GalleryNavigation galleries = {harvardArt.records}/>
  );
};

export default App;
