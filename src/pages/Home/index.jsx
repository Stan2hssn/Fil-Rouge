import React from "react";
import SphereOne from "../../components/Spheres/sphereOne";
import SphereTwo from "../../components/Spheres/sphereTwo";
import SphereThree from "../../components/Spheres/sphereThree";
import SectionOne from "../../components/Home/Section_One/sectionOne";
import SectionTwo from "../../components/Home/Section_Two/sectionTwo";
import SectionThree from "../../components/Home/Section_Three/sectionThree";
import CardHero from "../../components/Card_hero/index"
import Header from "../../views/Header/index"
import {Link} from "react-router-dom";
import scrollDetector from 'scroll-detector';
import "./style.scss";

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            xPos: 0,
            yPos: 0,
        };
    }


    componentDidMount() {
        window.addEventListener("mousemove", this.parallax);
    }

    componentWillUnmount() {
        window.removeEventListener("mousemove", this.parallax);
    }

    parallax = (e) => {
        const container = document.querySelector(".parallax-container");
        const rect = container.getBoundingClientRect();
        let x = (e.clientX - (container.clientWidth / 2 + rect.left)) / 100;
        let y = (e.clientY - (container.clientHeight / 2 + rect.top)) / 100;
        this.setState({xPos: x > 1 ? 1 : x, yPos: y < -1 ? -1 : y});
    };

 /*   push() {

        const home = document.querySelector('#hero');

        this.setState({h: home.offsetHeight});


    }*/




    render() {
        return (
            <>
                <section id="Hero">
                    <section className="row">
                        <section className="illustration_wrapper">
                            <CardHero index="1" style={{
                                transform: `translate(${this.state.xPos}px, ${this.state.yPos}px) `,
                            }}/>
                            <SphereThree index="3"/>
                            <CardHero index="2"/>
                            <SphereOne index="1"/>
                            <CardHero index="3"/>
                            <SphereTwo index="2"/>
                            <div className="position">
                                <div
                                    className="parallax-container"
                                    style={{
                                        transform: `translate(${this.state.xPos}px, ${this.state.yPos}px)`,
                                    }}>
                                </div>

                                <Link className="cache-container" to="/cards">DECOUVRIR</Link>
                            </div>
                        </section>
                        <div className="text">
                            <div className="title-group">
                                <h1 className="title">LIQUID, Plus qu’une Solution,</h1>
                                <h1 className="title">une Résolution !</h1>
                            </div>
                            <p><span className="red">LIQUID</span>, l'appli pratique, ludique et design pour vos <span className="red">cartes</span>.
                                <br/>
                                En un clic, dématérialisez, stockez, classez, toutes vos cartes en lieu sûr. <br/>
                                En un geste, retrouvez, présentez ou payez.
                                <br/>
                                <br/>
                                Un seul numéro d’identification pour un accès rapide et sécurisé. <br/>
                                <span className="red">LIQUID</span> est un outil qui stocke en ligne, de manière
                                sécurisée, les versions numériques de toutes vos cartes
                                dans un style élégant et tendance.</p>
                        </div>
                    </section>
                    <div className="aboutUs">
                        <Link to="/cards">About us</Link>
                        <div className="arrow"></div>
                    </div>
                </section>
                < SectionOne/>
                < SectionTwo/>
                < SectionThree/>
            </>
        );
    }
}

export default HomePage;
