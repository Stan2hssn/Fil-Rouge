// import { Link } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import Data from "../../Assets/Cards/dataCards";
import "./style.scss";

let divisionArray = [];

const size = 4;
for (let i = 0; i < Data.length; i += size) {
  divisionArray.push(Data.slice(i, i + size));
}

function CardsPage() {
  const [className, setClassName] = useState("pause");
  const container = useRef(null);
  const nav = useRef(null);

  useEffect(() => {
    container.current.addEventListener("mouseover", () =>
      window.addEventListener("wheel", (e) => {
        scrollTo(e.deltaX);
      })
    );
    nav.current.addEventListener("mouseup", (e) => {
      if (e.target.dataset.value)
        setTimeout(() => {
          scrollTo(parseInt(e.target.dataset.value));
        }, 900);
    });
  });

  function scrollTo(d) {
    // eslint-disable-next-line
    if (d > 0 && container.current.scrollLeft == 0) {
      setClassName("rtl");
      container.current.scrollTo({
        top: 0,
        left: container.current.offsetWidth,
      });
    }

    // eslint-disable-next-line
    if (d < 0 && container.current.scrollLeft == container.current.offsetWidth) {
      setClassName("ltr");
      container.current.scrollTo({
        top: 0,
        left: 0,
      });
    }
    setTimeout(() => {
      setClassName("pause");
    }, 1400);
  }

  return (
    <>
      <main className="cards">
        <div
          className={`cardsContainer ${className}`}
          ref={container}
          dir="ltr"
        >
          {divisionArray.map((item, divIndex) => (
            <div className="row" index={divIndex} key={`row${divIndex}`}>
              {item.map(({ Name, Verso }, index) => (
                <div className="card" key={Name}>
                  <img
                    src={Verso}
                    alt={Name}
                    width="218"
                    height="385"
                    index={index % 4}
                    serie={Math.floor(index / 4)}
                  />
                  <h3>{Name}</h3>
                </div>
              ))}
            </div>
          ))}
        </div>
        <nav ref={nav}>
          <div className="prev" data-value="-1">
            {" "}
            &lt;---{" "}
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div className="next" data-value="1">
            {" "}
            ---&gt;
          </div>
        </nav>
      </main>
    </>
  );
}

export default CardsPage;
