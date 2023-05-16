import translationImg from "../imgs/translation.png";
import revolutionSliderImg from "../imgs/revolutionslider.png";
import contactFormImg from "../imgs/contact form.png";
import quickViewImg from "../imgs/quickview.png";

export const FeatureArea = () => {
  return (
    <section className="feature-main-area">
      <div className="feature-container">
        <div className="first-feature-row">
          <div className="feature-title">
            <h3 id="feature-h3">CORE FEATURES</h3>
            <h2 id="feature-h2">Constantly update with</h2>
            <h2 id="feature-h2">New Features.</h2>
          </div>
        </div>
      </div>
      <div className="brand-area-parent">
        <div className="brand-area-container">
          <div>
            {/* First block/card */}
            <div className="brand-area-row">
              <div className="card-row">
                <figure>
                  <img src={translationImg} alt="translation ready" />
                  <h3>Translation Ready</h3>
                </figure>
              </div>
              {/* Second block/card */}
              <div className="card-row">
                <figure>
                  <img src={revolutionSliderImg} alt="revolution slider" />
                  <h3>Revolution Slider</h3>
                </figure>
              </div>
              {/* Third block/card */}
              <div className="card-row">
                <figure>
                  <img src={contactFormImg} alt="contact form" />
                  <h3>Contact Form 7</h3>
                </figure>
              </div>
              {/* Fourth block/card */}
              <div className="card-row">
                <figure>
                  <img src={quickViewImg} alt="quick view" />
                  <h3>Quick View</h3>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
