import React from 'react';
import './style.scss';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import CanvasFirst from '../../Three/canvasFirst'

const SectionOne = () => {

/*
    gsap.registerPlugin(ScrollTrigger)

    gsap.to('.SectionOne', {
        scrollTrigger: {
            trigger: '.SectionOne',
            start: 'top top',
            end: 'top top',
            markers: true,
            scrub: true,
        }, position: "fixed", top: '0', opacity: '1'
    });

*/

    return (
        <div className="SectionOne">
            <CanvasFirst />
            <div className="section_text">
                <h1>Projet fil-rouge</h1>
                <p>Projet phare du bachelor “web et mobile” aux Gobelins, l’école de l’image.
                    Son objectif : Offrir l'opportunité de valider les compétences acquises au cours de l’année.
                    <br/>
                    <br/>
                    Chaque étudiant est libre de traiter le domaine qu’il souhaite.
                    Seul ou en groupe, les participants disposent de plusieurs semaines pour établir, développer et présenter leurs
                    créations.</p>
            </div>
        </div>
    )
        ;
};

export default SectionOne;