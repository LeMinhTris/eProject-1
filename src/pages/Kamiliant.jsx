import "../assets/css/Kamiliant.css";

function Kamiliant() {
  return (
    <div className="Kamiliant">
      <div className="container">
        <div className="slider">
          <img src={`${process.env.PUBLIC_URL}/images/Slider-kamiliant-01.webp`} alt="" />
        </div>
        <h1 className="title">Kamiliant</h1>
        <div className="line-title"></div>
        <div className="brand-info">
          PERSONALIZED LUGGAGE BRAND DEVELOPED BY AMERICAN TOURISTER
        </div>
        <div className="content">
          <div className="content__row">
            <div className="row__text">
              <p>
                Strong enough to protect your luggage - Special enough to make you stand out in the crowd.
              </p>
              <p>
                For <strong>Kamiliant</strong> luggage, colors are not just simple hues - They are a statement - A reflection of personality - And the clearest representation of who you are. And when accompanying you on your travels, <strong>Kamiliant</strong> is more than just a way of getting from one place to another.
              </p>
              <p>
                You can throw away all worries and simply become the person you desire: a friend, a musician, an artist, someone in love, or just an adventure lover.
              </p>
            </div>
            <div className="row__img">
              <img src={`${process.env.PUBLIC_URL}/images/img-kamiliant-01.webp`} alt="" />
              <img src="/images/img-kamiliant-02.webp" alt="" />
            </div>
          </div>
        </div>
        <div className="slider">
          <img src={`${process.env.PUBLIC_URL}/images/Slider-kamiliant-02.webp`} alt="" />
        </div>
        <div className="content">
          <div className="content__row">
            <div className="youtube">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/c2HZOMhO_SY?si=p3MyyYKx0zXbsKr_"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>

            </div>
            <div className="row__text">
              <p>
                It all depends on you. That's why you need a travel product that can fit your personality, no matter where you go. <strong>Kamiliant</strong> - a completely new expression that no other travel product can match. Inspired by the vibrant colors of chameleons, the <strong>Kamiliant</strong> luggage is perfect for any adventure. Strong enough to protect your luggage, bold enough to stand out in a crowd, and harmonious enough to blend in with any destination.
              </p>
              <p>
                After all, this world is like a vast forest. Just like how a chameleon is recognized, how it adapts, and how it provides a sensory experience for you. <strong>Kamiliant</strong> luggage expresses your personality through a rich array of colors.
              </p>
              <p>
                Suitable for wherever you go. A brilliant way to express who you are.
              </p>
            </div>
          </div>
        </div>
        <h4>VIBRANT ADVENTURES IN MULTI-COLORS</h4>
        <p>
          <strong>Kamiliant</strong> is developed by <strong>American Tourister</strong>, designed for adventure-loving travelers. Inspired by the colors and exceptional adaptability of chameleons, the brand's philosophy is to create colorful, durable, and reliable luggage. <strong>Kamiliant</strong> is unique, distinctive, and a vibrant choice for travelers around the world.
        </p>
        <p>Learn more: <a href="https://kamiliant.com/" target="blank">https://kamiliant.com/</a></p>
      </div>
    </div>
  );
}

export default Kamiliant;
