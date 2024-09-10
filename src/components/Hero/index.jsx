import React from "react";
import Button from "../Button";
import "./style.scss"
import Poster from "../../assets/hero.png"
import star from "../../assets/star.svg"
import people from "../../assets/peple-hero.svg"

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content">
                    <h1 className="hero__title">
                        Make your dream
                        business goal come true
                    </h1>
                    <p className="hero__text">
                        when you need us for improve your business,
                        then come with us to help your business have reach it, you just sit and feel that goal
                    </p>
                    <Button>Start Project</Button>
                </div>
                <div className="hero__poster">
                    <img src={Poster} alt="" />

                    <div className="hero__projects">
                        <div className="hero__star">
                            <img src={star} alt="" />
                            <span>Great Project</span>
                        </div>
                        <span className="hero__done">800+ Done</span>
                    </div>
                    <div className="hero__people">
                        <div className="hero__block">
                            <div className="hero__image">
                                <img src={people} alt="" />
                            </div>
                            <div className="hero__litletext">
                                <h5>Bill Adams</h5>
                                <span>CEO UpTech</span>
                            </div>
                        </div>
                        <p className="hero__desc">“ This team is really the best in its field,
                            I don't regret working with them, and will come back again thanks “</p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Hero;