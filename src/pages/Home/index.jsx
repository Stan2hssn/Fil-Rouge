import React from "react";
import Data from "./data";
import HeaderHero from "../../components/Home/HeaderHero/index";
import Sphere from "../../components/Spheres/sphere";
import Sections from "./Sections";
import CardHero from "../../components/Card_hero/CardHero";
import Discover from "../../components/Discover";
import { motion } from "framer-motion";
import "./style.scss";

export default function Home() {
  function scrollAbout() {
    console.log("hello");
  }

  return (
    <motion.div
      className="rules"
      initial={{ y: 0, x: window.innerWidth, transition: { duration: 0.5 } }}
      animate={{ y: 0, x: 0, transition: { duration: 0.5 } }}
      exit={{
        y: 0,
        x: -window.innerWidth,
        transition: { duration: 0.5 },
      }}
    >
      <section
        style={{
          scrollSnapAlign: "start",
        }}
        id="Hero"
      >
        <HeaderHero />
        <section className="row">
          <section className="illustration_wrapper">
            <CardHero data={Data.card.first} />
            <Sphere data={Data.sphere.three} />
            <CardHero data={Data.card.two} />
            <Sphere data={Data.sphere.first} />
            <CardHero data={Data.card.three} />
            <Sphere data={Data.sphere.two} />
            <Discover />
          </section>
          <div className="text">
            <div className="title-group">
              <h1 className="title">LIQUID, Plus qu’une Solution,</h1>
              <h1 className="title">une Résolution</h1>
            </div>
            <p>
              <span className="red">LIQUID</span>, l'appli pratique, ludique et
              design pour vos <span className="red">cartes</span>.
              <br />
              En un clic, dématérialisez, stockez, classez, toutes vos cartes en
              lieu sûr. <br />
              En un geste, retrouvez, présentez ou payez.
              <br />
              <br />
              Un seul numéro d’identification pour un accès rapide et sécurisé.{" "}
              <br />
              <span className="red">LIQUID</span> est un outil qui stocke en
              ligne, de manière sécurisée, les versions numériques de toutes vos
              cartes dans un style élégant et tendance.
            </p>
          </div>
        </section>
        <div onClick={scrollAbout} className="aboutUs">
          <div>About us</div>
          <div className="arrow"></div>
        </div>
      </section>

      <Sections />
    </motion.div>
  );
}
