import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

function Products(props) {

  const {
    setCategory,
    categories
  } = props

  function adjustCategoryName(name) {
    const new_name = name.replace('_Tape-In', ' ')
    return new_name;
  }

  return (
    <div className="products-container">
      <div className="products-title-container">
        <div className="products-title-name">Tape In Extensions</div>
        <div className="product-title-bar"></div>
      </div>
      <div className="category-container">
        {categories.map((cat) => (
          <NavLink style={{ textDecoration: 'none'}} key={cat} onClick={() => {setCategory((cat.replace('-','_').toLowerCase()))}} to={`/products/${cat.replace('-','_').toLowerCase()}`}>
            <div className="category-column">
              <img alt="category" src={process.env.PUBLIC_URL + `/images/Products/${cat}.png`} />
              <div className="category-block"></div>
              <div className="category-name">{adjustCategoryName(cat)}</div>
            </div>
          </NavLink>
        ))}
      </div>

    </div>
  )
}

export default Products;