import '../assets/css/Victorinox.css'
function Victorinox() {
    return ( 
        <div className="victorinox">
            <h2>Victorinox</h2>
            <div className="title_hr"></div>
            <div className="location">FOUR GENERATIONS - ONE BRAND – ONE FAMILY</div>
            <p>Established in 1884, over the years the Victorinox brand has ventured to become a highly regarded brand in the successful history of Switzerland and has remained under the management of the Elsener family.</p>
            <div className="img_slider">
                <img src={`${process.env.PUBLIC_URL}/images/Victorinox.jpg`} alt="" />
            </div>
            <p>Over 130 years of ups and downs, the Victorinox brand has affirmed its value through creativity in products accompanied by the best quality, diverse functionality, and maintaining the brand's design style.</p>
            <p>Today, Victorinox has become a global company focusing on five main product lines: Swiss Army Knives, Professional Knives, Watches, Apparel, Fragrances, and Travel Gear (including: Suitcases, Backpacks, Bags, and Travel Accessories).</p>
            <div className="img_slider">
                <img src={`${process.env.PUBLIC_URL}/images/Victorinox02.jpg`} alt="" />
            </div>
            <div className="hdevelopment_history">
                <h2>HISTORY OF FORMATION AND DEVELOPMENT</h2>
                <div className="img_slider">

                </div>
                <p>1884: Karl Elsener I opened a knife workshop in Ibach-Schwyz with support from Ms. Victoria (Karl Elsener I's mother).</p>
                <p>1891: Through effort and diligence in work, Karl Elsener I's professional army knives were used by Swiss soldiers.</p>
                <p>1897: Karl Elsener I's products were patented, and today Swiss Army professional knives are known worldwide.</p>
                <div className="img_slider">
                    <img src={`${process.env.PUBLIC_URL}/images/Victorinox04.jpg`} alt="" />
                </div>
            </div>
        </div>
     );
}

export default Victorinox;
