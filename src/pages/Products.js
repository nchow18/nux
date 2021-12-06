import React, { useState, useEffect } from 'react';
import Data from '../services/service';
import Axios from 'axios';

function Products() {

  const [isData, setData] = useState([])

  const url = window.location.href.replace('0/products','1')

  useEffect(() => {
    Axios.get(`${url}/api/products`).then((data) => {setData(data.data)
    })
  },[])

  console.log(isData[0]);

  console.log(window.location.href.replace('products',''))

  return (
    <>
      Products
    </>
  )
}

export default Products;