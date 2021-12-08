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
    setInitialPrice,
    isCart,
    setCart
  } = props

  const [isColorCode, setColorCode] = useState()
  const [isColor, setColor] = useState('Jet_Black-(1)')
  const [isLength, setLength] = useState('length_18');
  const [isQty, setQty] = useState(1)
  const [isPrice, setPrice] = useState();
  const [isDesModal, setDesModal] = useState(true);
  const [isColoursModal, setColoursModal] = useState(false);
  const [isLengthModal, setLengthModal] = useState(false);
  const [isCustModal, setCustModal] = useState(false);
  const categoryURL = window.location.href.split('/products/')
  const category = categoryURL[1]

  const lengths = [
    {
      name: 'length_18',
      length: '18"'
    },
    {
      name: 'length_20',
      length: '20"'
    },
    {
      name: 'length_22',
      length: '22"'
    },
    {
      name: 'length_24',
      length: '24"'
    },
    {
      name: 'length_26',
      length: '26"'
    }
  ]

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
    let removeUnderScore = name.replaceAll("_", " ");
    let removeHyphen = removeUnderScore.replace('-', ' ')

    return removeHyphen
  }

  function colorRemoveCode(name) {

    var new_name = '';
    const removeCode = name.split('-').splice(0,1)
    new_name = removeCode[0]

    return new_name
  }

  function sortColor(col) {

    const color = colorRemoveCode(col)

    if (category === 'classic_tape_in') {
      setColorArr(productArr[0][color])
      setPrice(productArr[0][color][isLength]);
    } else if (category === 'invisible_tape_in') {
      setColorArr(productArr[1][color])
      setPrice(productArr[1][color][isLength]);
    } else if (category === 'seamless_tape_in') {
      setColorArr(productArr[2][color])
      setPrice(productArr[2][color][isLength]);
    }

  }

  function updateLengthPrice(len) {

    const color = colorRemoveCode(isColor);

    if (category === 'classic_tape_in') {
      setColorArr(productArr[0][color])
      setPrice(productArr[0][color][len]);
    } else if (category === 'invisible_tape_in') {
      setColorArr(productArr[1][color])
      setPrice(productArr[1][color][len]);
    } else if (category === 'seamless_tape_in') {
      setColorArr(productArr[2][color])
      setPrice(productArr[2][color][len]);
    }
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

  function formatLength(code) {

    const new_length = code.split('_')

    console.log(new_length[1])

    return new_length[1];
  }

  function addCart(amount) {

    var updateCart = [];
    const addToCart = {
      category: category.replaceAll('_', ' ').toUpperCase(),
      price: (isColorArr[isLength] * amount),
      color: colorFullName(isColor),
      quantity: amount,
      length: `${formatLength(isLength)}"`
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
            <div className="product-quantity-button" onClick={() => {addCart(isQty)}}>Add to Cart</div>
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
        <div className="product-image-container">
          <img className="product-image" alt="hair" src={process.env.PUBLIC_URL + `/images/Products/Colors/${isColor.replace('(', '').replace(')', '')}.png`} />
        </div>
        <div className="product-menu-container">
        <div className="product-menu-description-container">
            <div onClick={() => {setLengthModal(false); setCustModal(false); setColoursModal(false); setDesModal(true); }} className="product-menu-description-title">
              <p>DESCRIPTION</p>
              <img alt="downarrow" src={process.env.PUBLIC_URL + `/images/Products/Icons/down-arrow-light.png`} />
            </div>
            {isDesModal === true && (
              <div className="product-menu-modal-contents">
                <ul>
                  <li>100% Premium Quality Remy Human Hair</li>
                  <li>Double drawn</li>
                  <li>Each piece is 2.5g</li>
                  <li>Weight per bundle: 50g</li>
                  <li>20 strips per bundle</li>
                  <li>Can be worn for 6-8 weeks at a time with required maintenance appointments for upkeep</li>
                  <li>Reused for up to 1 to 2 years with good aftercare</li>
                  <li>Hypoallergenic PU tapes</li>
                </ul>
              </div>
            )}
          </div>
          <div className="product-menu-description-container">
            <div onClick={() => {setDesModal(false); setLengthModal(false); setCustModal(false); setColoursModal(true); console.log('colours')}} className="product-menu-description-title">
              <p>COLOURS</p>
              <img alt="downarrow" src={process.env.PUBLIC_URL + `/images/Products/Icons/down-arrow-light.png`} />
            </div>
            {isColoursModal === true && (
              <div className="product-menu-modal-contents">
               {colors.map((col) => (
                    <div className={`product-picture-mini-container ${isColor === col && `colour-active`}`}>
                      <img onClick={() => {setColor(col); sortColor(col)}} className="product-picture-mini" key={col} alt={col} src={process.env.PUBLIC_URL + `/images/Products/Colors/${col.replace('(', '').replace(')', '')}.png`} />
                    </div>
               ))}
              </div>
            )}
          </div>
          <div className="product-menu-description-container">
            <div onClick={() => {setDesModal(false); setColoursModal(false); setCustModal(false); setLengthModal(true)}} className="product-menu-description-title">
              <p>LENGTH (INCH)</p>
              <img alt="downarrow" src={process.env.PUBLIC_URL + `/images/Products/Icons/down-arrow-light.png`} />
            </div>
            {isLengthModal === true && (
              <div className="product-menu-modal-contents">
                {lengths.map((len) => (
                  <div onClick={() => {setLength(len.name); updateLengthPrice(len.name)}} className={`product-length-option ${isLength === len.name && `length-active`}`}>
                    <div>{len.length}</div>
                  </div>
                ))}
                <div className="product-hair-length-title">Visual Hair Length Estimation</div>
                <div className="product-length-picture">
                  <img alt="hair_image" className="product-hair-length-pic" src={process.env.PUBLIC_URL + `/images/Products/Icons/${isLength}.png`} />
                </div>
              </div>
            )}
          </div>
          <div className="product-menu-description-container">
            <div onClick={() => {setDesModal(false); setColoursModal(false); setLengthModal(false); setCustModal(true)}} className="product-menu-description-title">
              <p>CUSTOMIZE</p>
              <img alt="downarrow" src={process.env.PUBLIC_URL + `/images/Products/Icons/down-arrow-light.png`} />
            </div>
            {isCustModal === true && (
              <div className="product-menu-modal-contents">
                <div className="product-customize-contents">
                  <p>We can customize all orders in any weight 9100g and over only), width, length and the colour of the extension you prefer.  If you don't see the extension, ask us and we will amke the custom colour for you.</p>
                  <p>You can reach out to us at</p>
                  <p>
                    <a href="">IG: @nuxe.extensionbar</a><br></br>
                    <a href="mailto: support@nuxehair.com">Email: support@nuxehair.com</a><br></br>
                    or click <u><a href="">here</a></u> to our Contact Page
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;

