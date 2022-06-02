import React from "react";
import "./style.scss";
import CanvasFirst from "../../Three/canvasFirst";

export default function SectionOne({one, two}) {

    let sectionOne = 'SectionOne';
    let title = 'title';
    let body = 'body';


    if (one) {
        sectionOne += ' fade-sectionOne';
        title += ' fade-title-after';
        body += ' fade-body-after';
    }

    return (
        <div className={sectionOne}>
           {/* <CanvasFirst one={one} two={two}/>*/}
            <div className="section_text">
                <h1 className={title}>Projet fil-rouge</h1>
                <p className={body}>
                    Projet phare du bachelor “web et mobile” aux Gobelins, l’école de
                    l’image. Son objectif : Offrir l'opportunité de valider les
                    compétences acquises au cours de l’année.
                    <br/>
                    <br/>
                    Chaque étudiant est libre de traiter le domaine qu’il souhaite. Seul
                    ou en groupe, les participants disposent de plusieurs semaines pour
                    établir, développer et présenter leurs créations.
                </p>
            </div>
        </div>);

};
