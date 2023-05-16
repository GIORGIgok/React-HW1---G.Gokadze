import responsiveAreaImg from "../imgs/responsive-area.png";

export const ResponsiveArea = () => {
    return (
        <section className="ui-ux-area">
            <div className="ui-ux-left-container">
                <div className="ui-ux-left-box">
                    <div className="ui-ux-section-title">
                        <h5 className="ui-ux-h5">RESPONSIVE</h5>
                        <h3 className="ui-ux-h3">100% Responsive</h3>
                        <h3 className="ui-ux-h3">For All Device</h3>
                    </div>
                    <div className="ui-ux-1st-box">
                        <div className="1st-box-content">
                            <p className="ui-ux-p">Techno HTML5 template is fully responsive for all kind of device specilly
                                this template
                            </p>
                        </div>
                        <figure className="responsive-ui-ux-img">
                            <img className="responsive-ui-ux-photo" src={responsiveAreaImg} alt="ui-ux"/>
                        </figure>
                    </div>
                </div>
            </div>
            <div className="ui-ux-right-container">
                <figure className="ui-ux-img">
                    <img src={responsiveAreaImg} alt="ui-ux"/>
                </figure>
            </div>
        </section>
    )
}