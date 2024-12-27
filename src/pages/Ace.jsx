import "../assets/css/Ace.css";

function Ace() {
    return (
        <div className="ace">
            <div className="intro">
                <div className="intro-item">
                    <div className="video">
                        <iframe
                            width="615"
                            height="415"
                            src="https://www.youtube.com/embed/eszmq10Z_T8"
                            title="ace. TV commercial (Eng. Version_30 seconds)"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>

                    </div>
                </div>
                <div className="intro-item">
                    <div className="title">
                        <img src={`${process.env.PUBLIC_URL}/images/ace-logo.webp`} alt="Ace" />
                        <p>
                            Endless inspiration from the essence of Japanese
                            culture
                        </p>
                    </div>
                    <div className="body">
                        <div className="row">
                            <img src={`${process.env.PUBLIC_URL}/images/ace01.webp`} alt="" />
                            <img src={`${process.env.PUBLIC_URL}/images/ace02.jpg`} alt="" />
                            <img src={`${process.env.PUBLIC_URL}/images/ace03.jpg`} alt="" />
                        </div>
                        <div className="row">
                            <img src={`${process.env.PUBLIC_URL}/images/ace04.webp`} alt="" />
                            <img src={`${process.env.PUBLIC_URL}/images/ace05.jpg`} alt="" />
                            <img src={`${process.env.PUBLIC_URL}/images/ace06.webp`} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="content">
                <p className="paragraph">
                    Originating from the desire to bring an "ideal companion" to
                    make every journey and every move more comfortable, this
                    concept is realized through each collection of suitcases,
                    backpacks, and bags by Ace. It's not just about
                    functionality but also emotional value, aesthetics, and the
                    spirit of Japan.
                </p>
                <p className="paragraph">
                    The sophistication in each design by Ace. always exudes an
                    astonishing aura, clearly reflecting the cultural essence of
                    the Land of the Rising Sun.
                </p>
            </div>
            <div className="info-1">
                <div className="content">
                    <div className="info-1-item">
                        <h2 className="title">
                            Perfect contours, striking designs
                        </h2>
                        <div className="body">
                            <p>
                                Like the country and people of Japan, the Ace.
                                brand always aspires to perfection in every
                                detail. Every collection of suitcases,
                                backpacks, and bags is born from the concept of
                                "Perfect contours, striking designs," blending
                                the values of science with traditional artistry.
                            </p>
                            <p>
                                For Ace., designing a suitcase, backpack, or bag
                                is akin to crafting a piece of jewelry—it
                                demands sophistication, meticulous attention to
                                detail, and a harmonious balance of various
                                elements.
                            </p>
                            <p>
                                Proud to deliver unique designs and top-notch
                                quality, Ace. products are able to win over
                                customers worldwide.
                            </p>
                        </div>
                    </div>
                    <div className="info-1-item">
                        <img src={`${process.env.PUBLIC_URL}/images/info-1-img.webp`} alt="" />
                    </div>
                </div>
            </div>
            <div className="info-2">
                <div className="content">
                    <img src={`${process.env.PUBLIC_URL}/images/ace08.jpg`} alt="" />
                    <img src={`${process.env.PUBLIC_URL}/images/ace09.webp`} alt="" />
                </div>
            </div>
            <div className="info-3">
                <div className="content">
                    <div className="info-3-item">
                        <img src={`${process.env.PUBLIC_URL}/images/ace10.webp`} alt="" />
                    </div>
                    <div className="info-3-item">
                        <h2 className="title">
                            Ace. (Ace dot) - Connecting the past, present, and
                            future
                        </h2>
                        <div className="body">
                            <p>
                                With a mission to deliver flawless products that
                                make traveling more comfortable, Ace. is rooted
                                in core values of craftsmanship, meticulous
                                attention to detail, creative mastery, and
                                precision engineering.
                            </p>
                            <p>
                                Each product of ace. is created based on
                                technical foundations and expertise that have
                                been built and accumulated over nearly 100
                                years, combining aesthetic elements and
                                practical consumer needs to craft perfect
                                designs.
                            </p>

                            <img src={`${process.env.PUBLIC_URL}/images/ace11.webp`} alt="" />
                            <p>
                                The distinctive dot (.) at the end of the brand
                                name symbolizes that spirit; it represents how
                                ace. moves from the past to the present, from
                                one place to another, connecting people and
                                creating a unique path that bridges the past,
                                present, and future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="info-4">
                <div className="content">
                    <h2 className="title">
                        ace. | Renowned brand of luggage, backpacks, and bags
                        under ACE Corporation
                    </h2>

                    <p>
                        Starting from retail bag stores named Shinkawaryu in
                        Osaka, Japan, after nearly 80 years of establishment and
                        development, ACE has become one of the world's leading
                        corporations in manufacturing and distributing luggage,
                        backpacks, bags, rolling cases, and travel accessories.
                    </p>
                    <p>
                        Continuously innovating and growing, ACE has steadily
                        risen to affirm its position, becoming a globally
                        recognized corporation with ownership of four renowned
                        brands, among which ace. stands out as a prominent
                        brand.
                    </p>
                    <p>
                        For more information, please visit the websites:
                        www.ace-dot.com or www.acejpn.com
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Ace;
