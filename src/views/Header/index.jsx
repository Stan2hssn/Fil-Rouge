import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./style.scss";

export default function Header({visible, one, two, three, top}) {

        const [progress, setProgress] = useState(0);
        const [progress2, setProgress2] = useState(0);
        const [progress3, setProgress3] = useState(0);

        let className = "sectionHeader";
        let innerProgress = "inner-progress";
        let innerProgress2 = "inner-progress";
        let innerProgress3 = "inner-progress";
        let distance = {top};
        let value;

        if (visible) {
            className += " visible";
        } else {
            className = "sectionHeader"
        }

        if (one) {
            innerProgress = "inner-progress end"
        } else {
            innerProgress = "inner-progress"
        }

        two ? (innerProgress2 = "inner-progress end") : (innerProgress2 = "inner-progress")

        three ? (innerProgress3 = "inner-progress end") : (innerProgress3 = "inner-progress")

        useEffect(() => {
            const scroller = document.querySelector('.rules');
            scroller.addEventListener("scroll", progressSection, {passive : true});
        })

        function progressSection() {


            if (visible) {
                value = (-distance.top * 100) / (window.innerHeight);
                setProgress(value > 100 ? 100 : value);
            }

            if (one) {
                value = ((-distance.top - window.innerHeight) * 100) / (window.innerHeight)
                setProgress2(value > 100 ? 100 : value)
            } else {

                setProgress2(0)
            }

            if (two) {
                value = ((-distance.top - (window.innerHeight * 2)) * 100) / (window.innerHeight)
                setProgress3(value > 100 ? 100 : value)
            } else {
                setProgress3(0)
            }

        }


    return (<>
        <div className={className}>
            <header>
                <Link className="logo" to="/"></Link>
                <nav>
                    <ul>
                        <li>
                            <div className="progress-bar">
                                <div className={innerProgress}
                                     style={{width: `${progress}%`,}}>
                                </div>
                            </div>
                            <Link to="/">Fil-rouge</Link>
                        </li>
                        <li>
                            <div className="progress-bar">
                                <div className={innerProgress2}
                                     style={{width: `${progress2}%`,}}>
                                </div>
                            </div>
                            <Link to="/">Liquid</Link>
                        </li>
                        <li>
                            <div className="progress-bar">
                                <div className={innerProgress3}
                                     style={{width: `${progress3}%`,}}>
                                </div>
                            </div>
                            <Link to="/">Cards</Link>
                        </li>
                    </ul>
                </nav>
                <Link className="discover" to="/Cards">
                    Discover
                </Link>
            </header>
        </div>
    </>);
}

