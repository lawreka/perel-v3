import React from 'react';
import { Image as CloudinaryImage, Transformation } from 'cloudinary-react';

export const Image = ({ imgId, width = "300" }) => {
    const cloudName = process.env.REACT_APP_CLOUDINARY_SPACE_ID;
    return (
        <CloudinaryImage cloudName={cloudName} publicId={imgId} width={width} height={width} crop="fit">
            <Transformation quality="100" />
        </CloudinaryImage>
    );
};
