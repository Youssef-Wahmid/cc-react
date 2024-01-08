import { Route, Routes } from "react-router-dom";
import ProductsList from "./ProductsList";
import About from "./About";
import Navbar from "./Navbar";
import Details from "./Details";
import Contact from "./Contact";
import SearchProduct from "./search/SearchProduct";
export default function Routage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<ProductsList />} />
          <Route path="/search" element={<SearchProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:idProduct" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}
