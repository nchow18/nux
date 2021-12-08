import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Nuxe from './pages/Nuxe';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TopDisplay from './components/TopDisplay/TopDisplay';
import Products from './pages/Products';
import Product from './pages/Product';
import Axios from 'axios';
import './App.css';
import './css/standard.css';

function App() {

  const [productArr, setProductArr] = useState([])
  const [isCategory, setCategory] = useState()
  const [isClassicColor, setClassicColor] = useState()
  const [isInvisibleColor, setInvisibleColor] = useState();
  const [isSeamlessColor, setSeamlessColor] = useState();
  const [catArr, setCatArr] = useState([])
  const [isCart, setCart] = useState([])
  const [isInitialPrice, setInitialPrice] = useState()
  const categoryURL = window.location.href.split('/products/')
  const category = categoryURL[1]
  const categories = [
    'Classic_Tape-In',
    'Invisible_Tape-In',
    'Seamless_Tape-In'
  ]

  useEffect(() => {

    Axios.get(`http://localhost:3001/api/products`).then((data) => {parseProductArr(data.data)})

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

  },[])
  
  const colors = 
    [
      "Jet_Black-(1)","Natural_Black-(1B)","Darkest_Brown-(2)","Chocolate_Brown-(4)","Chestnut_Brown-(6)","Medium_Brown-(8)","Ash_Blonde-(18)","Light_Ash_Blonde-(22)","Honey_Blonde-(27)","Medium_Auburn-(30)","Dark_Auburn-(33)","Platinum_Blonde-(60)","Bleach_Blonde-(613)","Plum_Red-(530)","Dark_Wine-(99J)","Smokey_Grey-(SG)"
    ];

  // parse product array
  function parseProductArr(data) {

    for (var i = 0; i < data.length; i++) {
      const arr = data[i]
      arr.colors = colors;
      arr.Jet_Black = JSON.parse(arr.Jet_Black);
      arr.Natural_Black = JSON.parse(arr.Natural_Black);
      arr.Darkest_Brown = JSON.parse(arr.Darkest_Brown);
      arr.Chocolate_Brown = JSON.parse(arr.Chocolate_Brown);
      arr.Chestnut_Brown = JSON.parse(arr.Chestnut_Brown);
      arr.Medium_Brown = JSON.parse(arr.Medium_Brown);
      arr.Ash_Blonde = JSON.parse(arr.Ash_Blonde);
      arr.Light_Ash_Blonde = JSON.parse(arr.Light_Ash_Blonde);
      arr.Honey_Blonde = JSON.parse(arr.Honey_Blonde);
      arr.Medium_Auburn = JSON.parse(arr.Medium_Auburn);
      arr.Dark_Auburn = JSON.parse(arr.Dark_Auburn);
      arr.Platinum_Blonde = JSON.parse(arr.Platinum_Blonde);
      arr.Bleach_Blonde = JSON.parse(arr.Bleach_Blonde);
      arr.Plum_Red = JSON.parse(arr.Plum_Red);
      arr.Dark_Wine = JSON.parse(arr.Dark_Wine);
      arr.Smokey_Grey = JSON.parse(arr.Smokey_Grey);
    }

    const setData = data || {};
    setProductArr(setData);
    setClassicColor(setData[0].Jet_Black)
    setInvisibleColor((setData[1].Jet_Black))
    setSeamlessColor(setData[2].Jet_Black)

    if (category === 'classic_tape_in') {
      setCategory('classic_tape_in')
      setInitialPrice(setData[0].Jet_Black.length_18)
    } else if (category === 'invisible_tape_in') {
      setCategory('invisible_tape_in')
      setInitialPrice(setData[1].Jet_Black.length_18)
    } else if (category === 'seamless_tape_in') {
      setCategory('seamless_tape_in')
      setInitialPrice(setData[2].Jet_Black.length_18)
    } 
  }

  return (
        <Router>
            <div className="display-flex-column nuxe-colour page-font">
              <TopDisplay />
              <Header 
              />
              <Switch>
                <Route 
                  exact path='/' 
                  render={() => <Nuxe 
                  />}
                  />
                <Route exact path='/products' render={() => <Products
                  productArr={productArr}
                  setProductArr={setProductArr}
                  isCategory={isCategory}
                  setCategory={setCategory}
                  categories={categories}
                  setInitialPrice={setInitialPrice}
                  isInitialPrice={isInitialPrice}
                   />} />
                <Route exact path={`/products/classic_tape_in`} render={() => <Product
                  isCategory={isCategory}
                  setCategory={setCategory}
                  colors={colors}
                  isColorArr={isClassicColor}
                  setColorArr={setClassicColor}
                  isInitialPrice={isInitialPrice}
                  productArr={productArr}
                  isCart={isCart}
                  setCart={setCart} />} />
                <Route exact path={`/products/invisible_tape_in`} render={() => <Product
                  isCategory={isCategory}
                  setCategory={setCategory}
                  colors={colors}
                  isColorArr={isInvisibleColor}
                  setColorArr={setInvisibleColor}
                  isInitialPrice={isInitialPrice}
                  productArr={productArr}
                  isCart={isCart}
                  setCart={setCart} />} />                   
                <Route exact path={`/products/seamless_tape_in`} render={() => <Product
                  isCategory={isCategory}
                  setCategory={setCategory}
                  colors={colors}
                  isColorArr={isSeamlessColor}
                  setColorArr={setSeamlessColor}
                  isInitialPrice={isInitialPrice}
                  productArr={productArr}
                  isCart={isCart}
                  setCart={setCart} /> } />
                                                       
                <Route component={NoMatch} />
              </Switch>
              <Footer 
              />
            </div>
        </Router>
    );
}
export default App;
