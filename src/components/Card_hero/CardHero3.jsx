import React, {useRef, useState, useEffect} from "react";
import "./style.scss";

export default function CardHero3() {

    const card3 = useRef(null)

    let xPosition;
    let YPosition;
    let rotation;

    const [xPos, setxPos] = useState(-11);
    const [yPos, setyPos] = useState(-3);
    const [xRot, setxRotate] = useState(2);
    const [yRot, setyRotate] = useState(1);
    const [zRot, setzRotate] = useState(1);
    const [rot, setRot] = useState(360);

    useEffect(() => {
        const win = document.querySelector('#Hero');
        win.addEventListener("mousemove", animation);
    })

    function animation(e) {

        let ratioX = e.clientX / window.innerWidth;
        let ratioY = e.clientY / window.innerWidth;
        let ratio = (ratioX + ratioY) / 2;

        xPosition = -11 + (ratioX * 3);
        YPosition = -3 + (ratioY * 2);
        rotation = 360 + -(ratio * 31);
        setxRotate(2);
        setyRotate(1);
        setzRotate(1);


        setxPos(xPosition)
        setyPos(YPosition)
        setRot(rotation)

    }

    return (
        <div
            className="card-container thirdCard"
            ref={card3}
            style={{
                transform: `translate(${xPos}em, ${yPos}em) rotate3d(${xRot}, ${yRot}, ${zRot}, ${rot}deg)`,
            }}>
            <div className="gradient"></div>
        </div>
    );
}
