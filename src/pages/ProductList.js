import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="container-fluid py-4"
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <h1 className="text-center mb-4 text-white">Products List</h1>

    
      <div className="d-flex justify-content-center mb-4">
      <CiSearch />

        <input
        
          type="text"
          className="form-control w-50"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            backgroundColor: "#333",
            color: "white",
            border: "1px solid white",
            padding: "10px",
            "::placeholder": { color: "white", opacity: 1 }
          }}
        />
      </div>

      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-6 col-md-4 col-lg-3 mb-4">
              <div
                className="card shadow-sm"
                style={{ backgroundColor: "#333", color: "white", cursor: "pointer" }}
                onClick={() => navigate(`/products/${product.id}`)}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-white">{product.title}</h5>
                  <p className="text-white">${product.price}</p>
                  <p className="text-warning">⭐ {product.rating} / 5</p>
                  <p
                    className="text-white"
                    style={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-center w-100">No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
