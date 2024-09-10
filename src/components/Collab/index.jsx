import React from "react";
import "./style.scss";
import Button from "../Button";
import persons from "../../assets/Collaboration.png"


const Collab = () => {
    return (
        <section className="collab">
            <div className="container">
                <div className="collab__row">
                    <div className="collab__link">
                        <h3 className="collab__title">
                            Interesting Collaboration With Us?
                        </h3>
                        <p className="collab__desc">
                            Help you to reach your business goal
                        </p>
                        <Button>Get Started</Button>
                    </div>
                    <div className="collab__content">
                        <img className="collab__image" src={persons} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collab;