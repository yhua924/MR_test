import React, {useContext} from "react";
import './cart.css'
import product from '../../../assets/image/classic-tee.jpg'
import {CartProduct, shoppingContext} from "../../../context/shoppingContext";

const CartCard = () =>{
    const [cart] = useContext(shoppingContext)
    return(
        <div className={'cart'}>

            {cart.map((res:CartProduct, index:number)=>{
                return(
                    <div className={'row item_group font_dark_grey'} key={index}>
                        <div className={'col-4 cart_img'}>
                           <img src={product} alt={'cloth'}/>
                        </div>
                        <div className={'col-8'}>
                            <div className={'row'}>
                                <div className={'col-12 title font_dark_grey font_arial item'}>
                                    {res.title}
                                </div>
                                <div className={'col-12 title font_arial item'}>
                                    {res.quantity} X <b>{res.price}</b>
                                </div>
                                <div className={'col-12 title font_arial item'}>
                                    Size: {res.size}
                                </div>

                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default CartCard
