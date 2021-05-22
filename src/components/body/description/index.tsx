import React, {useContext, useState} from "react";
import './description.css'
import product from '../../../data/product.json'
import {shoppingContext} from "../../../context/shoppingContext";
import productData from "../../../data/product.json";

const Description =() =>{
    const [selectedSize, setSelectedSize] = useState<string>()
    const [hasError, setHasError] = useState<boolean>()
    const [cart, setCart] = useContext(shoppingContext)

    const selectSizeHandler = (size: string) =>{
        setSelectedSize(size)
    }

    const onAddToCartClick = () => {
        setHasError(selectedSize === undefined)

        if (selectedSize) {
            const newCart = cart.map(s=> ({...s}))

            const sizeCartProductIndex = newCart.findIndex((s:any)=>s.size === selectedSize);

            if (sizeCartProductIndex !== -1) {
                newCart[sizeCartProductIndex].quantity += 1;
            } else {
                newCart.push({
                    title: productData.title,
                    quantity: 1,
                    price: productData.price,
                    size: selectedSize
                })
            }

            setCart(newCart)
        }
    }
    return(
        <div className={'productDescription'}>
            <div className={'row'}>
                <div className={'col-12 font_arial font_medium description_Title'}>{product.title}</div>
                <div className={'hr'}></div>
                <div className={'col-12 font_bold price'}>{product.price}</div>
                <div className={'hr'}></div>
                <div className={'col-12 font_small font_light_grey font_arial description'}>
                    {product.description}
                </div>

                <div className={'col-12 font_bold font_small font_light_grey'}>
                    SIZE
                    <span className={'size_star'}>*</span>
                    <span className={'font_dark_grey'}> &nbsp; &nbsp; {selectedSize}</span>
                </div>

                {hasError&& <div className={'text-danger'}> Please select size</div>}

                <div className={'col-12'}>
                    <div className={'row'}>
                        {
                            product.sizeOptions.map((res:string, index:number) =>{
                                return(
                                    <div className={selectedSize === res? 'product_size productSize_selected':'product_size'} key={index}  onClick={() =>selectSizeHandler(res)}>
                                        {res}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className={'col-12'}>
                    <span onClick={onAddToCartClick} className={'addBtn'}>
                        ADD TO CART
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Description
