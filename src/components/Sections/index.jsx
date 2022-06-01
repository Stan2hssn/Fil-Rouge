import React, {useState, useEffect, useRef} from 'react';
import SectionOne from "../../components/Home/Section_One/sectionOne";
import SectionTwo from "../../components/Home/Section_Two/sectionTwo";
import SectionThree from "../../components/Home/Section_Three/sectionThree";
import Header from "../../views/Header/index"

import "./style.scss"


export default function Sections({visible, one, two, three}) {

    return (
        <section className="sections" style={{
            scrollSnapAlign: "start",
        }}>


            <Header visible={visible}/>


            <SectionOne one={one}/>


            <SectionTwo one={one} two={two} visible={visible}/>

            <SectionThree three={three}/>

                <div className="sections-wireframe">
                    <div className="wireframe" /*ref={wire1}*/>1</div>
                    <div className="wireframe" /*ref={wire2}*/>2</div>
                </div>

        </section>
    );
};
