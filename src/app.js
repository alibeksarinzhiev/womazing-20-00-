import React from 'react';
import  './app.scss'
import {Route,Routes} from "react-router-dom";
import Layout from'./layout/layout'
import Home from "./pages/home/home";
import Brand from "./pages/brand/brand";
import Cart from "./pages/cart/cart";
import Checkout from "./pages/checkout/checkout";
import Contacts from "./pages/contacts/contacts";
import Item from "./pages/item/item";
import Shop from "./pages/shop/shop";
import Success from "./pages/success/success";


const App = () => {
    return(
        <>
            <Routes>
              <Route path={'/'} element={<Layout/>}>
                <Route path={''} element={<Home/>}/>
                <Route path={'brand'} element={<Brand/>}/>
                <Route path={'cart'} element={<Cart/>}/>
                <Route path={'checkout'} element={<Checkout/>}/>
                <Route path={'contacts'} element={<Contacts/>}/>
                <Route path={'item'} element={<Item/>}/>
                <Route path={'shop'} element={<Shop/>}/>
                <Route path={'success'} element={<Success/>}/>
              </Route>
            </Routes>
        </>
    );
};

export default App;
