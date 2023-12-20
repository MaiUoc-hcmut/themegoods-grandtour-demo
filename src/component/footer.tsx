import React, { Fragment } from "react";
import { TwitterOutlined, YoutubeOutlined, InstagramOutlined, RedditCircleFilled } from "@ant-design/icons";
import "@/style/footer/footer.css";

export default function Footer() {
    return (
        <Fragment>
            <div className="footer-wrapper">
                <div className="footer-container">
                    <div className="footer-ppb-wrapper">
                        <div className="award-list footer-wrapper-child">
                            <h2>Our Awards</h2>
                            <div className="awards-description detail-child">
                                <p>London is a megalopolis of people, 
                                    ideas and frenetic energy. 
                                    The capital and largest city of the United Kingdom.
                                </p>
                            </div>
                            <div className="awards-gained">
                                <img src="/image/awards.png" alt="Awards" />
                            </div>
                        </div>
                        <div className="contact-info footer-wrapper-child">
                            <h2>Contact Info</h2>
                            <div className="detail-info detail-child">
                                <div className="phone-number">
                                    1-567-124-44227
                                </div>
                                <div className="address">
                                    184 Main Street East Perl Habour 8007
                                </div>
                                <div className="operation-time">
                                    Mon - Sat 8.00 - 18.00 Sunday CLOSED
                                </div>
                            </div>
                            <div className="footer-social-network-menu-container">
                                <div className="footer-social-network-menu">
                                    <div className="footer-social-icon-container footer-facebook">
                                        <a 
                                            href="https://www.facebook.com/"
                                            className="footer-social-network-icon"
                                        >
                                            <img src="/icon/facebook.png" alt="facebook icon" />
                                        </a>
                                    </div>
                                    <div className="footer-social-icon-container footer-X">
                                        <a 
                                            href="https://twitter.com/"
                                            className="footer-social-network-icon"
                                        >
                                            <img src="/icon/twitter.png" alt="twitter icon" />
                                        </a>
                                    </div>
                                    <div className="footer-social-icon-container footer-utube">
                                        <a 
                                            href="https://www.youtube.com/"
                                            className="footer-social-network-icon"
                                        >
                                            <img src="/icon/youtube.png" alt="youtube icon" />
                                        </a>
                                    </div>
                                    <div className="footer-social-icon-container footer-insta">
                                        <a 
                                            href="https://www.instagram.com/"
                                            className="footer-social-network-icon"
                                        >
                                            <img src="/icon/instagram.png" alt="instagram icon" />
                                        </a>
                                    </div>
                                    <div className="footer-social-icon-container footer-reddit">
                                        <a 
                                            href="https://www.reddit.com/"
                                            className="footer-social-network-icon"
                                        >
                                            <img src="/icon/pinterest.png" alt="pinterest icon" style={{borderRadius: "50%"}} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="recent-trips footer-wrapper-child">
                            <h2>Recent Trips</h2>
                            <div>
                                <ul className="footer-trip-list">
                                    <li>
                                        <img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="" />
                                    </li>
                                    <li>
                                        <img src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg" alt="" />
                                    </li>
                                    <li>
                                        <img src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg" alt="" />
                                    </li>
                                    <li>
                                        <img src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg" alt="" />
                                    </li>
                                    <li>
                                        <img src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg" alt="" />
                                    </li>
                                    <li>
                                        <img src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg" alt="" />    
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bar-wrapper">
                        <div className="copyright">
                            © Copyright Grand Tour Theme Demo - Theme by ThemeGoods
                        </div>
                        <div className="footer-nav-menu">
                            <a href="/">
                                Home
                            </a>
                            <a href="https://themes.themegoods.com/grandtour/demo/tours/">
                                Tours
                            </a>
                            <a href="https://themes.themegoods.com/grandtour/demo/blog/">
                                Blog
                            </a>
                            <a href="/">
                                Purchase
                            </a>
                            <a href="/">
                                Theme
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}