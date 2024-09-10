import React from "react";
import Button from "../Button";
import arrow from "../../assets/arrow.svg";
import monitor from "../../assets/monitor.svg";
import tv from "../../assets/tv.svg";
import settings from "../../assets/settings.svg";
import pen from "../../assets/pen-tool.svg"
import "./style.scss";



const Services = () => {
    return (
        <section className="services">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h5 className="services__subtitle">
                            Our Services
                        </h5>
                        <h2 className="services__title">
                            Perfect and Fast
                            Movement
                        </h2>
                        <p className="services__description">
                            We move with make a Creative Strategy for help your business goal,
                            we help to improve your income by a services we have.
                            make your content look interesting and make people look for your business
                        </p>
                        <a className="services__link" href="#">
                            <span>Read more</span>
                            <img src={arrow} alt="" />
                        </a>
                    </div>
                    <div className="col-6 row">
                        <div className="col-6 services__item">
                            <div className="services__icon white">
                                <img src={monitor} alt="" />
                            </div>
                            <h4 className="services__item-title">Social Media
                                Management</h4>
                        </div>
                        <div className="col-6 services__item">
                            <div className="services__icon red">
                                <img src={settings} alt="" />
                            </div>
                            <h4 className="services__item-title">Search Engine
                                Opimization</h4>
                        </div>
                        <div className="col-6 services__item">
                            <div className="services__icon green">
                                <img src={pen} alt="" />
                            </div>
                            <h4 className="services__item-title">Design</h4>
                        </div>
                        <div className="col-6 services__item">
                            <div className="services__icon yellow">
                                <img src={tv} alt="" />
                            </div>
                            <h4 className="services__item-title">Ads</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;