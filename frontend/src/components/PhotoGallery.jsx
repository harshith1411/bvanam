import { useEffect, useState, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import "react-loading-skeleton/dist/skeleton.css";
import "./PhotoGallery.css";
import { useImageContext } from "./ImageContext";

const supabaseUrl = import.meta.env.VITE_BVANAM_SUPABASE_URL;
const publicAnonKey = import.meta.env.VITE_BVANAM_SUPABASE_ANON_KEY;

// Initialize Supabase client
const supabase = createClient(supabaseUrl, publicAnonKey);

const fetchImages = async () => {
    try {
        const { data, error } = await supabase
            .from("photos")
            .select("link, year, event_name");

        if (error) {
            console.error("Error fetching images:", error);
            return [];
        }

        if (!data || data.length === 0) {
            console.warn("No photos found in the table.");
            return [];
        }

        return data.map(photo => ({
            link: photo.link, // Ensure correct column mapping
            year: photo.year,
            event_name: photo.event_name,
        }));
    } catch (err) {
        console.error("Unexpected error:", err);
        return [];
    }
};

const PhotoGallery = () => {
    const { photos, setPhotos, setLoading } = useImageContext();
    const [visiblePhotos, setVisiblePhotos] = useState([]);
    const [imageLoadingStatus, setImageLoadingStatus] = useState({});
    const observer = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const loadImages = async () => {
            const images = await fetchImages();
            setPhotos(images);
            setVisiblePhotos(images.slice(0, 10)); // Load initial set of images
            setLoading(false);

            // Initialize loading status for initial images
            const initialStatus = {};
            images.slice(0, 10).forEach((_, index) => {
                initialStatus[index] = false;
            });
            setImageLoadingStatus(initialStatus);
        };

        loadImages();
    }, [setPhotos, setLoading]);

    useEffect(() => {
        observer.current = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const newVisiblePhotos = photos.slice(visiblePhotos.length, visiblePhotos.length + 10);
                    setVisiblePhotos(prevPhotos => {
                        const uniqueNewPhotos = newVisiblePhotos.filter(photo => !prevPhotos.includes(photo));
                        return [...prevPhotos, ...uniqueNewPhotos];
                    });

                    // Initialize loading status for new images
                    setImageLoadingStatus(prevStatus => {
                        const newStatus = { ...prevStatus };
                        newVisiblePhotos.forEach((_, i) => {
                            newStatus[visiblePhotos.length + i] = false;
                        });
                        return newStatus;
                    });
                }
            });
        });

        const elements = document.querySelectorAll('.masonry-item');
        elements.forEach(element => observer.current.observe(element));

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [photos, visiblePhotos]);

    const handleImageError = (index) => {
        setVisiblePhotos(prevPhotos => prevPhotos.filter((_, i) => i !== index));
        setPhotos(prevPhotos => prevPhotos.filter(photo => photo.link !== visiblePhotos[index].link));
    };

    const handleImageLoad = (index) => {
        setTimeout(() => {
            setImageLoadingStatus(prevStatus => ({
                ...prevStatus,
                [index]: true
            }));
        }, 500); // Ensure skeleton is shown for at least 3 seconds
    };

    const openImage = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    return (
        <div className="PhotoGallery">
            <div className="masonry-grid">
                {visiblePhotos.map((photo, index) => (
                    <div key={index} className="masonry-item" data-caption={`${photo.event_name} - ${photo.year}`}>
                        {!imageLoadingStatus[index] && (
                            <div className="skeleton" style={{ height: "200px" }}></div>
                        )}
                        <img
                            id={`photo-${index}`}
                            src={photo.link}
                            alt={`Photo ${index}`}
                            onClick={() => openImage(photo.link)}
                            onError={() => handleImageError(index)}
                            onLoad={() => handleImageLoad(index)}
                            style={{
                                display: imageLoadingStatus[index] ? "block" : "none",
                                cursor: "pointer",
                            }}
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="image-modal" onClick={closeImage}>
                    <div className="modal-content">
                        <img src={selectedImage} alt="Enlarged" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PhotoGallery;
