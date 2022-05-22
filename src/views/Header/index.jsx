import React from "react";
import {Link} from "react-router-dom";
import {useEffect, useRef} from "react";
import gsap from "gsap";
import { TweenLite, Power3 } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import scrollDetector from 'scroll-detector';
import sectionOne from '../../components/Home/Section_One/sectionOne';
import "./style.scss";

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.scrollTo.bind(this);

    }

    componentDidMount() {
        console.log(window.scrollY);
        gsap.registerPlugin(ScrollTrigger)
        gsap.registerPlugin(ScrollToPlugin)
        scrollDetector.on('scroll:down', this.scrollDown);
        scrollDetector.on('scroll:up', this.scrollUp);
        this.trigger()
    }

    componentWillUnmount() {
        scrollDetector.off('scroll:down', this.scrollDown);
        scrollDetector.off('scroll:up', this.scrollUp);
    }

    scrollTo = (e) => {
        gsap.to(window, {duration: 0, scrollTo: 0, easing: Power3.easeInOut});
    }

    scrollUp() {
        const bottom = document.querySelector('.SectionOne').getBoundingClientRect().top;

        console.log(bottom)
        console.log('up')
        if (Math.round(bottom) > 0) {
            gsap.to(window, {duration: 0, scrollTo: 0, easing: Power3.easeInOut});
            scrollDetector.mute()
            setTimeout(() => {
                scrollDetector.unmute()

            }, 500);
        }
    }

    scrollDown() {
        console.log('down')
        if (Math.round(window.scrollY) > 0 ) {

            gsap.to(window, {duration: 0, scrollTo: ".SectionOne", easing: Power3.easeInOut});
            scrollDetector.mute()
            setTimeout(() => {
                scrollDetector.unmute()

            }, 600);
        }

    }


    trigger(e) {

        gsap.to('.SectionOne', {
            scrollTrigger: {
                trigger: '.SectionOne',
                start: 'top top',
                end: 'top top',
                markers: false,
                scrub: true,
                toggleActions: "play none none reverse"
            }, position: "fixed", top: '0'
        });


        gsap
            .to(
                '.sectionHeader'
                , {
                    scrollTrigger: {
                        trigger: '.SectionOne',
                        start: 'top top',
                        end: 'top top',
                        markers: false,
                        scrub: true,
                        toggleActions: "play none reverse none",
                    }
                    ,
                    position: "fixed"
                    ,
                    top: '0',
                    opacity: 1
                }
            )
        ;
    }

    render() {

        return (
            <>
                <div className="sectionHeader" style={{opacity: 'none'}}>
                    <header>
                        <Link onClick={this.scrollTo}className="logo" to="/"></Link>
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
