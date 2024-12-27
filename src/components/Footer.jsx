import React from "react";
import "../assets/css/Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Column 1 */}
                <div className="footer-column column1">
                    <img
                        src={`${process.env.PUBLIC_URL}/icon/logo.png`}
                        alt="House of Luggage"
                        className="footer-logo"
                    />
                    <p className="color_footer">
                        With the goal of providing products from internationally renowned luggage brands,
                        offering high-class and quality products at the most reasonable prices for Vietnamese people.
                        Products at House Of Luggage are all genuine, exclusively distributed, and internationally warranted
                        (up to 10 years - or lifetime). They cater to various customer segments, offering diverse designs and colors for your selection.{" "}
                        <a href="https://hol.com.vn" target="_blank" rel="noopener noreferrer">
                            hol.com.vn
                        </a>.
                    </p>
                    <img
                        src={`${process.env.PUBLIC_URL}/icon/boCongThuong.jpg`}
                        alt="Certified by the Ministry of Industry and Trade"
                        className="footer-verified"
                    />
                </div>

                {/* Column 2 */}
                <div className="footer-column column2">
                    <h4>CONTACT INFORMATION</h4>
                    <p>
                        <span style={{ fontWeight: "700" }}>GLOBAL BAGS & LUGGAGE COMPANY LIMITED</span>
                    </p>
                    <ul className="formatted-list color_footer">
                        <li className="formatted-list-item">Address: L17-11, 17th Floor, Vincom Center Building, 72 Le Thanh Ton, District 1, HCMC</li>
                        <li className="formatted-list-item">Phone: 028.3934.5036 - 1800.6063</li>
                        <li className="formatted-list-item">Business Registration Certificate: 0314741857</li>
                        <li className="formatted-list-item">Issuing Authority: Business Registration Office - Department of Planning and Investment of HCMC</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="footer-column column3">
                    <h4 className="caption_footer">FOLLOW US</h4>
                    <div className="footer-social">
                        <a className="link_facebook" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="icon_facebook fab fa-facebook"></i>
                        </a>
                        <a className="link_youtube" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <i className="icon_youtube fa-brands fa-youtube"></i>
                        </a>
                    </div>
                    <h4 className="caption_footer">HOTLINE</h4>
                    <div className="hotline_wrap color_footer">
                        <p className="hotline_item margin-top-20 margin-bottom-20">
                            <i className="fa-solid fa-phone"></i> 1800 6063
                        </p>
                        <strong className="caption_footer">WARRANTY</strong>
                        <p className="margin-top-20 margin-bottom-20 hotline_item">
                            <i className="fa-solid fa-phone"></i> 1800 6063 (press 3)
                        </p>
                        <strong className="caption_footer">B2B (WHOLESALE):</strong>
                        <div className="margin-top-20 margin-bottom-20">
                            <p className="hotline_item"><i className="fa-solid fa-envelope"></i> b2b@global-luggage.com.vn</p>
                            <p className="hotline_item"><i className="fa-solid fa-phone"></i> Northern Region: 0909 559 719</p>
                            <p className="hotline_item"><i className="fa-solid fa-phone"></i> Central Region: 0909 880 710</p>
                            <p className="hotline_item"><i className="fa-solid fa-phone"></i> Southern Region: 0938 917 108</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2024Hol.com.vn</p>
            </div>
        </footer>
    );
};

export default Footer;
