import innerImgFirst from "../imgs/inner-img1.jpg"
import innerImgSec from "../imgs/inner-img2.jpg"
import innerImgThird from "../imgs/inner-img3.jpg"

// inner-page area
export const InnerPageArea = () => {
    return (
        <section className="inner-page-area">
            <div className="inn-page-container">
                <figure className="inner-page-imgs">
                    <img src={innerImgFirst} alt="inner-first" />
                    <img src={innerImgSec} alt="inner-sec" />
                    <img src={innerImgThird} alt="inner-third" />
                </figure>
            </div>
        </section>
    );
};
