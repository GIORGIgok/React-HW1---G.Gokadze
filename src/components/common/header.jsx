import logo from "../imgs/logo.png";
import respLogo from "../imgs/responsive-logo.png"
import burgerMenu from "../imgs/burger-menu.svg"


export const Header = () => {
    return (
        <header>
            <div className="top-container">
                {/* CONTAINER INSIDE HEADER */}
                <div className="container">
                    {/* FLEX ROW */}
                    <div className="row">
                        {/* LOGO BOX */}
                        <div className="first-element">
                            <figure>
                                <a href="#">
                                    <img className="logo" src={logo} alt="logo"/>
                                </a>
                            </figure>
                            {/* responsive logo */}
                            <figure>
                                <img className="responsive-logo" src={respLogo} alt="resp-logo" />
                            </figure>
                        </div>
                        {/* burger-menu icon */}
                        <figure className="burger-menu-icon">
                            <a href="#">
                                <img src={burgerMenu} />
                            </a>
                        </figure>
                        {/* NAVIGATION */}
                        <nav className="second-element">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Demo</a></li>
                                <li><a href="#">Inner Pages</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Feature</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </nav>
                        {/* get started button */}
                        <div className="get-started">
                            <a className="gs-button" href="#">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}