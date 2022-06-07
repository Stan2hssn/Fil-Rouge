import React from "react";
import SectionOne from "../../components/Home/Section_One/sectionOne";
import SectionTwo from "../../components/Home/Section_Two/sectionTwo";
import SectionThree from "../../components/Home/Section_Three/sectionThree";
import Header from "../../views/Header/index";
import "./style.scss";

export default function Sections({ visible, one, two, three, top }) {
  return (
    <section
      className="sections"
      style={{
        scrollSnapAlign: "start",
      }}
    >
      <Header visible={visible} one={one} two={two} three={three} top={top} />
      <SectionOne one={one} two={two} />
      <SectionTwo one={one} two={two} visible={visible} />
      <SectionThree two={two} />
      <div className="sections-wireframe">
        <div className="wireframe" /*ref={wire1}*/></div>
        <div className="wireframe" /*ref={wire2}*/></div>
        <div className="wireframe" /*ref={wire2}*/></div>
      </div>
    </section>
  );
}
