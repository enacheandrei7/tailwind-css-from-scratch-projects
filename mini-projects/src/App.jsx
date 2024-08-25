import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmailSubscribeCard from "./components/EmailSubscribeCard";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<EmailSubscribeCard></EmailSubscribeCard>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
