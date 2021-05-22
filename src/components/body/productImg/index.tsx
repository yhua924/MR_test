import React from "react";
import image from '../../../assets/image/classic-tee.jpg'
import './image.css'
const ProductImg = () =>{
    return(
        <div className={'productImg'}>
            <img src={image} alt={'classic-tee'}/>
        </div>
    )
}

export default ProductImg
