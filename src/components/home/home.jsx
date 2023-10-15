import { Component } from "react";
import googleLogo from "../../images/Companies/Google.svg"
import airbngLogo from "../../images/Companies/Airbnb.svg"
import facebookLogo from "../../images/Companies/Facebook.svg"
import microsoftLogo from "../../images/Companies/Microsoft.svg"
import spotifyLogo from "../../images/Companies/Spotify.svg"

import facebookFooter from '../../images/socials/facebook.svg'
import instagramFooter from '../../images/socials/instagram.svg'
import pinterestFooter from '../../images/socials/pinterest.svg'
import tiktokFooter from '../../images/socials/tiktok.svg'
import twitterFooter from '../../images/socials/twitter.svg'
import whatsappFooter from '../../images/socials/whatsapp.svg'
import youtubeFooter from '../../images/socials/youtube.svg'

import pegLegge from "../../images/team/Peg_Legge.svg"
import richard from "../../images/team/Richard.svg"
import alexandra from "../../images/team/Alexandra.svg"
import janet from "../../images/team/Janet.svg"

import imageOne from "../../images/Home/image-1.svg"
import imageTwo from "../../images/Home/image-2.svg"
import imageThree from "../../images/Home/image-3.svg"
import "./home.css"

class Home extends Component {
    render() {
        return (
            <>
                <div className="hero">
                    <div className="navbar container">
                        <div className="navbar__logo">
                            <img src="src/images/Logo/LogoWhite.svg" alt="" className="navbar__logo--image" />
                            <div className="navbar__logo--text">Start</div>
                        </div>
                        <div className="navbar__menu hidden">
                            <a href="index.html" className="navbar__menu--1">Home</a>
                            <a href="portfolio.html" className="navbar__menu--2">Portfolio</a>
                            <a href="services.html" className="navbar__menu--3">Services</a>
                            <a href="contact.html" className="navbar__menu--4">Contact</a>
                        </div>

                        <div className="navbar__icons">
                            <i className="bi bi-list" onClick={this.openBtnHandler}></i>
                            <i className="bi bi-x-lg hide" onClick={this.closeBtnHandler}></i>
                        </div>
                    </div>
                    <div className="sectionOne container grid">
                        <div className="sectionOne__left flex">
                            <div className="sectionOne__left--label label text-white">welcome</div>
                            <div className="sectionOne__left--title common-title text-white">Lorem ipsum dolor sit amet consectetur.</div>
                            <div className="sectionOne__left--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laboriosam
                                aliquam est exercitationem quo reiciendis asperiores veritatis placeat porro earum? Libero tempora impedit
                                rerum
                                quae aspernatur nostrum quod fuga quasi.</div>
                            <button className="sectionOne__left--btn white-btn">Explore</button>
                        </div>
                        <img className="sectionOne__right responsive-image" src={imageOne} alt="" />
                    </div>
                </div>

                <div className="sectionTwo container">
                    <div className="sectionTwo__content text-center flex">
                        <div className="sectionTwo__content--label label text-green">partners</div>
                        <div className="sectionTwo__content--title common-title">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className="sectionTwo__content--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, porro?
                        </div>
                    </div>
                    <div className="sectionTwo__logo">
                        <img src={googleLogo} alt="" className="sectionTwo__logo--1 responsive-image" />
                        <img src={microsoftLogo} alt="" className="sectionTwo__logo--2 responsive-image" />
                        <img src={airbngLogo} alt="" className="sectionTwo__logo--3 responsive-image" />
                        <img src={facebookLogo} alt="" className="sectionTwo__logo--4 responsive-image" />
                        <img src={spotifyLogo} alt="" className="sectionTwo__logo--5 responsive-image" />
                    </div>
                    <button className="sectionTwo__btn dark-btn">Learn More</button>
                </div>

                <div className="sectionThree container grid">
                    <img className="sectionThree__left responsive-image" src={imageTwo} alt="" />
                    <div className="sectionThree__right flex">
                        <div className="sectionThree__right--title common-title">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className="sectionThree__right--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Impedit laboriosam
                            aliquam est exercitationem quo reiciendis asperiores veritatis placeat porro earum? Libero tempora impedit
                            rerum
                            quae aspernatur nostrum quod fuga quasi.</div>
                        <button className="sectionThree__right--btn dark-btn">Explore</button>
                    </div>
                </div>
                <div className="sectionFour container grid">
                    <div className="sectionFour__left flex">
                        <div className="sectionFour__left--title common-title">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className="sectionFour__left--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Impedit laboriosam
                            aliquam est exercitationem quo reiciendis asperiores veritatis placeat porro earum? Libero tempora impedit
                            rerum
                            quae aspernatur nostrum quod fuga quasi.</div>
                        <button className="sectionFour__left--btn dark-btn">Explore</button>
                    </div>
                    <img src={imageThree} alt="" className="sectionFour__right responsive-image" />
                </div>

                <div className="sectionFive container">
                    <div className="sectionFive__content text-center">
                        <div className="sectionFive__content--label label text-green">Teams</div>
                        <div className="sectionFive__content--title common-title">Our teams</div>
                        <div className="sectionFive__content--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
                            porro?
                        </div>
                    </div>
                    <div className="sectionFive__cards">
                        <div className="sectionFive__cards--1">
                            <img className="responsive-image" src={pegLegge} alt="" />
                            <div className="name">Peg Legge</div>
                            <div className="position">CEO</div>
                        </div>
                        <div className="sectionFive__cards--2">
                            <img className="responsive-image" src={richard} alt="" />
                            <div className="name">Richard Guerra</div>
                            <div className="position">CTO</div>
                        </div>
                        <div className="sectionFive__cards--3">
                            <img className="responsive-image" src={alexandra} alt="" />
                            <div className="name">Alexandra Stolz</div>
                            <div className="position">Designer</div>
                        </div>
                        <div className="sectionFive__cards--4">
                            <img className="responsive-image" src={janet} alt="" />
                            <div className="name">Janet Bray</div>
                            <div className="position">developer</div>
                        </div>
                    </div>
                    <button className="sectionFive__btn dark-btn">View Team</button>
                </div>

                <div className="footerWrapper">
                    <div className="footerLinks container">
                        <div className="footerLinks__socials">
                            <img src={facebookFooter} alt="" className="footerLinks__socials--1" />
                            <img src={instagramFooter} alt="" className="footerLinks__socials--2" />
                            <img src={twitterFooter} alt="" className="footerLinks__socials--3" />
                            <img src={pinterestFooter} alt="" className="footerLinks__socials--4" />
                            <img src={tiktokFooter} alt="" className="footerLinks__socials--5" />
                            <img src={whatsappFooter} alt="" className="footerLinks__socials--6" />
                            <img src={youtubeFooter} alt="" className="footerLinks__socials--7" />
                        </div>
                        <div className="footerLinks__copyright text-white text-center">© Start, 2022. All rights reserved.</div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home