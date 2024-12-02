import React, { useState } from 'react';

function Image() {
    const [photos, setPhotos] = useState([]);

    const addPhoto = () => {
        setPhotos((prevPhotos) => [
            ...prevPhotos,
            {
                id: Date.now(),
                src: 'https://dance.knukim.edu.ua/wp-content/uploads/2022/12/A098B2F3-9598-4F1F-9E4E-4D88774D789F-1024x682.jpeg',
                alt: 'photo',
                width: 450, // Початкова ширина
                height: 300, // Початкова висота
            },
        ]);
    };

    const modifyPhotoSize = (factor) => {
        setPhotos((prevPhotos) => {
            if (prevPhotos.length === 0) return prevPhotos;
            const updatedPhotos = [...prevPhotos];
            const lastPhoto = updatedPhotos[updatedPhotos.length - 1];
            updatedPhotos[updatedPhotos.length - 1] = {
                ...lastPhoto,
                width: lastPhoto.width * factor,
                height: lastPhoto.height * factor,
            };
            return updatedPhotos;
        });
    };

    const deletePhoto = () => {
        setPhotos((prevPhotos) => prevPhotos.slice(0, -1));
    };

    const handleButtonClick = (action) => {
        switch (action) {
            case 'addPhoto':
                addPhoto();
                break;
            case 'enlargePhoto':
                modifyPhotoSize(1.2);
                break;
            case 'reducePhoto':
                modifyPhotoSize(0.8);
                break;
            case 'deletePhoto':
                deletePhoto();
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <div className="photo-container">
                {photos.map((photo) => (
                    <img
                        key={photo.id}
                        src={photo.src}
                        alt={photo.alt}
                        style={{
                            width: `${photo.width}px`,
                            height: `${photo.height}px`,
                        }}
                        className="photo-city"
                    />
                ))}
            </div>
            <div className="buttons-container">
                <button onClick={() => handleButtonClick('addPhoto')}>Додати</button>
                <button onClick={() => handleButtonClick('enlargePhoto')}>Збільшити</button>
                <button onClick={() => handleButtonClick('reducePhoto')}>Зменшити</button>
                <button onClick={() => handleButtonClick('deletePhoto')}>Видалити</button>
            </div>
        </div>
    );
}

export default Image;
