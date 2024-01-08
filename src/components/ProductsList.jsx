import { useEffect, useState } from "react";
import Product from "./Product";
import Slider from "./Slider";
import "./styleProductList.css";

export default function ProductsList() {
  const api_url = "http://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [productsCategories, setProductsCategories] = useState([]);

  // ---------------------------------------------
  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getProductsByCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setProductsCategories(data));
  };

  const getProductsByNameCategories = (cat) => {
    fetch(`https://fakestoreapi.com/products/category/${cat}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    getProducts();
    getProductsByCategories();
  }, []);

  const [prdFilter, setPrdFilter] = useState([]);

  return (
    <div>
      <Slider />
      <h1 id="ttr">Our Products</h1>

      <>
        <div className="row text-center  ">
          <div className="col-sm-2 ms-4 mb-1 text-center">
            <button
              className="btn btn-outline-danger "
              onClick={() => getProducts()}
            >
              All Products
            </button>
          </div>
          {productsCategories.map((cat, i) => {
            return (
              <div key={i} className="col-sm-2  ms-4 mb-1 text-center">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => getProductsByNameCategories(cat)}
                >
                  {cat}
                </button>
              </div>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "5px 15px",
          }}
        >
          {products.map((product) => {
            return (
              <div key={product.id}>
                <Product product={product} />
              </div>
            );
          })}
        </div>
      </>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {prdFilter.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
