import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductById } from "../services/api";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";
import { IoIosArrowBack } from "react-icons/io";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p className="text-center mt-4 text-white">Loading...</p>;

  return (
    <div
      className="container-fluid py-4"
      style={{ backgroundColor: "black", minHeight: "100vh", width: "100vw" }}
    >
      <div className="container">
        <button
          onClick={() => navigate("/products")}
          className="btn btn-outline-light mb-3"
        >
          <IoIosArrowBack />
        </button>

        <div
          className="card shadow-sm p-4"
          style={{ backgroundColor: "#333", color: "white" }} // Light black card
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="card-img-top rounded"
            style={{ height: "300px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h1 className="card-title text-white">{product.title}</h1>
            <p className="text-muted">${product.price}</p>
            <p className="card-text">{product.description}</p>

            <div className="d-flex align-items-center mt-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="btn btn-outline-light"
              >
                <Minus />
              </button>
              <span className="mx-3">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="btn btn-outline-light"
              >
                <Plus />
              </button>
            </div>

            <button
              onClick={() => toast.success("Added to cart!")}
              className="btn btn-success w-100 mt-3"
            >
              <ShoppingCart className="me-2" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
