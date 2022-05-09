import React from "react";
import Sphere from "../../components/Sphere";
// import { Link } from "react-router-dom";
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
    this.setState({ xPos: x > 1 ? 1 : x, yPos: y < -1 ? -1 : y });
  };

  render() {
    return (
      <>
        <section id="Hero">
          <Sphere index="1" />
          <Sphere index="2" />
          <div className="position">
            <div
              className="parallax-container"
              style={{
                transform: `translate(${this.state.xPos}px, ${this.state.yPos}px)`,
              }}
            >
            </div>
              <div className="cache-container">DECOUVRIR</div>
          </div>
          <h2>Section 1</h2>
        </section>
        <section id="About">
          <h2>Section 2</h2>
        </section>
        <section id="Liquid">
          <h2>Section 3</h2>
        </section>
        <section id="Card">
          <h2>Section 4</h2>
        </section>
        <canvas id="BGC"></canvas>
      </>
    );
  }
}

export default HomePage;
