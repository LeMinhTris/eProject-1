import "../assets/css/Brand.css";
import { Link, } from "react-router-dom";
import { brands } from "../api/brand-list";


function Brand() {
  return (
    <div>
      <div className="wrap_present">
        <div className="Present">
          <div className="Comback">
            <Link to='/'>Home</Link>
          </div>
          <div className="Persent__page">Brands</div>
        </div>

      </div>
      <div className="gallery">
        {brands.map((brand) => (
          <div key={brand.id} className="gallery-item">
            <img
              src={`${process.env.PUBLIC_URL}${brand.background}`}
              alt={`Background of ${brand.name}`}
              className="gallery-image"
            />
            <img
              src={`${process.env.PUBLIC_URL}${brand.name}`}
              alt={`Logo of ${brand.name}`}
              className="brand-name"
            />
            <div className="overlay">
              <Link to={brand.about}>
                <button className="cta-button">SEE MORE</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
       
    </div>
  );
}

export default Brand;
