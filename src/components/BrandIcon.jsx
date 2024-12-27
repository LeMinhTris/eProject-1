function BrandIcon() {
    return ( 
        <div className="brand-icon">
            <h2 className="header">
            World's Leading Brands at Bronx Luggage
            </h2>
            <div className="logo-brand">
                <img src={`${process.env.PUBLIC_URL}/images/brand1.webp`} alt="brand1" />
                <img src={`${process.env.PUBLIC_URL}/images/brand2.webp`} alt="brand2" />
                <img src={`${process.env.PUBLIC_URL}/images/brand3.webp`} alt="brand3" />
                <img src={`${process.env.PUBLIC_URL}/images/brand4.webp`} alt="brand4" />
                <img src={`${process.env.PUBLIC_URL}/images/brand5.webp`} alt="brand5" />
                <img src={`${process.env.PUBLIC_URL}/images/brand6.webp`} alt="brand6" />
                <img src={`${process.env.PUBLIC_URL}/images/brand7.webp`} alt="brand7" />
                <img src={`${process.env.PUBLIC_URL}/images/brand8.webp`} alt="brand8" />
                <img src={`${process.env.PUBLIC_URL}/images/brand9.webp`} alt="brand9" />
                <img src={`${process.env.PUBLIC_URL}/images/brand10.webp`} alt="brand10" />
            </div>
            <div className="img-monopoly">
                <div className="img-momopoly__item">
                    <img src={`${process.env.PUBLIC_URL}/images/brand.png`} alt="brand" />
                </div>
                <div className="img-momopoly__item">
                    <img src={`${process.env.PUBLIC_URL}/images/monopoly.png`} alt="monopoly" />
                </div>
                <div className="img-momopoly__item">
                    <img src={`${process.env.PUBLIC_URL}/images/guarantee.png`} alt="guarantee" />
                </div>
            </div>
        </div>
    );
}

export default BrandIcon;