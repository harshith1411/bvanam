import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
        <ImageContext.Provider value={{ photos, setPhotos, loading, setLoading }}>
            {children}
        </ImageContext.Provider>
    );
};

ImageProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useImageContext = () => useContext(ImageContext);