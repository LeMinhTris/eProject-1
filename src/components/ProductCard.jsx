import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/ProductCard.css";

function ProductCard({ product }) {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    if (!selectedColor) {
        return (
            <div className="not-selectedColor">
                <h2 className="header">{product.name}</h2>
                <p className="text">
                    This product is currently unavailable in any color.
                </p>
            </div>
        );
    }

    return (
        <div
            className="product-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="product-card__img">
                <img
                    src={`${process.env.PUBLIC_URL}${selectedColor.image}`}
                    alt={`${product.name} - ${selectedColor.name}`}
                    onClick={() => navigate(`/Product/${product.id}`)}
                />
                <div className={`sell ${isHovered ? "" : "hidden"}`}>
                    <button
                        onClick={() => navigate(`/Product/${product.id}`)}
                        className="buy__btn"
                    >
                        BUY NOW
                    </button>
                    <button
                        onClick={() => navigate(`/Product/${product.id}`)}
                        className="add-card__btn"
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
            <div className="product-card__info">
                <div className="product-card__colors">
                    {product.colors.map((color, index) => (
                        <div
                            className={`color-item ${
                                selectedColor.id === color.id ? "active" : ""
                            }`}
                            key={color.id}
                            onClick={() => setSelectedColor(color)}
                        >
                            {color.thumbnail ? (
                                <img
                                    className="color-thumbnail"
                                    src={color.thumbnail}
                                    alt={color.name[index]}
                                />
                            ) : (
                                <div
                                    className="color-circle"
                                    style={{ backgroundColor: color.code }}
                                ></div>
                            )}
                        </div>
                    ))}
                </div>
                <p className="product-card__brand">{product.brand}</p>
                <p className="product-card__name">{product.name}</p>
                <div className="product-card__price">
                    <span className="price--new">{product.newPrice}</span>
                    <span className="price--old">{product.oldPrice}</span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
