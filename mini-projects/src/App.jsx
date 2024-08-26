import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmailSubscribeCard from "./components/emailSubscribeCard";
import PricingGrids from "./components/PricingGrids";
import ProductModal from "./components/ProductModal";
import LoginModal from "./components/LoginModal";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<EmailSubscribeCard></EmailSubscribeCard>}
        ></Route>
        <Route
          path="/pricing-grids"
          element={<PricingGrids></PricingGrids>}
        ></Route>
        <Route
          path="/product-modal"
          element={<ProductModal></ProductModal>}
        ></Route>
        <Route path="/login-modal" element={<LoginModal></LoginModal>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
