import React from "react";
import "./style.scss"
import sublogo from "../../assets/sublogo.png"
import twitter from "../../assets/twitter.svg"
import instagram from "../../assets/instagram.svg"
import mail from "../../assets/mail.svg"
import facebook from "../../assets/facebook.svg"
import inked from "../../assets/linkedin.svg"


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__image">
                        <img src={sublogo} alt="" />
                    </div>
                    <div className="footer__item">
                        <ul className="footer__link">
                            <li className="footer__title">Terms & policies</li>
                            <li className="footer__text">Terms of Service</li>
                            <li className="footer__text">Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="footer__item">
                        <ul className="footer__link">
                            <li className="footer__title">Company</li>
                            <li className="footer__text">Home</li>
                            <li className="footer__text">About Us</li>
                            <li className="footer__text">Contact Us</li>
                        </ul>
                    </div>
                    <div className="footer__item">
                        <ul className="footer__link">
                            <li className="footer__title">Contact</li>
                            <li className="footer__text">(+62) 893912392190</li>
                            <li className="footer__text">agecnycr@gmail.com</li>
                        </ul>
                    </div>
                    <div className="footer__item">
                        <ul className="footer__link">
                            <li className="footer__title">Location</li>
                            <li className="footer__text">PT Osiris Real Estate Internasional</li>
                            <li className="footer__text">Jl. KH. Wahid Hasyim Kel No.10D</li>
                            <li className="footer__text">Jakarta, Indonesia</li>
                            <li className="footer__text">team@OsirisRealEstate.com</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__social">
                    <ul>
                        <li className=""><a href=""><img src={facebook} alt="" /></a></li>
                        <li className=""><a href=""><img src={instagram} alt="" /></a></li>
                        <li className=""><a href=""><img src={inked} alt="" /></a></li>
                        <li className=""><a href=""><img src={mail} alt="" /></a></li>
                        <li className=""><a href=""><img src={twitter} alt="" /></a></li>
                    </ul>
                </div>
                <hr className="footer__line" />
                <h4 className="footer__txt">Copyright @ 2022 Agency Creative. All Right Reserved</h4>
            </div>
        </footer>
    )
}

export default Footer;