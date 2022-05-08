import { Link } from "react-router-dom";
import "./style.scss";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <section id="Hero">
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
