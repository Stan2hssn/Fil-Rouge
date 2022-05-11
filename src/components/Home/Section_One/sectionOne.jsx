import React from 'react';
import './style.scss';
import CanvasFirst from '../../Three/canvasFirst'

const SectionOne = () => {
    return (
        <div className="SectionOne">
            <CanvasFirst />
            <div className="text">
                <h1>Projet fil-rouge</h1>
                <p>Projet phare du bachelor “web et mobile” des étudiants de Gobelins, l’école de l’image.
                    Il a pour objectif d’offrir une opportunitée afin de valider ses compétences acquises au cours de
                    l’année.
                    <br/>
                    <br/>
                    Chaque étudiant est libre de traiter le domaine qu’il souhaite, seul ou en groupe les participants
                    disposent de plusieurs semaines pour établir, développer et présenter leurs créations.</p>
            </div>
        </div>
    )
        ;
};

export default SectionOne;