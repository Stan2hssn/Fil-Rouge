import React, { useEffect, useRef, useState } from "react";
import Sections from "../../components/Sections/index";
import "./style.scss";

export default function Home() {
  const section1Ref = useRef();
  const section2Ref = useRef();

  const [visible, setVisible] = useState(false);
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const scroller = document.querySelector(".rules");
    scroller.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  function handleScroll() {
    const section2offsetYTop = section2Ref.current.getBoundingClientRect().top;
    const section = section2Ref.current.getBoundingClientRect().height;

    setTop(section2offsetYTop);

    if (section2offsetYTop <= 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    if (section2offsetYTop <= -section) {
      setOne(true);
    } else {
      setOne(false);
    }

    if (section2offsetYTop <= -section * 2) {
      setTwo(true);
    } else {
      setTwo(false);
    }

    if (section2offsetYTop <= -section * 3) {
      setThree(true);
    } else {
      setThree(false);
    }
  }

  return (
    <>
      <Sections visible={visible} one={one} two={two} three={three} top={top} />

      <div style={{ position: "fixed", background: "red", top: 0 }}></div>
      <section className="snap-y">
        <div className="wireframe-home hero-section" ref={section1Ref}>
          <div className="min-h-screen">1</div>
        </div>
        <div className="wireframe-home sections" ref={section2Ref}></div>
      </section>
    </>
  );
}
