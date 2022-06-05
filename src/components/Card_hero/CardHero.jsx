import React from "react";
import "./style.scss";

class CardHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xPos: props.data.xPos,
      yPos: props.data.yPos,
      xRot: props.data.xRot,
      yRot: props.data.yRot,
      zRot: props.data.zRot || 0,
      rot: props.data.rot,
    };
  }

  componentDidMount() {
    const win = document.querySelector("#Hero");
    win.addEventListener("mousemove", (e) => {
      let xPosition;
      let yPosition;
      let xRotation;
      let yRotation;
      let rotation;
      let ratioX;
      let ratioY;

      ratioX = e.clientX / window.innerWidth;
      ratioY = e.clientY / window.innerWidth;
      let ratio = (ratioX + ratioY) / 2;

      xPosition = this.props.data.xPosition(ratioX);
      yPosition = this.props.data.yPosition(ratioY);

      this.setState({xPos: xPosition})
      this.setState({yPos: yPosition})

      if (this.props.data.xRotation) xRotation = this.props.data.xRotation(ratioX);
      if (this.props.data.yRotation) yRotation = this.props.data.yRotation(ratioY);
      if (this.props.data.rotation) rotation = this.props.data.rotation(ratio);

      this.setState({xRotate: xRotation || this.props.data.xRot})
      this.setState({yRotate: yRotation || this.props.data.yRot})
      this.setState({Rot: rotation || this.props.data.rot})
    });
  }

  render() {
    return (
      <div
        className={`card-container ${this.props.name}`}
        style={{
          transform: `translate(${this.state.xPos}em, ${this.state.yPos}em) rotate3d(${this.state.xRot}, ${this.state.yRot}, ${this.state.zRot}, ${this.state.rot}deg)`,
        }}
      >
        <div className="gradient"></div>
      </div>
    );
  }
}

export default CardHero;
