import React from 'react';
import "./style.scss";


class Index extends React.Component {

    constructor(props) {
        const container = document.querySelector(".card-container");
        super(props);
        this.state = {
            xPos: 0, yPos: 0, xRot: 0, yRot: 0, zRot: 0, rot: 0
        };
    }


    componentDidMount() {
        window.addEventListener("mousemove", this.parallax);
    }

    componentWillUnmount() {
        window.removeEventListener("mousemove", this.parallax);
    }

    parallax = (e) => {
        const container = document.querySelector(".card-container");
        const rect = container.getBoundingClientRect();
        let x = (e.clientX - (container.clientWidth / 2 + rect.left)) / 80;
        let y = (e.clientY - (container.clientHeight / 2 + rect.top)) / 80;
        this.setState({
            xPos: x > 1 ? 1 : x,
            yPos: y < -1 ? -1 : y,
            xRot: x > 2 ? 2 : x,
            yRot: 1,
            zRot: y > 2 ? 2 : y,
            rot: x / y * 10,
        });
    };

    /*   transform: translate(-11em, -3em) rotate3d(2, 1, 1, 360deg);*/
    render() {
        return (<div className="card-container" style={{
                transform: `translate(${(this.state.xPos) + (-11)}em, ${this.state.yPos + (-3)}em) rotate3d(${this.state.xRot, this.state.yRot, this.state.zRot, (this.state.rot + "deg")})`,
            }}>
                <div className="gradient"></div>
            </div>);
    }
}

export default Index;