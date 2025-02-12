import PhotoGallery from '../components/PhotoGallery.jsx';
import { ImageProvider } from "../components/ImageContext";

const Gnapakalu = () => {
    return (
        <ImageProvider>
            <PhotoGallery />
        </ImageProvider>
    );
};

export default Gnapakalu;