import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { position: 0 };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }
  listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const scroll = winScroll;

    this.setState({ position: scroll });
  };
  render() {
    return (
      <header>
        {this.state.position}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
    );
  }
}

export default Header;
