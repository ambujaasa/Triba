import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapComponent from "./Components/Map";
import AddProduct from "./Components/Map/AddProduct";
import EditProduct from "./Components/Map/EditProduct";
import ProductInfo from "./Components/Map/ProductInfo";

function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Routes>
          <Route index element={<MapComponent />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/editproduct" element={<EditProduct />} />
          <Route path="/productinfo" element={<ProductInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
