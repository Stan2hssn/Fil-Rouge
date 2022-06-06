import React from "react";
// import CanvasThird from "../../Three/canvasThird";
import "./style.scss";

export default function SectionThree({ two }) {
  let sectionThree = "SectionThree fade_SectionThree none3";
  let title3 = "title3 fade-title-before";
  let body3 = "body3 fade-body-before";

  if (two) {
    sectionThree = "SectionThree";
    title3 = "title3";
    body3 = "body3";
  }

  return (
    <div className={sectionThree}>
      {/* <CanvasThird/> */}
      <div className="section_text">
        <h1 className={title3}>Cards</h1>
        <p className={body3}>
          Plus qu’une solution, une résolution, <span>LIQUID</span> permet la
          dématérialisation de toutes vos cartes encombrantes sous la forme de
          “liquid card” interactive.
          <br />
          <br />
          Puissante et sans risque, la beauté de nos cartes reflète aussi bien
          la sécurité que le bon goût.
        </p>
      </div>
    </div>
  );
}
