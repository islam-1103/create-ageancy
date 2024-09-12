import React from "react";
import photoone from "../../assets/photo-1.png";
import phototwo from "../../assets/photo-2.png";
import photothree from "../../assets/photo-3.png";
import Button from "../Button";
import "./style.scss";


const Photo = () => {
    return (
        <section className="photo">
            <div className="container">
                <div className="photo__row">
                    <div className="photo__link">
                        <h4 className="photo__subtitle">
                            Our Portfolio
                        </h4>
                        <h2 className="photo__title">
                            What do we do
                        </h2>
                        <p className="photo__description">
                            all projects that we have already done ,
                            proven can help to use more comfortable,
                            then can used by client from our business
                        </p>
                        <h5 className="photo__one">

                        </h5>
                    </div>
                </div>
                <div className="photo__collag">
                    <div className="photo__column">
                        <img src={photoone} alt="" />
                        <h4>Design Byte App</h4>
                    </div>
                    <div className="photo__column">
                        <img src={phototwo} alt="" />
                        <h4>Cloud App</h4>
                    </div>
                    <div className="photo__column">
                        <img src={photothree} alt="" />
                        <h4>Design Furniture App</h4>
                    </div>
                </div>
                <Button className="outline photo__click">See All Portfolio</Button>

            </div>
        </section>
    )
}

export default Photo