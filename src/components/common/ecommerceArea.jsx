import reviewFirstImg from "../imgs/review-1.png";
import reviewSecImg from "../imgs/review-2.png";
import reviewThirdImg from "../imgs/review-3.png";

export const EcommerceArea = () => {
    return (
        <section class="ecommerce-page-area">
            <div class="ecommerce-page-container">
                <div class="ecommerce-title">
                    <h3 id="support-h3">ECOMMERCE READY</h3>
                    <h2 id="support-h2">2,000+ Happy customers</h2>
                    <h2 id="support-h2">Customers Opinions</h2>
                </div>
                <div class="ecommerce-reviews">
                    <div class="ecommerce-row">
                        <div class="ecommerce-content">
                            <div class="single-review">
                                <img src={reviewFirstImg} alt="review" />
                                <div class="testimonial-content">
                                    <h4>Neuziel</h4>
                                    <div class="testimonial-text">
                                        <p>Great Template and DreamIT has good customer support. I can recommend it.</p>
                                    </div>
                                </div>
                                <div class="single-review">
                                    <img src={reviewSecImg} alt="review" />
                                    <div class="testimonial-content">
                                        <h4>Neuziel</h4>
                                        <div class="testimonial-text">
                                            <p>Great Template and DreamIT has good customer support. I can recommend it.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="single-review">
                                        <img src={reviewThirdImg} alt="review" />
                                        <div class="testimonial-content">
                                            <h4>Neuziel</h4>
                                            <div class="testimonial-text">
                                                <p>Great Template and DreamIT has good customer support. I can recommend
                                                    it.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}