import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Product(props) {

  const {
    isCategory,
    setCategory,
    productArr,
    colors,
    isColorArr,
    setColorArr,
    isInitialPrice,
    isCart,
    setCart
  } = props

  const [isColorCode, setColorCode] = useState()
  const [isColor, setColor] = useState('Jet_Black-(1)')
  const [isLength, setLength] = useState('length_18');
  const [isQty, setQty] = useState(1)
  const [isPrice, setPrice] = useState(isInitialPrice);
  const categoryURL = window.location.href.split('/products/')
  const category = categoryURL[1]

  useEffect(() => {

    setCat()

    function setCat() {
      if (category === 'classic_tape_in') {
        setCategory('classic_tape_in') 
      } else if (category === 'invisible_tape_in') {
        setCategory('invisible_tape_in')
      } else if (category === 'seamless_tape_in') {
        setCategory('seamless_tape_in')
      }
    }

    setPrice(isInitialPrice);

  },[isInitialPrice])

  function colorFullName(name) {
    let removeUnderScore = name.replace("_", " ");
    let removeHyphen = removeUnderScore.replace('-', ' ')

    return removeHyphen
  }

  function colorRemoveCode(name) {

    var new_name = '';
    const removeCode = name.split('-').splice(0,1)
    new_name = removeCode[0]

    return new_name
  }

  function sortColor() {

    const color = colorRemoveCode(isColor);
    setColorCode(color);
    const chosenColor = productArr[color];

    setPrice(chosenColor.length_18);

    return chosenColor;
  }

  function updateLengthPrice() {

  }

  function addQty() {

    if (isQty >= 1) {
      setQty(isQty + 1)
      setPrice(isColorArr[isLength] * (isQty + 1))
    }

  }

  function minusQty() {
    if (isQty !== 1) {
      setQty(isQty - 1)
      setPrice(isColorArr[isLength] * (isQty - 1))
    }
  }

  function addCart(amount) {

    var updateCart = [];
    const addToCart = {
      category: category.replaceAll('_', ' ').toUpperCase(),
      price: (isColorArr[isLength] * amount),
      color: colorFullName(isColor),
      quantity: amount
    }

    updateCart = [...isCart, addToCart]

    setCart(updateCart)
  }

  console.log(isCart);

  return (
    <div className="product-container">
      <div className="product-route">/ <NavLink className="product-navlink" to='/products' style={{ textDecoration: 'none'}} >PRODUCTS </NavLink> / {category.replaceAll('_', ' ').toUpperCase()}</div>
      <div className="product-content">
        <div className="product-left">
          <p className="product-category-title">{category.replaceAll('_', ' ').toUpperCase()}</p>
          <p className="product-color-title">{colorFullName(isColor)}</p>
          <div className="product-price-container">
            <p className="product-price-ca">CA</p>
            <p className="product-price-total">${isPrice}</p>
            <p className="product-price-weight">per 50g</p>
          </div>
          <div className="product-quantity-container">
            <div className="product-quantity-content">
              <div onClick={() => {minusQty()}}>-</div>
              <div>{isQty}</div>
              <div onClick={() => {(addQty())}}>+</div>
            </div>
            <div className="product-quantity-button">Add to Cart</div>
          </div>
          <div className="product-or">or</div>
          <div className="product-left-bottom-container">
            <div className="product-price-weight letter-spacing-1px">RECOMMENDED AMOUNT</div>
            <div className="product-default-options">
              <div className="product-option-1">
                <p>THIN HAIR: </p>
                <div onClick={() => {addCart(3)}}>Add 3 packs to cart</div>
              </div>
              <div className="product-option-1">
                <p>MEDIUM HAIR: </p>
                <div onClick={() => {addCart(4)}}>Add 4 packs to cart</div>
              </div>
              <div className="product-option-1">
                <p>THICK HAIR: </p>
                <div onClick={() => {addCart(5)}}>Add 5 packs to cart</div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-image">IMAGE</div>
        <div className="product-menu">MENU</div>
      </div>
    </div>
  )
}

export default Product;