import React from "react";
import CanvasSecond from "../../Three/canvasSecond";
import "./style.scss";

export default function SectionTwo({one, two, visible}) {

    let sectionTwo = "SectionTwo fade_SectionTwo none2";
    let title2 = 'title2 fade-title-before';
    let body2 = 'body2 fade-body-before';

    if (visible) {
        sectionTwo = 'SectionTwo fade-SectionTwo';
    }

    if (one) {
        sectionTwo = 'SectionTwo';
        title2 = 'title2';
        body2 = 'body2';
    }

    if (two) {
        sectionTwo = 'SectionTwo fade-SectionTwo';
        title2 = "title2 fade-title-after";
        body2 = "body2 fade-body-after";
    }

    return (
        <div className={sectionTwo}>
            <CanvasSecond/>
            <div className="section_text">
                <h1 className={title2}>Liquid</h1>
                <p className={body2}>
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