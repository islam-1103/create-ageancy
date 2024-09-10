import React from "react";
import "./style.scss"
import rose from "../../assets/rose.png"

const People = () => {
    return (
        <section className="people">
            <div className="container">
                <div className="people__row">
                    <h4 className="people__subtitle">Testimonial</h4>
                    <h2 className="people__title">People Talk about us</h2>
                </div>
                <div className="people__content">
                    <div className="col-4 people__top">
                        <img className="people__image" src={rose} alt="" />
                        <h4 className="people__text">Angel Rose</h4>
                        <h5 className="people__txt">Creative Manager</h5>
                        <p className="people__description">There are many variations passages of Lorem 
                        Ipsum majority some by words which don't look . </p>
                    </div>
                    <div className="col-4 people__top">
                        <img className="people__image" src={rose} alt="" />
                        <h4 className="people__text">Angel Rose</h4>
                        <h5 className="people__txt">Creative Manager</h5>
                        <p className="people__description">There are many variations passages of Lorem 
                        Ipsum majority some by words which don't look . </p>
                    </div>
                    <div className="col-4 people__top">
                        <img className="people__image" src={rose} alt="" />
                        <h4 className="people__text">Angel Rose</h4>
                        <h5 className="people__txt">Creative Manager</h5>
                        <p className="people__description">There are many variations passages of Lorem 
                        Ipsum majority some by words which don't look . </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default People;