import React from "react";
import './body.css'
import ProductImg from "./productImg";
import Description from "./description";

const Body = () =>{
    return(
        <div className={'body container'}>
            <div className={'row'}>
                <div className={'col-md-6 col-sm-12'}>
                    <ProductImg/>
                </div>

                <div className={'col-md-6 col-sm-12'}>
                    <Description/>
                </div>

            </div>
        </div>
    )
}
export default Body
