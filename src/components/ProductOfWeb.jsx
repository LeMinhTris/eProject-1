import { Link } from "react-router-dom";

function ProductOfWeb() {
    return (
        <div className="product-of-web">
            <h2 className="header">
                PRODUCTS OF BRONX LUGGAGE
            </h2>
            <div className="container">
                <div className="item-product">
                    <Link to='/Vali'>
                        <img src={`${process.env.PUBLIC_URL}/images/item-of-web1.webp`} alt="vali" />
                        <span className="name">Suitcase</span>
                    </Link>
                </div>
                <div className="item-product">
                    <Link to='/Balo'>
                        <img src={`${process.env.PUBLIC_URL}/images/item-of-web2.webp`} alt="balo" />
                        <span className="name">Backpack</span>
                    </Link>
                </div>
                <div className="item-product">
                    <Link to='/Handbag'>
                        <img src={`${process.env.PUBLIC_URL}/images/item-of-web3.webp`} alt="bag" />
                        <span className="name">Handbag</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductOfWeb;