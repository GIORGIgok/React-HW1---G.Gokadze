import supportFirst from "../imgs/support1.jpg"
import supportSec from "../imgs/support2.jpg"
import supportThird from "../imgs/support3.jpg"
import supportFourth from "../imgs/support4.jpg"

export const SupportPage = () => {
    return (
        <section class="support-page-area">
            <div class="support-title">
                <h3 id="support-h3">Support Team</h3>
                <h2 id="support-h2">Our Dedicated Support Team</h2><br />
                <h2 id="support-h2">For Help You All Time</h2>
            </div>
            <div class="support-page-container">
                <figure class="support-page-imgs">
                    <img src={supportFirst} alt="#" />
                    <img src={supportSec} alt="#" />
                    <img src={supportThird} alt="#" />
                    <img src={supportFourth} alt="#" />
                </figure>
            </div>
        </section>
    )
}