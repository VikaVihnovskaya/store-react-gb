import './style/style.scss'
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import CatalogPage from "./components/CatalogPage/CatalogPage";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import CartPage from "./components/Cart/CartPage";

function ProductPage() {
  return null;
}

function App() {
  return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/cartPage" element={<CartPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}
export default App;
