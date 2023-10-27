import { useParams } from "react-router-dom";



const GalleryView = props => {
    const galleryID = useParams();
    const gallery = props.galleries.find(function(gallery) {
        return gallery.galleryid == galleryID.galleryid;
    })

    return (
        <>
            <h2>{gallery.name}</h2>
        </>
    )
}

export default GalleryView;