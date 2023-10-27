import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./GalleryNavigation";
import {Route,Switch,Redirect} from "react-router-dom";
import Homepage from "./Homepage";

function App() {
  return (
    <div>
      <GalleryNavigation galleries = {harvardArt.records}/>

      <Switch>
        <Route path="/error" compentent={Error}/>
        <Route path="/" compentent={Homepage}/>
        <Redirect to="/error"/>
      </Switch>
    </div>
  )
};

export default App;
