import React, { useEffect, useState, useRef } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../assets/css/Header.css";
import Brand from "../pages/Brand";
import "../assets/css/Header.css";
import "../assets/css/Login.css";
import Home from "../pages/Home";
import Balo from "../pages/Balo";
import Vali from "../pages/Vali";
import Bag from "../pages/Bag";
import Product from "./Product";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Cart from "../components/Cart";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Search from "./Search";
import AmericanTourister from "../pages/AmericanTourister";
import Samsonite from "../pages/Samsonite";
import Victorinox from "../pages/Victorinox";
import Ace from "../pages/Ace";
import HighSirerra from "../pages/HighSirerra";
import Kamiliant from "../pages/Kamiliant";

function Header() {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    function hanldeSignOut() {
        const getLoggedIn = document.querySelector(".logged-in");
        const lis = document.querySelectorAll(".li");
        lis.forEach((li) => {
            li.classList.add("visibly");
            li.classList.remove("hide");
        });
        getLoggedIn.classList.remove("visibly");
        getLoggedIn.classList.add("hide");
    }
    const [cartCount, setCartCount] = useState(0);
    const menuRef = useRef(null);

    //navbar effect
    useEffect(() => {
    let isNavbarFixed = false;

    const handleScroll = () => {
        const navbar = document.querySelector(".nav");
        const currentScrollY = window.scrollY;

        if (currentScrollY > 400) {
            if (!isNavbarFixed) {
                navbar.classList.add("fixed", "visible");
                isNavbarFixed = true;
            }
        } else {
            if (isNavbarFixed) {
                navbar.classList.remove("visible");
                navbar.addEventListener(
                    "transitionend",
                    () => {
                        if (!navbar.classList.contains("visible")) {
                            navbar.classList.remove("fixed");
                        }
                    },
                    { once: true } 
                );
                isNavbarFixed = false;
            }
        }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = (e) => {
        e.stopPropagation();
        setMenuOpen(!menuOpen);
    };
    const closeMenuOnOutsideClick = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        const handleScrollOrClickOutside = (e) => {
            if (
                menuRef.current &&
                (!menuRef.current.contains(e.target) || e.type === "scroll")
            ) {
                setMenuOpen(false);
            }
        };
    
        if (menuOpen) {
            document.addEventListener("click", handleScrollOrClickOutside);
            document.addEventListener("scroll", handleScrollOrClickOutside);
        } else {
            document.removeEventListener("click", handleScrollOrClickOutside);
            document.removeEventListener("scroll", handleScrollOrClickOutside);
        }
    
        return () => {
            document.removeEventListener("click", handleScrollOrClickOutside);
            document.removeEventListener("scroll", handleScrollOrClickOutside);
        };
    }, [menuOpen]);
    //
    useEffect(() => {
        setCartCount(cart.length);
    }, [cart]);

    return (
        <div>
            <div className="line">
                FREE SHIPPING FOR ORDERS OVER 1,500,000 VND
            </div>

            <nav className="nav">
                <div className="nav__logo">
                    <Link to="/">
                        <img src={`${process.env.PUBLIC_URL}/icon/logo.png`} alt="" />
                    </Link>
                </div>
                <div
                    className={`nav-menu ${menuOpen ? "active" : ""}`}
                    ref={menuRef}
                >
                    <ul className="nav__Product">
                        <li>
                            <Link to="/Brand">BRAND</Link>
                        </li>
                        <li>
                            <Link to="/Vali">SUITCASE</Link>
                        </li>
                        <li>
                            <Link to="/Balo">BACKPACK</Link>
                        </li>
                        <li>
                            <Link to="/Handbag">HANDBAG</Link>
                        </li>
                    </ul>
                    <ul className="nav__Link">
                        <li>
                            <Link to="/Contact">CONTACT</Link>
                        </li>
                        <li>
                            <Link to="/About">ABOUT US</Link>
                        </li>
                        <li className="li">
                            <Link to="/Login">LOGIN</Link>
                        </li>
                        <li className="li">
                            <Link to="/SignUp">SIGN UP</Link>
                        </li>
                    </ul>
                </div>
                <div className="nav-icon">
                    <ul>
                        <li className="logged-in">
                            <ul className="logged-in_info">
                                <li className="logged-in_info_item">
                                    Account Information
                                </li>
                                <li
                                    className="logged-in_info_item"
                                    onClick={hanldeSignOut}
                                >
                                    Sign Out
                                </li>
                            </ul>
                            <div className="user_logged-in_info"></div>
                        </li>
                        <li>
                            <Link to="/Search" className="header-search">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Cart" className="header-cart">
                                <i className="fa-solid fa-cart-shopping"></i>
                                {cartCount > 0 && (
                                    <span className="cart-count">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                        </li>
                        <li>
                            <button className="nav-toggle" onClick={toggleMenu}>
                                ☰
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="discount">
                Enter code <span className="discount-code">HOL10</span> to get
                10% off all products
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Brand" element={<Brand></Brand>} />
                <Route path="/Balo" element={<Balo />} />
                <Route path="/Vali" element={<Vali />} />
                <Route path="/Handbag" element={<Bag />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/About" element={<About />} />
                <Route
                    path="/Product/:id"
                    element={<Product cart={cart} setCart={setCart} />}
                />
                <Route path="/Login" element={<Login />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Search" element={<Search />} />
                <Route
                    path="/Cart"
                    element={<Cart cart={cart} setCart={setCart} />}
                />
                <Route
                    path="/pages/American-Tourister"
                    element={<AmericanTourister />}
                ></Route>
                <Route path="/pages/Samsonite" element={<Samsonite />}></Route>
                <Route
                    path="/pages/Victorinox"
                    element={<Victorinox />}
                ></Route>
                <Route path="/pages/Ace" element={<Ace />}></Route>
                <Route
                    path="/pages/High-Sierra"
                    element={<HighSirerra />}
                ></Route>
                <Route path="/pages/Kamiliant" element={<Kamiliant />}></Route>
            </Routes>
        </div>
    );
}

export default Header;
