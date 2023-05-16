import bgTechGif from "../imgs/bg-tech.gif";

// awesome-coding area
export const AwesomeCodingArea = () => {
    return (
<section class="awesome-coding-area">
<div class="awesome-coding-container">
    <div class="awesome-coding-title">
        Awesome Coding Style
    </div>
    <figure>
        <img class="bg-tech-desktop" src={bgTechGif} alt="awesome-coding"/>
    </figure>
    <figure>
        <img class="bg-tech-mobile" src={bgTechGif} alt="awesome-coding"/>
    </figure>
</div>
</section>
    )
}