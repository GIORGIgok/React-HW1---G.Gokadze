import uiiUxImg from "../imgs/ui-ux-img.jpg";

export const UiUxSection = () => {
    return (
        <section className="ui-ux-area">
            <div className="ui-ux-left-container">
                <div className="ui-ux-left-box">
                    <div className="ui-ux-section-title">
                        <h2 className="ui-ux-h2">BEST UI/UX</h2>
                        <h3 className="ui-ux-h3">No Compromising</h3>
                        <h3 className="ui-ux-h3">With Quality</h3>
                    </div>
                    <div className="ui-ux-1st-box">
                        <div className="1st-box-content">
                            <h5 className="ui-ux-h5">Effective UX Design</h5>
                            <p className="ui-ux-p">
                                All Demos are made with clear, concise, useful, minimal and modern design pattern
                            </p>
                        </div>
                        <div className="ui-ux-2nd-box">
                            <div className="2nd-box-content">
                                <h5 className="ui-ux-h5">Effective UX Design</h5>
                                <p className="ui-ux-p">
                                    All Demos are made with clear, concise, useful, minimal and modern design pattern
                                </p>
                            </div>
                        </div>
                        <figure className="responsive-ui-ux-img">
                            <img className="responsive-ui-ux-photo" src={uiiUxImg} alt="UI/UX" />
                        </figure>
                    </div>
                </div>
            </div>
            <div className="ui-ux-right-container">
                <figure className="ui-ux-img">
                    <img src={uiiUxImg} alt="UI/UX" />
                </figure>
            </div>
        </section>
    );
};
