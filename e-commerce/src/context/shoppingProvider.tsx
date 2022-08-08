import React, { useState } from "react";
import { ProductState } from "../@types/shopping";
import { ShoppingContext } from "./shoppingContext";

const initialState: ProductState = {
    loading: false,
    products: [],
};

const ShoppingProvider: React.FC<Props> = ({ children }) => {
    const [productState, setProductState] = useState<ProductState>(initialState);

    const getProducts = () => {
        setProductState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }));
    };

    return (
        <ShoppingContext.Provider
            value={{
                productState: productState,
                getProducts: getProducts,
            }}
        >
            {children}
        </ShoppingContext.Provider>
    );
};

export default ShoppingProvider;
