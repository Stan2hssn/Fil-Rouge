import React from 'react';
import './style.scss';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import scrollDetector from 'scroll-detector';
import CanvasFirst from '../../Three/canvasFirst'

const SectionOne = () => {

        function transitionToSection() {
            console.log("hleo")
            gsap.to('h1', {
                scrollTrigger: {
                    trigger: '.root',
                    start: '300 top',
                    end: '300 top',
                    markers: true,
                    scrub: true,
                    toggleClass: "active",
                    toggleActions: "play none none reverse"
                }
            });
        }

        transitionToSection();

        return (
            <div className="SectionOne">
                <CanvasFirst/>
                <div className="section_text">
                    <h1 className="title">Projet fil-rouge</h1>
                    <p className='body'>Projet phare du bachelor “web et mobile” aux Gobelins, l’école de l’image.
                        Son objectif : Offrir l'opportunité de valider les compétences acquises au cours de l’année.
                        <br/>
                        <br/>
                        Chaque étudiant est libre de traiter le domaine qu’il souhaite.
                        Seul ou en groupe, les participants disposent de plusieurs semaines pour établir, développer et
                        présenter leurs
                        créations.</p>
                </div>
            </div>
        )
            ;
    }
;

export default SectionOne;