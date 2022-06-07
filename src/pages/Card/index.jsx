import React, {useEffect, useRef, useState} from "react";
import {useParams, Link} from "react-router-dom";
import HeaderHero from "../../components/Home/HeaderHero/index"
import Tilty from "react-tilty";
import Data from "../../Assets/Cards/dataCards";
import "./style.scss";

function CardPage() {
  const textRef = useRef(null);
  const uniqueCard = useRef(null);
  const [imageWidth, setImageWidth] = useState(314);
  const [imageHeight, setImageHeight] = useState(555);
  const [translate, setTranslate] = useState(50);
  const [opacity, setOpacity] = useState(0);
  const [block, setBlock] = useState("");
  const { name } = useParams();
  const { Name, Verso, Recto, Text } = Data.filter(
    (item) => item.Name === name
  )[0];

  useEffect(() => {
    uniqueCard.current.addEventListener("scroll", (e) => {
      const pourcent = Math.floor(
        (textRef.current.getBoundingClientRect().top / window.innerHeight) * 100
      );

      if (pourcent + 10 < 100 && pourcent > 80) {
        setImageWidth(314 * (pourcent / 100));
        setImageHeight(555 * (pourcent / 100));
      }

      if (pourcent <= 80 && pourcent > 30) {
        setTranslate(75 - (50 * 50) / (pourcent + 20));
      }

      setBlock(pourcent < 10 ? "block" : "");
      setOpacity(pourcent < 2 ? 1 : 0);
    });
  });

  function turn() {
    block === "" ? setBlock(" turn") : setBlock("")

  }

  let RectoElement;
  if (Array.isArray(Recto)) {
    RectoElement = Recto.map((image, index) => (
        <img
            src={image}
            alt={Name}
            width={imageWidth}
            height={imageHeight}
            key={image}
        style={{ transform: `translateZ(${index * 5}px)` }}
      />
    ));
  } else {
    RectoElement = (
      <img src={Recto} alt={Name} width={imageWidth} height={imageHeight} />
    );
  }


  return (
      <>
        <div className="chaque">
          <HeaderHero/>
        </div>
        <main className="uniqueCard" ref={uniqueCard}>
          <div className="content">
            <div className="card" onClick={turn} style={{left: `${translate}%`}}>
              <Tilty
                  reverse axes="xy" scale="1.03"
                  perspective="1000" transition
                  style={{transformStyle: "preserve-3d"}}
              >
                <div className={`images ${block}`}>
                  <img
                      src={Verso}
                      alt={Name}
                      width={imageWidth}
                      height={imageHeight}
                  />
                  <div
                      className="recto"
                      style={{width: imageWidth, height: imageHeight}}
                  >
                    {RectoElement}
                  </div>
                </div>
              </Tilty>
            </div>
            <div className="text" ref={textRef} style={{opacity: opacity}}>
              <h1>{Name}</h1>
              <p>{Text}</p>
            </div>
          </div>
        </main>
        <div className="hamburger">
          <Link to="/" className="ham"/>
        </div>
      </>
  );
}

export default CardPage;
