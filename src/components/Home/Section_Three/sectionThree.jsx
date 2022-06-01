import React from "react";
import CanvasSecond from "../../Three/canvasSecond";
import "./style.scss";

export default function SectionTwo({two, visible}) {

  let sectionThree = "SectionThree fade_SectionThree none3";
  let title3 = 'title3 fade-title-before';
  let body3 = 'body3 fade-body-before';

  if (visible) {
    sectionThree = 'SectionThree fade_SectionThree';
  } else {
    sectionThree = 'SectionThree fade_SectionThree none3'
  }

  if (two) {
    sectionThree = 'sectionHeader';
    title3= 'title3';
    body3 = 'body3';
  }

  return (
      <div className={sectionThree}>
        <CanvasSecond/>
        <div className="section_text">
          <h1 className={title3}>Liquid</h1>
          <p className={body3}>
            Plus qu’une solution, une résolution, <span>LIQUID</span> permet la dématérialisation de toutes
            vos cartes
            encombrantes sous la forme de “liquid card” interactive.
            <br/>
            <br/>
            Puissante et sans risque, la beauté de nos cartes reflète aussi bien la sécurité que le bon
            goût.
          </p>
        </div>
      </div>
  );
};