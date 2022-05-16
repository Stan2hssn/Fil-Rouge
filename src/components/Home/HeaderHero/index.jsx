import React from "react";
import {Link} from "react-router-dom";
import "./style.scss";

class HeaderHero extends React.Component {

    render() {

        return (
            <>
                <div className="position">
                    <header>
                        <Link className="logo" to="/"></Link>
                    </header>
                </div>
            </>
        );
    }
}

export default HeaderHero;
