import React from "react";
import {Link} from "react-router-dom";
import "./style.scss";

export default function Header({visible}) {

    let className = 'sectionHeader'

    if (visible) {
        className += ' visible';
    } else {
        className = 'sectionHeader'
    }

    return (
        <>
            <div className={className}>
                <header>
                    <Link className="logo" to="/"></Link>
                    <nav>
                        <ul>
                            <li>
                                <div className="progress-bar">
                                    <div className="inner-progress"></div>
                                </div>
                                <Link to="/">Fil-rouge</Link>
                            </li>
                            <li>
                                <div className="progress-bar">
                                    <div className="inner-progress"></div>
                                </div>
                                <Link to="/">Liquid</Link>
                            </li>
                            <li>
                                <div className="progress-bar">
                                    <div className="inner-progress"></div>
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
        </>
    );
}

