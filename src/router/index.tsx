import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "../pages/Index";
import About from "../pages/about";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
