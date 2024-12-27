import "../assets/css/HighSirerra.css";

function HighSirerra() {
  return (
    <div className="HighSirerra">
      <div className="container">
        <div className="slider">
          <img src={`${process.env.PUBLIC_URL}/images/Slider-high-sierra-01.webp`} alt="" />
        </div>
        <h1 className="title">High Sierra</h1>
        <div className="line-title"></div>
        <div className="brand-info">BREAKING LIMITS</div>
        <div className="content">
          <h4>History of Formation and Development</h4>
          <div className="content__row">
            <div className="row__text">
              <p>
                Founded in 1978 by Herb, the father, and Hank Bernbaum, the son, in Chicago, USA. Inspired by the highest mountains, tallest trees, and largest waterfalls, these served as the reference frame and goals that <strong>High Sierra</strong> strives for.
              </p>
              <p>
                In any journey, whether in the mountains or deep in the sea, whether in work or life, <strong>High Sierra</strong> accompanies you. Creating products for outdoor enthusiasts with excellent quality, convenience, multi-functionality, and affordable prices is the core value that the <strong>High Sierra</strong> brand aims for, establishing a High Sierra that breaks all limits.
              </p>
            </div>
            <div className="row__img">
              <img src={`${process.env.PUBLIC_URL}/images/img-high-sierra-01.webp`} alt="" />
              <img src={`${process.env.PUBLIC_URL}/images/img-high-sierra-02.png`} alt="" />
            </div>
          </div>
        </div>
        <div className="content">
          <div className="content__row">
            <div className="youtube">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/z_lDDt7aNW0?si=0O8rXCr1Q-D-9O-h"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>

            </div>
            <div className="row__text sub">
              <h4>HIGH SIERRA BACKPACKS - CREATING HISTORIC LEGACIES</h4>
              <ul>
                <li>First came backpacks with wheels</li>
                <li>
                  An idea from the top of Sierra Nevada, the highest mountain in the western United States, as a brilliant symbol in breaking the boundary between the concept of "stepping into" the world rather than "just observing" it.
                </li>
                <li>
                  Proud to be a member of the EOCA (European Outdoor Conservation Association).
                </li>
                <li>
                  Official supplier of bags for the US Ski, Snowboarding, and Freeskiing teams.
                </li>
                <li>
                  Committed to supporting products for outdoor physical talents. <strong>High Sierra</strong> has continuously improved and added many practical features to meet all different needs. Mentioning <strong>High Sierra</strong> means mentioning all practical, unique, and vibrant activities.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h4>TOGETHER WITH SAMSONITE, CONQUERING NEW HEIGHTS</h4>
        <p>
          In 2012, <strong>High Sierra</strong> officially partnered with the Samsonite family in their journey to conquer new heights. Together, they inspire travelers with diverse and passionate adventures about the intense experience of life.
        </p>
      </div>
    </div>
  );
}

export default HighSirerra;
