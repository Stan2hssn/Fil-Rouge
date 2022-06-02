import React, {useEffect, useRef, useState} from "react";
import HeaderHero from "../../components/Home/HeaderHero/index"
import SphereOne from "../../components/Spheres/sphereOne";
import SphereTwo from "../../components/Spheres/sphereTwo";
import SphereThree from "../../components/Spheres/sphereThree";
import Sections from "../../components/Sections/index"
import CardHero from "../../components/Card_hero/CardHero";
import CardHero2 from "../../components/Card_hero/CardHero2";
import CardHero3 from "../../components/Card_hero/CardHero3";
import {Link} from "react-router-dom";
import "./style.scss";

export default function Home() {

    const parallaxContainer = useRef(null);
    const scroller = useRef()
    const section1Ref = useRef();
    const section2Ref = useRef();

    const [visible, setVisible] = useState(false);
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const [xPos, setXpos] = useState(0);
    const [yPos, setYpos] = useState(0);
    const [top, setTop] = useState(0);

    useEffect(() => {
        const scroller = document.querySelector('.rules');
        const Hero = document.querySelector('#Hero');
        Hero.addEventListener('mousemove', parallax)
        scroller.addEventListener("scroll", handleScroll, {passive: true});
    }, []);

    function scrollAbout() {
        console.log("hello")
    };

    function parallax(e) {
        const rect = parallaxContainer.current.getBoundingClientRect();

        let x = (e.clientX - (rect.width / 2 + rect.left));
        let y = (e.clientY - (rect.height / 2 + rect.top)) / 100;

        x = x > 1 ? 1 : x;


        y = y > 1 ? 1 : y;

        x = x < -1 ? -1 : x

        y = y < -1 ? -1 : y

        setXpos(x)
        setYpos(y)

    }

    function handleScroll() {
        const section2offsetYTop = section2Ref.current.getBoundingClientRect().top;
        const section = section2Ref.current.getBoundingClientRect().height;

        setTop(section2offsetYTop)

        if (section2offsetYTop <= 0) {
            setVisible(true);
        } else {
            setVisible(false)
        }

        if (section2offsetYTop <= -section) {
            setOne(true);
        } else {
            setOne(false);
        }

        if (section2offsetYTop <= (-section * 2)) {
            setTwo(true);
        } else {
            setTwo(false);
        }

        if (section2offsetYTop <= (-section * 3)) {
            setThree(true);
        } else {
            setThree(false);
        }

    }

    return (<>
        <div className="rules" ref={scroller}>

            <section style={{
                scrollSnapAlign: "start",
            }} id="Hero">
                <HeaderHero/>
                <section className="row">
                    <section className="illustration_wrapper">
                        <CardHero/>
                        <SphereThree/>
                        <CardHero2/>
                        <SphereOne/>
                        <CardHero3/>
                        <SphereTwo/>
                        <div className="position">
                            <div className="parallax-container"
                                 style={{transform: `translate(${xPos}px, ${yPos}px)`,}} ref={parallaxContainer}></div>

                            <Link className="cache-container" to="/cards">
                                DECOUVRIR
                            </Link>
                        </div>
                    </section>
                    <div className="text">
                        <div className="title-group">
                            <h1 className="title">LIQUID, Plus qu’une Solution,</h1>
                            <h1 className="title">une Résolution</h1>
                        </div>
                        <p>
                            <span className="red">LIQUID</span>, l'appli pratique, ludique et
                            design pour vos <span className="red">cartes</span>.
                            <br/>
                            En un clic, dématérialisez, stockez, classez, toutes vos cartes en
                            lieu sûr. <br/>
                            En un geste, retrouvez, présentez ou payez.
                            <br/>
                            <br/>
                            Un seul numéro d’identification pour un accès rapide et sécurisé.{" "}
                            <br/>
                            <span className="red">LIQUID</span> est un outil qui stocke en
                            ligne, de manière sécurisée, les versions numériques de toutes vos
                            cartes dans un style élégant et tendance.
                        </p>
                    </div>
                </section>
                <div onClick={scrollAbout} className="aboutUs">
                    <div>About us</div>
                    <div className="arrow"></div>
                </div>
            </section>

            <Sections visible={visible} one={one} two={two} three={three} top={top}/>

            <div style={{position: 'fixed', background: 'red', top: 0}}>
            </div>

            <section className="snap-y">
                <div className="wireframe-home hero-section" ref={section1Ref}>
                    <div className="min-h-screen">1</div>
                </div>
                <div
                    className="wireframe-home sections"
                    ref={section2Ref}
                >
                </div>
            </section>


        </div>

    </>);
}
