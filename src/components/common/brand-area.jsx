import htmlFiveImg from "../imgs/brand-HTML5.png"
import brandCssImg from "../imgs/brand-CSS.png"
import brandJqueryImg from "../imgs/brandjQuery.png";
import brandResponsiveImg from "../imgs/brand-Responsive.png";

export const BrandArea = () => {
    return (
// Brand-Area
<section class="brand-area-parent">
    <div class="brand-area-container">
        {/* I first-block/card */}
        <div class="brand-area-row">
            <div class="card-row">
                    <img src={htmlFiveImg} alt="html"/>
                    <h3>HTML5</h3>
            </div>
            {/* II block/card */}
            <div class="card-row">
                <img src={brandCssImg} alt="css"/>
                <h3>CSS</h3>
            </div>
            {/* III block/card */}
            <div class="card-row">
                <img src={brandJqueryImg} alt="jQuery"/>
                <h3>jQuery</h3>
            </div>
            {/* IV block/card */}
            <div class="card-row">
                <img src={brandResponsiveImg} alt="fully-responsive"/>
                <h3>Fully Responsive</h3>
            </div>
        </div>
    </div>
</section>
    )
}