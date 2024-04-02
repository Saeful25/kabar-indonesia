import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Popular from "./pages/news/Popular.js";
import Politik from "./pages/news/Politik.js";
import Detail from "./pages/news/Detail.js";

function App() {
  return (
    <div className="container">
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/politik" element={<Politik />} />
          <Route path="/detail/:title" element={<Detail />} />
        </Routes>
        <Footer nama="Saefulloh"/>
      </BrowserRouter>
    </div>
  );
}

export default App;
