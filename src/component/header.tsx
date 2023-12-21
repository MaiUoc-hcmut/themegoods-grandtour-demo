"use client"
import React, { Fragment, useState, useEffect } from "react";
import DropdownMenu from "./dropdown-menu/dropdown";
import { DownOutlined, MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "@/style/header/header.css";


export default function Header({
    setIsSidebarOpen,
    isVisible,
}: {
    setIsSidebarOpen: (value: boolean) => void,
    isVisible: boolean,
}) {
    const [hoveredElement, setHoveredElement] = useState<string>("");

    const isElementHovered = (element: string) => {
        return element === hoveredElement;
    };

    const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
    const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
    const [bgColor, setBgColor] = useState<string>("");

    // Hiển thị hoặc ẩn header khi cuộn
    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const w = window.innerWidth;
        const visible = (prevScrollPos > currentScrollPos) || (w < 780);

        const color = (window.scrollY > 300 && isVisible) ? "white" : "";

        setIsHeaderVisible(visible);
        setPrevScrollPos(currentScrollPos);
        setBgColor(color);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos, isHeaderVisible, handleScroll]);

    return (
        <Fragment>
            <div 
                id="header"
                style={{
                    top: (isHeaderVisible ? 0 : -80) || (isVisible ? 0 : -80),
                    backgroundColor: bgColor,
                    transition: "top 0.5s, background-color 0.5s",
                }}
            >
                <div className="home-link">
                    <a href="/">
                        <img 
                            src={
                                bgColor === "white" ? 
                                "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x.png" :
                                "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png"
                            } 
                            alt="Home Link" 
                            width={92}
                            height={22}
                            data-lazy-src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x.png"
                            data-ll-status="loaded"
                        />
                    </a>
                </div>

                <div className="nav-bar-container">
                    <div className={`nav-bar ${bgColor !== "white" ? "nav-bar-white" : ""}`}>
                        <a 
                            onMouseEnter={() => setHoveredElement("home")}
                            onMouseLeave={() => setHoveredElement("")}
                            href="https://themes.themegoods.com/grandtour/demo/"
                        >
                            <DropdownMenu 
                                isOpen={isElementHovered("home")}
                                menu={[
                                    {key: "Home 1 - Background Image"},
                                    {key: "Home 2 - Youtube Video"},
                                    {key: "Home 3 - Google Inspired"},
                                    {key: "Home 4 - Travel Site"}
                                ]}
                            >
                                <p>Home</p>
                                <DownOutlined style={{ marginLeft: 10, fontSize: 9 }} />
                            </DropdownMenu>
                        </a>
                        <a
                            onMouseEnter={() => setHoveredElement("tours")}
                            onMouseLeave={() => setHoveredElement("")}
                        >
                            <DropdownMenu 
                                isOpen={isElementHovered("tours")}
                                menu={[
                                    {
                                        key: "Tour Classic Fullwidth",
                                        subMenu: ["2 Columns", "3 Columns", "4 Columns"]
                                    },
                                    {
                                        key: "Tour Classic Sidebar",
                                        subMenu: ["Right Sidebar", "Left Sidebar"]
                                    },
                                    {
                                        key: "Tour Grid Fullwidth",
                                        subMenu: ["2 Columns", "3 Columns", "4 Columns"]
                                    },
                                    {
                                        key: "Tour Grid Sidebar",
                                        subMenu: ["Right Sidebar", "Left Sidebar"]
                                    },
                                    {
                                        key: "Tour List Sidebar",
                                        subMenu: ["Right Sidebar", "Left Sidebar"]
                                    },
                                    {
                                        key: "Tour Header Type",
                                        subMenu: ["Featured Image", "Video"]
                                    },
                                    {
                                        key: "Tour Categories",
                                        subMenu: ["Rural", "Snow & Ice", "Wildlife", "Moutain"]
                                    }
                                ]}
                            >
                                <p>Tours</p>
                                <DownOutlined style={{ marginLeft: 10, fontSize: 9 }} />
                            </DropdownMenu>
                        </a>
                        <a
                            onMouseEnter={() => setHoveredElement("booking")}
                            onMouseLeave={() => setHoveredElement("")}
                        >
                            <DropdownMenu 
                                isOpen={isElementHovered("booking")}
                                menu={[
                                    {
                                        key: "Online Payment for Booking",
                                        subMenu: ["Variable Tour Pricing", "Simple Tour Pricing"]
                                    },
                                    {
                                        key: "Custom Booking Form",
                                        subMenu: ["Booking Form + Sub Tour Date", "Booking Form + Custom Date"]
                                    },
                                    {
                                        key: "Tour Durations",
                                        subMenu: ["Single Day Tour", "Multiple Days Tour"]
                                    },
                                    {key: "Custom Booking URL for Affiliate Tour"},
                                    {key: "Custom Booking using custom HTML & Shortcode"},
                                    {
                                        key: "Header Options",
                                        subMenu: ["Standard Background Header", "Video Background Header"]
                                    },
                                    {
                                        key: "Layout Options",
                                        subMenu: ["With Sidebar", "Fullwidth"]
                                    }
                                ]}
                            >
                                <p>Booking</p>
                                <DownOutlined style={{ marginLeft: 10, fontSize: 9 }} />
                            </DropdownMenu>
                        </a>
                        <a
                            onMouseEnter={() => setHoveredElement("destination")}
                            onMouseLeave={() => setHoveredElement("")}
                        >
                            <DropdownMenu 
                                isOpen={isElementHovered("destination")}
                                menu={[
                                    {key: "Destination Fullwidth"},
                                    {key: "Destination + Video Header"},
                                    {key: "Destination Right Sidebar"},
                                    {key: "Destination Left Sidebar"},
                                    {key: "Single Destination"},
                                    {key: "Single Destination + Video"}
                                ]}
                            >
                                <p>Destination</p>
                                <DownOutlined style={{ marginLeft: 10, fontSize: 9 }} />
                            </DropdownMenu>
                        </a>
                        <a
                            onMouseEnter={() => setHoveredElement("pages")}
                            onMouseLeave={() => setHoveredElement("")}
                        >
                            <DropdownMenu 
                                isOpen={isElementHovered("pages")}
                                menu={[
                                    {key: "About Us"},
                                    {key: "Contact Us"},
                                    {key: "FAQs"},
                                    {key: "Gallery"},
                                    {key: "Page Fullwidth"},
                                    {key: "Page + Video Background Header"},
                                    {key: "Page Right Header"},
                                    {key: "Page Left Header"}
                                ]}
                            >
                                <p>Pages</p>
                                <DownOutlined style={{ marginLeft: 10, fontSize: 9 }} />
                            </DropdownMenu>
                        </a>
                        <a
                            onMouseEnter={() => setHoveredElement("blog")}
                            onMouseLeave={() => setHoveredElement("")}
                        >
                            <DropdownMenu 
                                isOpen={isElementHovered("blog")}
                                menu={[
                                    {key: "Blog Right Sidebar"},
                                    {key: "Blog Left Sidebar"},
                                    {key: "Blog Fullwidth"},
                                    {key: "Blog Grid Right Sidebar"},
                                    {key: "Blog Grid Left Sidebar"},
                                    {key: "Blog Grid Fullwidth"},
                                    {key: "Blog Full + Grid Right Sidebar"},
                                    {key: "Blog Full + Grid Left Sidebar"},
                                    {key: "Blog Full + Grid Fullwidth"}
                                ]}
                            >
                                <p>Blog</p>
                                <DownOutlined style={{ marginLeft: 10, fontSize: 9 }} />
                            </DropdownMenu>
                        </a>
                        <a
                            onMouseEnter={() => setHoveredElement("shortcodes")}
                            onMouseLeave={() => setHoveredElement("")}
                        >
                            <DropdownMenu 
                                isOpen={isElementHovered("shortcodes")}
                                menu={[
                                    {key: "Accordion & Toggles"},
                                    {key: "Alert Boxes"},
                                    {key: "Animated Content"},
                                    {key: "Buttons & Social Icons"},
                                    {key: "Columns"},
                                    {key: "Google Maps"},
                                    {key: "Image Frame & Animation"},
                                    {key: "Image Teasers"},
                                    {key: "Pricing Tables"},
                                    {key: "Tabs"}
                                ]}
                            >
                                <p>Shortcodes</p>
                                <DownOutlined style={{ marginLeft: 10, fontSize: 9 }} />
                            </DropdownMenu>
                        </a>
                        <a
                            onMouseEnter={() => setHoveredElement("shop")}
                            onMouseLeave={() => setHoveredElement("")}
                        >
                            <DropdownMenu 
                                isOpen={isElementHovered("shop")}
                                menu={[
                                    {key: "Shop Fullwidth"},
                                    {key: "Shop Sidebar"},
                                    {key: "Shop Product Fullwidth"},
                                    {key: "Shop Product With Sidebar"}
                                ]}
                            >
                                <p>Shop</p>
                                <DownOutlined style={{ marginLeft: 10, fontSize: 9 }} />
                            </DropdownMenu>
                        </a>
                        <div className="logo-icon">
                            <MenuOutlined 
                                className="icon menu-icon" 
                                onClick={() => setIsSidebarOpen(true)}
                            />
                            <ShoppingCartOutlined className="icon cart-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
