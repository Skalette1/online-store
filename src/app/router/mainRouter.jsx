import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ProductPage } from "../../pages/ui/productPage";
import { Home } from "../../pages/ui/Home";
import { FoodPage } from "../../pages/ui/FoodPage";
import { IzbaPage } from "../../pages/ui/IzbaPage";
import { Cart } from "../../pages/model/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: 'mixes',
    element: <ProductPage />
  },
  {
    path: 'food',
    element: <FoodPage />
  },
  {
    path: 'izba',
    element: <IzbaPage />
  },
]);
