import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import "./App.css";
import ShoppingProvider from "./context/shoppingProvider";
import Routes from "./routes";

function App() {
    return (
        <ShoppingProvider>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </ShoppingProvider>
    );
}

export default App;
