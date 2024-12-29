import "../assets/css/AmericanTourister.css";

function AmericanTourister() {
  return (
    <div className="AmericanTourister">
      <div className="container">
        <div className="slider">
          <img src={`${process.env.PUBLIC_URL}/images/Slider-american-tourister-01.jpg`} alt="" />
        </div>
        <h1 className="title">American Tourister</h1>
        <div className="line-title"></div>
        <div className="brand-info">
          THE AMERICAN BRAND ROLLING SUITCASE FOR 1 DOLLAR
        </div>

        <div className="content">
          <p>
            The story began in 1933 when Sol Koffler decided to invest his entire
            savings to start a <strong>luggage</strong> company in Providence,
            Rhode Island, USA. His dream was
            <strong>
              <em>"A suitcase that could be sold for 1 USD."</em>
            </strong>
          </p>
          <h4>AMERICAN TOURISTER ROLLING SUITCASES & THE JOURNEY SO FAR</h4>
          <div className="content__row">
            <div className="row__text">
              <p>
                - In 1945, as air travel began to flourish, the demand for
                lighter luggage suitable for air travel grew. American Tourister
                quickly introduced a lighter carry-on case, easier to pack, marking
                the start of responding quickly and effectively to travelers'
                needs.
              </p>
              <p>
                - In the 1950s, the company collaborated with material testing
                facilities to create the world's first hard-shell suitcase.
              </p>
              <p>
                - In the 1960s, with the rise of international travel, American
                Tourister became the first company to provide bags for airline
                crews during major airline test flights.
              </p>
              <p>
                - In the 1980s and 1990s, the fabric luggage line was launched,
                featuring multiple functions to meet contemporary needs. At the
                same time, the durability of the plastic suitcase was proven with
                the iconic image of a Gorilla stepping on it. These advancements
                exceeded market expectations and convinced even the toughest
                critics.
              </p>
              <p>
                - In 1993, American Tourister officially joined the Samsonite
                family, inheriting the finest technologies and innovations.
                Together with Samsonite, they perfected a shared vision of
                providing optimal convenience for travelers.
              </p>
            </div>
            <div className="row__img">
              <img src={`${process.env.PUBLIC_URL}/images/img-american-tourister-01.webp`} alt="" />
              <img src={`${process.env.PUBLIC_URL}/images/img-american-tourister-02.jpg`} alt="" />
            </div>
          </div>
        </div>
        <div className="slider">
          <img src={`${process.env.PUBLIC_URL}/images/Slider-american-tourister-02.webp`} alt="" />
        </div>
        <div className="content">
          <div className="content__row">
            <div className="youtube">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/vdKS-XPY9XU?si=FqpwkcqBKENdgO_6"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="row__text">
              <h4>THE VALUE OF THE AMERICAN TOURISTER BRAND</h4>
              <p>
                The American Tourister brand combines various travel elements,
                including style and confidence. Thus, American Tourister always
                commits that all products ensure durability, lightweight design,
                fashion-forward styles, multifunctionality, and cost-effectiveness.
                That is why American Tourister has been a trusted brand worldwide
                for over 91 years and is now present in more than 118 countries!
              </p>
              <p>
                Learn more:{" "}
                <a
                  href="https://www.americantourister.vn"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  https://www.americantourister.vn
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmericanTourister;
