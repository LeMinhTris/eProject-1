import '../assets/css/AmericanTourister.css'

function AmericanTourister() {
    return (
        <div className="AmericanTourister">
            <div className="container">
                <div className="slider"><img src={`${process.env.PUBLIC_URL}/images/Slider-Samsonite.jpg`} alt="" /></div>
                <h1 className='title'>SAMSONITE</h1>
                <div className="line-title"></div>
                <div className="brand-info">SAMSONITE - THE BRAND OF MOVEMENT</div>
                <div className="content">
                    <div className="content__row">
                        <div className="row__text">
                            <p>When Jesse Shwayder founded Samsonite in 1910, he aimed to create suitcases of exceptional quality and craftsmanship that could withstand all travel risks. He sought a name that represented strength and durability for his products. He chose one of his favorite biblical heroes, Samson, known for his extraordinary strength, to represent these core values.
                                It can be said that the history of Samsonite's development is closely tied to the history of travel because: In 1910, travel was very rudimentary and only accessible to a few who wanted to explore the world. The first suitcases were entirely handmade, primarily based on the principle of durability and the ability to endure strong impacts from long journeys for a small, wealthy clientele. </p>
                            <p>It can be said that the history of Samsonite's development is closely tied to the history of travel because: In 1910, travel was very rudimentary and only accessible to a few who wanted to explore the world. The first suitcases were entirely handmade, primarily based on the principle of durability and the ability to endure strong impacts from long journeys for a small, wealthy clientele. </p>
                        </div>
                        <div className="row__img">
                            <img src={`${process.env.PUBLIC_URL}/images/Samsonite_01.jpg`} alt="" />
                            <img src={`${process.env.PUBLIC_URL}/images/Samsonite_02.jpg`} alt="" />
                        </div>
                    </div>
                </div>
                <div className="slider"><img src={`${process.env.PUBLIC_URL}/images/Samsonite_03.jpg`} alt="" /></div>
                <div className="content">
                    <div className="content__row">
                        <div className="youtube">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/rqaBjrh4R-U?si=FqpwkcqBKENdgO_6"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen>
                            </iframe>

                        </div>
                        <div className="row__text">
                            <p>"Life is a journey" - Samsonite's journey of continuous development, spanning more than a century, continues to explain the close connection between Samsonite and the travel industry. Through creativity, exploring different aspects of travelers' lives, reflected in each product, Samsonite has strongly inspired travelers while bringing fresh ideas to the travel industry. Especially, it stimulates experiences and the desire to explore the world, as well as a return to history and the past. Today, Samsonite continues to affirm itself as a leading brand in the suitcase manufacturing industry by producing high-quality, elegant, lightweight products. The designs include many practical interior features that meet the essential needs of frequent travelers. In all its products, customer desires are always the top priority for Samsonite to research and make decisions to turn design ideas into reality. This motivation also helps Samsonite remain a pioneering brand in introducing suitcases with superior features, such as the world's first wheeled suitcase, the lightest, and the most durable suitcase, etc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AmericanTourister;
