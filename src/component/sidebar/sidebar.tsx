import React, { Fragment } from "react";
import SidebarTripCard from "../card/sidebar-trip";
import { FacebookFilled, TwitterOutlined, YoutubeOutlined, InstagramOutlined, RedditOutlined } from "@ant-design/icons";
import '@/style/sidebar/sidebar.css';

export default function SideBar({
    onClose,
    isVisible,
}: {
    onClose: () => void,
    isVisible: boolean
}) {
    const handleClose = (e: any) => {
        if (e.target.id === 'wrapper') onClose(); 
    }

    return (
        <Fragment>
            <div 
                className={`sidebar-wrapper ${isVisible ? "visible" : "hidden"}`}
                id="wrapper"
                onClick={handleClose}
            >
            </div>
            <div className={`sidebar-container ${isVisible ? 'open' : 'close'}`}>
                <div className="sidebar-close-button-container">
                    <div 
                        className="sidebar-close-button"
                        onClick={onClose}
                    >
                        <div className="cross"></div>
                    </div>
                </div>
                <div className="sidebar-nav-menu">
                    <a>Home</a>
                    <a>Tours</a>
                    <a>Booking</a>
                    <a>Destinations</a>
                    <a>Pages</a>
                    <a>Blog</a>
                    <a>Shortcodes</a>
                    <a>Shop</a>
                </div>
                <div className="sidebar-rec-tour">
                    <SidebarTripCard 
                        price={3900} 
                        name="Swiss Alps Trip" 
                        rating={4} 
                        image="/image/apls-mountain.jpg" 
                        altImage="Mountain in Swiss" 
                    />
                    <SidebarTripCard 
                        price={4900} 
                        newPrice={4200} 
                        name="5 Lake of Fuji San" 
                        rating={4} 
                        image="/image/lake-in-fuji.jpg" 
                        altImage="Forest in Fuji Mountain" 
                    />
                </div>
                {/* <div className="sidebar-social-menu">
                    <div>
                        <a 
                            href="https://www.facebook.com/"
                            className="social-network-icon"
                        >
                            <FacebookFilled />
                        </a>
                    </div>
                    <div>
                        <a 
                            href="https://twitter.com/"
                            className="social-network-icon"
                        >
                            <TwitterOutlined />
                        </a>
                    </div>
                    <div>
                        <a 
                            href="https://www.youtube.com/"
                            className="social-network-icon"
                        >
                            <YoutubeOutlined />
                        </a>
                    </div>
                    <div>
                        <a 
                            href="https://www.instagram.com/"
                            className="social-network-icon"
                        >
                            <InstagramOutlined />
                        </a>
                    </div>
                    <div>
                        <a 
                            href="https://www.reddit.com/"
                            className="social-network-icon"
                        >
                            <RedditOutlined />
                        </a>
                    </div>
                </div> */}
                <ul className="sidebar-social-menu">
                    <li>
                        <a 
                            href="https://www.facebook.com/"
                            className="social-network-icon"
                        >
                            <FacebookFilled />
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://twitter.com/"
                            className="social-network-icon"
                        >
                            <TwitterOutlined />
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://www.youtube.com/"
                            className="social-network-icon"
                        >
                            <YoutubeOutlined />
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://www.instagram.com/"
                            className="social-network-icon"
                        >
                            <InstagramOutlined />
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://www.reddit.com/"
                            className="social-network-icon"
                        >
                            <RedditOutlined />
                        </a>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
}