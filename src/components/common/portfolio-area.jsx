import lotImagesFirst from "../imgs/lot-images1.jpg";
import lotImagesSec from "../imgs/lot-images2.jpg";
import lotImagesThird from "../imgs/lot-images3.jpg";

// portfolio area
export const PortfolioArea = () => {
    return (
<section className="portfolio-area">
    <div className="portfolio-container">
        <div className="portfolio-row">
            <div className="portfolio-first-box">
                <div className="portfolio-title">
                    <h2 id="portfolio-h2">50+ Stunning and</h2>
                    <h2 id="portfolio-h2">Unique Demos</h2>
                </div>
            </div>
        </div>
        <div className="portfolio-second-row">
            <div className="portfolio-child">
                <nav className="portfolio-nav">
                    <ul className="portfolio-menu">
                        <li className="portfolio-menu-item"><a href='#'>ALL</a></li>
                        <li className="portfolio-menu-item"><a href='#'>II SOLUTION</a></li>
                        <li className="portfolio-menu-item"><a href='#'>BUSINESS</a></li>
                        <li className="portfolio-menu-item"><a href='#'>AGENCY</a></li>
                        <li className="portfolio-menu-item"><a href='#'>NEW DEMO</a></li>
                        <li className="portfolio-menu-item"><a href='#'>STARTUP</a></li>
                        <li className="portfolio-menu-item"><a href='#'>CONSULTING</a></li>
                        <li className="portfolio-menu-item"><a href='#'>FINANCE</a></li>
                        <li className="portfolio-menu-item"><a href='#'>DATA SCIENCE</a></li>
                        <li className="portfolio-menu-item"><a href='#'>SEO</a></li>
                        <li className="portfolio-menu-item"><a href='#'>MARKETING</a></li>
                        <li className="portfolio-menu-item"><a href='#'>ODDO</a></li>
                        <li className="portfolio-menu-item"><a href='#'>INSURANCE</a></li>
                        <li className="portfolio-menu-item"><a href='#'>DARK</a></li>
                        <li className="portfolio-menu-item"><a href='#'>LANDING</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="portfolio-img-container">
            <div className="lot-image-load">
                <figure className="portfolio-images">
                    <div className="portfolio-img">
                        <a href="'#'"><img src={lotImagesFirst}/></a>
                        <h4>Main Home</h4><br/>
                        <h5>Main Home, IT Solution, Business</h5>
                    </div>
                    <div className="portfolio-img">
                        <a href="'#'"><img src={lotImagesSec}/></a>
                        <h4>New IT Solution 01</h4><br/>
                        <h5>New IT Solution, Digital IT, Software IT</h5>
                    </div>
                    <div className="portfolio-img">
                        <a href="'#'"><img src={lotImagesThird}/></a>
                        <h4>New SEO Marketing</h4><br/>
                        <h5>Digital Marketing, Digital Agency, SEO Marketing</h5>
                    </div>
                    <div className="portfolio-img">
                        <a href="'#'"><img src={lotImagesThird}/></a>
                        <h4>New SEO Marketing</h4><br/>
                        <h5>Digital Marketing, Digital Agency, SEO Marketing</h5>
                    </div>
                    <div className="portfolio-img">
                        <a href="'#'"><img src={lotImagesFirst}/></a>
                        <h4>Main Home</h4><br/>
                        <h5>Main Home, IT Solution, Business</h5>
                    </div>
                    <div className="portfolio-img">
                        <a href="'#'"><img src={lotImagesSec}/></a>
                        <h4>New IT Solution 01</h4><br/>
                        <h5>New IT Solution, Digital IT, Software IT</h5>
                    </div>
                </figure>
            </div>
        </div>
    </div>
</section>
    )
}