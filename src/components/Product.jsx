import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../api/products";
import "../assets/css/Product.css";

function Product({ cart, setCart }) {
    const { id } = useParams();
    const product = products.find((pro) => pro.id === parseInt(id));

    const { details } = product; // details = product.details

    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [counter, setCounter] = useState(1);

    if (!selectedColor) {
        return (
            <div className="not-selectedColor">
                <h2 className="header">{product.name}</h2>
                <p className="text">This product is currently not available in any color.</p>
            </div>
        );
    }

    const handleAddToCart = () => {
        const newItem = {
            id: product.id,
            image: selectedColor.image,
            name: product.name,
            quantity: counter,
            price: product.newPrice,
        };

        setCart((prevCart) => {
            // Lấy dữ liệu giỏ hàng từ localStorage nếu có
            const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
            const existingItemIndex = savedCart.findIndex(
                (item) => item.id === product.id && item.name === product.name
            );

            let updatedCart;
            if (existingItemIndex >= 0) {
                // Nếu sản phẩm đã tồn tại trong giỏ, cập nhật số lượng
                updatedCart = [...savedCart];
                updatedCart[existingItemIndex].quantity += counter;
            } else {
                // Nếu sản phẩm chưa có trong giỏ, thêm mới
                updatedCart = [...savedCart, newItem];
            }

            // Lưu lại vào localStorage
            localStorage.setItem("cart", JSON.stringify(updatedCart));

            alert("Add Product Successfully!");
            return updatedCart;
        });
    };

    return (
        <div className="container-product1">
            <div className="overplay">
                <nav className="navigate">
                    <div>
                        <Link to="/">Home</Link> / {product.category} /{" "}
                        <span>{product.name}</span>
                    </div>
                </nav>
            </div>
            <div className="info-details">
                <div className="col-1">
                    <div className="product__img">
                        <img
                            src={`${process.env.PUBLIC_URL}${selectedColor.image}`}
                            alt={`${product.name} - ${selectedColor.name}`}
                        />
                        <img
                            className="reverse"
                            src={`${process.env.PUBLIC_URL}${selectedColor.image}`}
                            alt={`${product.name} - ${selectedColor.name}`}
                        />
                    </div>
                </div>
                <div className="col-2">
                    <div className="product__info">
                        <p className="product__brand">{product.brand}</p>
                        <h2 className="product__name">{product.name}</h2>
                        <div className="product__price">
                            <span className="new-price">
                                {product.newPrice}
                            </span>
                            <span className="old-price">
                                {product.oldPrice}
                            </span>
                        </div>
                        <div className="label-color">Select color:</div>
                        <div className="product__colors">
                            {product.colors.map((color, index) => (
                                <div
                                    className={`color-items ${
                                        selectedColor.id === color.id
                                            ? "active"
                                            : ""
                                    }`}
                                    key={index}
                                    onClick={() => setSelectedColor(color)}
                                >
                                    {color.thumbnail ? (
                                        <img
                                            className="colors-thumbnail"
                                            src={`${process.env.PUBLIC_URL}${color.thumbnail}`}
                                            alt={color.name[index]}
                                        />
                                    ) : (
                                        <div
                                            className="colors-circle"
                                            style={{ background: color.code }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="quantity">
                            <p className="numbers">Quantity:</p>
                            <div className="controls">
                                <button
                                    className="decrease"
                                    onClick={() =>
                                        setCounter((prevCount) =>
                                            prevCount > 1
                                                ? prevCount - 1
                                                : prevCount
                                        )
                                    }
                                >
                                    -
                                </button>
                                <input
                                    className="var-count"
                                    type="text"
                                    value={counter}
                                    readOnly
                                />
                                <button
                                    className="increase"
                                    onClick={() =>
                                        setCounter((prevCount) => prevCount + 1)
                                    }
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="add-cart">
                            <button onClick={handleAddToCart}>
                                ADD TO CART
                            </button>
                        </div>
                        <div className="info-store">
                            <div className="item">
                                <img src={`${process.env.PUBLIC_URL}/images/bh.webp`} alt="bh" />
                                <p>Nationwide warranty</p>
                            </div>
                            <div className="item">
                                <img src={`${process.env.PUBLIC_URL}/images/ck.webp`} alt="ck" />
                                <p>Genuine commitment</p>
                            </div>
                            <div className="item">
                                <img src={`${process.env.PUBLIC_URL}/images/td.webp`} alt="td" />
                                <p>Free customer care hotline</p>
                            </div>
                            <div className="item">
                                <img src={`${process.env.PUBLIC_URL}/images/store.webp`} alt="store" />
                                <p>
                                    Warranty at more than 100 stores nationwide
                                </p>
                            </div>
                        </div>
                        {details.features && details.features.length > 0 ? (
                            <div className="feature">
                                <h2 className="header">
                                    Features of {product.name}
                                </h2>
                                <ul>
                                    {details.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            ""
                        )}
                        {details.desc && details.desc.length > 0 ? (
                            <div className="desc">
                                <h2 className="header">Product Description</h2>
                                {details.desc.map((des, index) => (
                                    <p key={index}>{des}</p>
                                ))}
                            </div>
                        ) : (
                            ""
                        )}
                        {details.paramters && details.paramters.length > 0 ? (
                            <div className="paramter">
                                <h2 className="header">Specifications</h2>
                                <ul>
                                    {details.paramters.map((param, index) => (
                                        <li key={index}>
                                            <label>
                                                {Object.keys(param)} :{" "}
                                            </label>
                                            <span>{Object.values(param)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
