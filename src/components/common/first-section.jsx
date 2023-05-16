import playSvg from "../imgs/play-solid.svg";

export const FirstSection = () => {
    return (
        <section class="section-parent">
        <div class="intro-container">
            <div class="main-first-container">
                <h2>The #1 Best Selling IT Solution And Multi-Purpose HTML5 Template </h2>
                <p>A high-performant Multi-Purpose WordPress theme suitable for any kind of WordPress project</p>
                <div class="canvas-play">
                    <figure>
                        <a href="#" rel="play-svg" title="Play">
                            <img class="play-svg" src={playSvg} alt="play icon" />
                        </a>
                    </figure>
                </div>
            </div>
        </div>
    </section>
    )
}