import { createContext } from "react";
import { ShoppingContextType } from "../@types/shopping";

export const ShoppingContext = createContext<ShoppingContextType | null>(null);