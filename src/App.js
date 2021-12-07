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
  const [catArr, setCatArr] = useState([])
  const categories = [
    'Classic_Tape-In',
    'Invisible_Tape-In',
    'Seamless_Tape-In'
  ]

  useEffect(() => {

    Axios.get(`http://localhost:3001/api/products`).then((data) => {parseProductArr(data.data)})

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
    setProductArr(data);
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
                  categories={categories} />} />
                <Route exact path={`/products/classic_tape_in`} render={() => <Product
                  isCategory={isCategory}
                  setCategory={setCategory}
                  colors={colors}
                  productArr={productArr[0]}
                  setCatArr={setCatArr}
                  catArr={catArr} />} />
                <Route exact path={`/products/seamless_tape_in`} render={() => <Product
                  isCategory={isCategory}
                  setCategory={setCategory}
                  colors={colors}
                  productArr={productArr[1]}
                  setCatArr={setCatArr}
                  catArr={catArr} />} />  
                <Route exact path={`/products/invisible_tape_in`} render={() => <Product
                  isCategory={isCategory}
                  setCategory={setCategory}
                  colors={colors}
                  productArr={productArr[2]}
                  setCatArr={setCatArr}
                  catArr={catArr} />} />                                                        
                <Route component={NoMatch} />
              </Switch>
              <Footer 
              />
            </div>
        </Router>
    );
}
export default App;
