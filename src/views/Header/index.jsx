import React from "react";
import {Link} from "react-router-dom";
import "./style.scss";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {position: 0};
    }


    /*

    componentDidMount() {
        window.addEventListener("scroll", this.listenToScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.listenToScroll);
    }

    listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const scroll = winScroll;
        const header = document.querySelector('header');


        this.setState({position: scroll});

        let h = window.innerHeight;

        if (this.state.position >= (300)) {
            header.style.opacity = 0;
            header.classList.add('absolute');
        } else {
            header.style.opacity = 1;
            header.classList.remove('absolute');
        }


        if (this.state.position >= h) {
            header.classList.add('scroll');
            header.classList.remove('absolute');
            header.style.opacity = 1;
        } else {
            header.classList.remove('scroll');
        }

    };*/


    render() {
        return (
            <>
                <div className="sectionHeader">
                    <header>
                        <Link className="logo" to="/"></Link>
                        <nav>
                            <ul>
                                <li>Fil-rouge</li>
                                <li>Liquid</li>
                                <li>Cards</li>
                            </ul>
                        </nav>
                        <Link className="discover" to="/Cards">Discover</Link>
                    </header>
                </div>
            </>
        );
    }
}

export default Header;
