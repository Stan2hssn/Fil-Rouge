import React, {useEffect, useRef, useState} from "react";
import "./style.scss";

export default function CardHero() {

    const card1 = useRef(null)

    let xPosition;
    let yPosition;
    let xRotation;
    let yRotation;

    const [xPos, setxPos] = useState(26);
    const [yPos, setyPos] = useState(9);
    const [xRot, setxRotate] = useState(2);
    const [yRot, setyRotate] = useState(1);
    const [zRot, setzRotate] = useState(2);
    const [rot, setRot] = useState(296);

    useEffect(() => {
        const win = document.querySelector('#Hero');
        win.addEventListener("mousemove", animation);
    })

    function animation(e) {

        let ratioX = e.clientX / window.innerWidth;
        let ratioY = e.clientY / window.innerWidth;

        xPosition = 25 + (ratioX * 2);
        yPosition = 7 + -(-ratioY * 5);
        xRotation = 2 + (ratioX * 1.2);
        yRotation = 1 + (ratioY * 1.5);

        setxPos(xPosition)
        setyPos(yPosition)
        setxRotate(xRotation)
        setyRotate(yRotation)


    }

    return (
        <div
            className="card-container firstCard"
            style={{
                transform: `translate(${xPos}em, ${yPos}em) rotate3d(${xRot}, ${yRot}, ${zRot}, ${rot}deg)`,
            }}
            ref={card1}
        >
            <div className="gradient"></div>
        </div>
    );
}
