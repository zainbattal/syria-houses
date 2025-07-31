import React from "react";

function Product({ disc, date, city, postDate }) {
  return (
    <>
      <div className="product">
        <img src={img} alt="" className="product-img" />
        <div className="info">
          <h4 className="product-disc">{disc}</h4>
          <h5 className="product-price">{price}sp</h5>
        </div>
      </div>
    </>
  );
}
export default Product;
