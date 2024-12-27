import React from 'react';
import products from '../api/products';
import ProductCard from './ProductCard';

function ProductBestSeller() {
    const displayedProduct = products.filter((product) => product.isBestSeller);
    
    return ( 
        <div className="best-seller">
            <h2 className="title">
                <img src={`${process.env.PUBLIC_URL}/images/top-prod-week.webp`} alt="" />
            </h2>
            <div className="container">
                {displayedProduct.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
}

export default ProductBestSeller;