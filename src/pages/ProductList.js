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

      {/* Search Bar */}
      <div className="d-flex justify-content-center mb-4 px-3">
        <div
          className="position-relative"
          style={{
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <CiSearch
            size={22}
            color="black"
            className="position-absolute"
            style={{
              top: "50%",
              left: "12px",
              transform: "translateY(-50%)",
            }}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Search for a product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid white",
              padding: "10px 40px",
              borderRadius: "30px",
              width: "100%",
            }}
          />
        </div>
      </div>

      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-6 col-md-4 col-lg-3 mb-4">
              <div
                className="card shadow-sm"
                style={{
                  backgroundColor: "#333",
                  color: "white",
                  cursor: "pointer",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
                onClick={() => navigate(`/products/${product.id}`)}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
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
