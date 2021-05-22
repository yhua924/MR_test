import React, {useState} from 'react';
import './App.css';
import Header from "./components/header";
import Body from "./components/body";
import {CartProduct, shoppingContext} from "./context/shoppingContext";

const App = () => {
    const [cart, setCart] = useState<CartProduct[]>([]);
    return (
        <shoppingContext.Provider value={[cart, setCart]}>
            <Header/>
            <Body/>
        </shoppingContext.Provider>
    );
}

export default App;
