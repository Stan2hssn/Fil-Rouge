import React from "react";
import SphereOne from "../../components/Spheres/sphereOne";
import SphereTwo from "../../components/Spheres/sphereTwo";
import SphereThree from "../../components/Spheres/sphereThree";
import SectionOne from "../../components/Home/Section_One/sectionOne";
import SectionTwo from "../../components/Home/Section_Two/sectionTwo";
import SectionThree from "../../components/Home/Section_Three/sectionThree";
import CardHero from "../../components/Card_hero/index"
import {Link} from "react-router-dom";
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

    render() {
        return (
            <>
                <section id="Hero">
                    <section className="illustration_wrapper">
                        <CardHero/>
                        <SphereThree index="3"/>
                        <CardHero/>
                        <SphereOne index="1"/>
                        <CardHero/>
                        <SphereTwo index="2"/>
                        <div className="position" onClick={this.props.navigate}>
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
                        <h1>LIQUID, YOUR new digital card
                            <br/>One card, thousands of posibilities</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A odio lectus sed congue. Arcu diam
                            ut in ante amet. Ultricies adipiscing aliquam eu, morbi urna in ac.
                            <br/>
                            <br/>
                            Eu, elit consequat neque orci, iaculis egestas sodales. Amet, quam vitae turpis leo
                            facilisis aliquet sit feugiat. Accumsan habitant ultrices sit libero etiam egestas fermentum
                            purus iaculis.</p>
                    </div>

                </section>
                < SectionOne/>
                < SectionTwo/>
                < SectionThree/>
                <canvas id="BGC"></canvas>
            </>
        );
    }
}

export default HomePage;
