import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PagesA } from "../pages/PagesA";
import { PagesB } from "../pages/PagesB";
import { PagesC } from "../pages/PagesC";
import { PagesD } from "../pages/PagesD";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PagesA />} />
        <Route path="/b" element={<PagesB />} />
        <Route path="/c" element={<PagesC />} />
        <Route path="/d" element={<PagesD />} />
        <Route path="/*" element={<PagesA/>} />
      </Routes>
    </BrowserRouter>
  );
};
