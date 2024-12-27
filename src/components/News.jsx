function News() {
    return (
        <div className="news">
            <h2 className="header">Activities of HOL in the Press</h2>
            <div className="container">
                <div className="img">
                    <img src={`${process.env.PUBLIC_URL}/images/logo-dantri.webp`} alt="dantri" />
                </div>
                <div className="img">
                    <img src={`${process.env.PUBLIC_URL}/images/logo-cafebiz.webp`} alt="cafebiz" />
                </div>
                <div className="img">
                    <img src={`${process.env.PUBLIC_URL}/images/logo-saostar.webp`} alt="saostar" />
                </div>
                <div className="img">
                    <img src={`${process.env.PUBLIC_URL}/images/logo-doanhnhan.webp`} alt="doanhnhan" />
                </div>
                <div className="img">
                    <img src={`${process.env.PUBLIC_URL}/images/logo-kenh14.webp`} alt="kenh14" />
                </div>
                <div className="img">
                    <img src={`${process.env.PUBLIC_URL}/images/logo-tuoitre.webp`} alt="tuoitre" />
                </div>
                <div className="img">
                    <img src={`${process.env.PUBLIC_URL}/images/logo-tienphong.webp`} alt="tienphong" />
                </div>
                <div className="img">
                    <img src={`${process.env.PUBLIC_URL}/images/logo-vov.webp`} alt="vov" />
                </div>
                <div className="img">
                    <img src={`${process.env.PUBLIC_URL}/images/logo-cafef.webp`} alt="cafef" />
                </div>
                <div className="img">
                    <img src={`${process.env.PUBLIC_URL}/images/logo-vtcnews.webp`} alt="vtcnews" />
                </div>
                <div className="img">
                    <img src={`${process.env.PUBLIC_URL}/images/logo-vietnamnet.webp`} alt="vietnamnet" />
                </div>
            </div>
        </div>
    );
}

export default News;
