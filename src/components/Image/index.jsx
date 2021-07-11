import React from 'react';
import { Image as CloudinaryImage } from 'cloudinary-react';

export const Image = ({ imgId, width = "300" }) => {
    const cloudName = process.env.REACT_APP_CLOUDINARY_SPACE_ID;
    return (<CloudinaryImage cloudName={cloudName} publicId={imgId} width={width} height={width} crop="fit" />);
};
