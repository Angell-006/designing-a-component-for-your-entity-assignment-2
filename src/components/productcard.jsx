// write product card here
import React from "react";
import Button from "./button";

const ProductCard=()=>{
    const productImg="https://images-cdn.ubuy.co.in/633ff0d45170346bcf2e3c2e-edelweiss-skincare-fridge-mini-makeup.jpg";
    const productName="Mini Fridge";
    const productPrice="$450.09";

    return (
        <div className="product-card">
            <img src={productImg} alt={productName} className="product-image"></img>
            <h3 className="product-image">{productName}</h3>
            <p className="product-price">{productPrice}</p>
            <Button/>
        </div>
    );
};

export default ProductCard;