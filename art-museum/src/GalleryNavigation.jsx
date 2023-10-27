import {NavLink} from "react-router-dom";
import harvardArt from "./data/harvardArt";
import "./components/GalleryNavigation/GalleryNavigation.css";

const GalleryNavigation = props => {

    const gallariesLinks = props.galleries.map((gallery) => {
        return (
        <NavLink to={`/galleries/${gallery.galleryid}`}>
            <li>
                {gallery.name}
            </li>
        </NavLink>)
    });

    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink to="/">
                <h1>Home Page</h1>
            </NavLink> 

            <ul>
                {gallariesLinks}
            </ul>
        </nav>
    )
};

export default GalleryNavigation;