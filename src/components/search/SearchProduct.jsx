import { useEffect, useState } from "react";
import "./styleSrch.css";
import ProductFiltre from "./ProductFiltre";

export default function SearchProduct() {
  const [srch, setSrch] = useState("");
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((prd) => setProduct(prd));
  }, []);

  const productFiltrer = product.filter((p) => {
    return p.title.includes(srch);
  });
  return (
    <>
      <div className="container my-5">
        <form action="">
          <div classNamelass="mb-3">
            <label htmlFor="inp" className="d-block">
              Title Of Product
            </label>
            <input
              id="inp"
              type="text"
              onChange={(e) => setSrch(e.target.value)}
            />
            <input className="btn btn-outline-info" type="submit" id="srch" />
          </div>
        </form>
      </div>
      <div class="table-responsive container-fluid">
        <table class="table table-hover table-bordered ">
          <thead className="table-success text-center">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Photos</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {productFiltrer.map((p) => {
              return <ProductFiltre prds={p} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
