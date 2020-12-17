import React from 'react';
import ImageHelper from "./helper/ImageHelper";
import {Redirect} from "react-router-dom";
import { addItemToCart,removeItemFromCart } from './helper/cartHelper';


const isAuthenticated = true;

const Card = ({
    product,
    addtoCart=true,
    removeFromCart=false}) => {

      const cartTitle = product ? product.name:"a Photo";
      const cartDescription = product ? product.description:"default description";
      const cartPrice = product ? product.price:"default";

      const addToCart = () => {
        if(isAuthenticated){
          addItemToCart(product,()=>{})
          console.log("added to cart");
        }
        else{
          console.log("login please!!!!!");
        }
      };

      const getAredirect = redirect => {
        if(redirect){
          return <Redirect to="/cart" />;
        }

      };
      const showAddToCart = () =>{
        return(
          addtoCart && (
            <div className="col-12">
            <button
              onClick={addToCart}
              className="btn btn-block btn-outline-success mt-2 mb-2"
            >
              Add to Cart
            </button>
          </div>
          )
        );
      };

      const showRemoveFromCart = removeFromCart =>{
        return (
          removeFromCart && (
            <div className="col-12">
              <button
                onClick={()=>{
                  removeItemFromCart(product.id);
                  console.log("product removed from cart");
                }}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
              </button>
            </div>
          )
        );
      };

    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cartTitle}</div>
        <div className="card-body">
          <ImageHelper product={product}/>
          <p className="lead bg-success font-weight-normal text-wrap">
            {cartDescription}
          </p>
    <p className="btn btn-success rounded  btn-sm px-4">Rs {cartPrice}</p>
          <div className="row">
          {showAddToCart(addToCart)}
            {showRemoveFromCart(removeFromCart)}
          </div>
        </div>
      </div>
    );
  };

export default Card;
