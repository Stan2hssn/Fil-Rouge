import React from "react";
import {Link} from "react-router-dom";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import scrollDetector from 'scroll-detector';
import sectionOne from '../../components/Home/Section_One/sectionOne'
import "./style.scss";

class Header extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        console.log(window.scrollY);
        gsap.registerPlugin(ScrollTrigger)
        gsap.registerPlugin(ScrollToPlugin)
        scrollDetector.on('scroll:down', this.scrollDown);
        scrollDetector.on('scroll:up', this.scrollUp);
        this.header()
    }

    componentWillUnmount() {

    }

    scrollUp() {
        const bottom = document.querySelector('.SectionOne').getBoundingClientRect().top;

        console.log(bottom)
        console.log('up')
        if ( Math.round( bottom) > 100 && Math.round(bottom) < 200 ){
            gsap.to(window, {duration: 0, scrollTo: 0});
        }}

    scrollDown() {
        console.log('down')
        if (Math.round(window.scrollY) > 10 && Math.round(window.scrollY) < 20 ){
        gsap.to(window, {duration: 0, scrollTo: ".SectionOne"});
    }}

    header(e) {


        gsap.to('.sectionHeader', {
            scrollTrigger: {
                trigger: '.SectionOne',
                start: 'top top',
                end: 'top top',
                markers: true,
                scrub: true,
            }, position: "fixed", top: '0', opacity: '1'
        });
    }


    render() {

        return (
            <>
                <div className="sectionHeader" style={{opacity: 'none'}}>
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
            </>);
    }
}

export default Header;
