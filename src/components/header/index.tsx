import React, {useContext, useState} from "react";
import "./header.css"
import CartCard from "./cart_card";
import {shoppingContext} from "../../context/shoppingContext";

const Header = () =>{
    const [isDropDownWork, setIsDropDownWork] = useState<boolean>(false)
    const [cart] = useContext(shoppingContext)
    const count =  cart.reduce((a,b) => a + b.quantity,0)
    return(
        <>
            <div className={'row'}>
                <div className={'col-md-12'}>
                    <div className={'mt-3 header'}>
                        <div className={isDropDownWork? 'header_Cart active': 'header_Cart'}>
                            <span
                                onMouseEnter={() => setIsDropDownWork(true)}
                                onMouseLeave={() => setIsDropDownWork(false)}
                            >My Cart({count})</span>
                        </div>
                    </div>
                </div>
                <div className={'col-md-12'}>
                    {
                        isDropDownWork && <div className={'header_dropdown'}><CartCard/></div>
                    }
                </div>
            </div>

        </>
    )
}

export default Header
