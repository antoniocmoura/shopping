export interface ProductState {
    loading: boolean;
    products: Product;
}

export type ShoppingContextType = {
    productState: ProductState;
    getProducts: () => void;
};