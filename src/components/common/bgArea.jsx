import innerImgFirst from "../imgs/inner-img1.jpg";
import innerImgSec from "../imgs/inner-img2.jpg";
import innerImgThird from "../imgs/inner-img3.jpg";
import bgTechImg from "../imgs/bg-tech2.jpg";

export const BgArea = () => {
    return (
        <section className="bg-area">
            <div className="bg-area-container">
                <div className="bg-row">
                    <div className="bg-row-img">
                        <div className="bg-row-thumb">
                            <figure><img src={bgTechImg} alt="" /></figure>
                        </div>
                    </div>
                    <div className="bg-area-title">
                        <h2 id="bg-area-h2">DIFFERENT BLOGGING STYLE !</h2>
                    </div>
                    <div className="bg-row2">
                        <figure className="bg-page-imgs d-flex">
                            <img src={innerImgFirst} alt="image" />
                            <img src={innerImgSec} alt="image" />
                            <img src={innerImgThird} alt="image" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};
