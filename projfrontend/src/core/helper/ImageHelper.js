import React from 'react';
import "../../styles.css";

const ImageHelper = ({product}) => {
    const imageUrl= product ? product.image 
    :`https://images.pexels.com/photos/5629220/pexels-photo-5629220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940` 
    return (
        <div className="rounded border border-success p-2">
            <img src={imageUrl}
            styel={{maxHeight:"100%", maxWidth:"100%",object:"fit"}}
            className="mb-3 rounded image_size"
            alt=""/>
        </div>
    );
}
export default ImageHelper;