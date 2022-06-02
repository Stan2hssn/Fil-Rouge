import React, {useEffect, useRef, useState} from "react";
import "./style.scss";

export default function CardHero2() {

    const card2 = useRef(null)

    let xPosition;
    let YPosition;
    let xRotation;
    let rotation;

    const [xPos, setxPos] = useState(6);
    const [yPos, setyPos] = useState(2);
    const [xRot, setxRotate] = useState(1);
    const [yRot, setyRotate] = useState(1);
    const [zRot, setzRotate] = useState(1);
    const [rot, setRot] = useState(320);

    useEffect(() => {
        const win = document.querySelector('#Hero');
        win.addEventListener("mousemove", animation);
    })

    function animation(e) {


        let ratioX = e.clientX / window.innerWidth;
        let ratioY = e.clientY / window.innerWidth;
        let ratio = (ratioX + ratioY) / 2;

        xPosition = 5 + (ratioX * 4);
        YPosition = 1 + (ratioY * 5);
        xRotation = 1 + ratioX;
        rotation = 320 + -(ratio * 5);

        setxPos(xPosition)
        setyPos(YPosition)
        setxRotate(xRotation)
        setRot(rotation)
        setyRotate(1);
        setzRotate(1);

    }

    return (
        <div
            className="card-container secondCard"
            ref={card2}
            style={{
                transform: `translate(${xPos}em, ${yPos}em) rotate3d(${xRot}, ${yRot}, ${zRot}, ${rot}deg)`,
            }}>
            <div className="gradient"></div>
        </div>
    );
}
