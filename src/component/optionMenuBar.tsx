"use client"
import React, { Fragment, useEffect, useState } from "react";
import { SettingOutlined, HeartOutlined, ReadOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "@/style/menubar/menubar.css";

export default function OptionMenuBar({
    state,
    setOpen,
}: {
    state: boolean,
    setOpen: (value: boolean) => void,
}) {

    const [w, setW] = useState(0);
    useEffect(() => {
        handleResize();
    }, [])

    const handleResize = () => {
        setW(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    return (
        <Fragment>
            <div 
                className={`menu-bar-wrapper ${state ? "open" : "close"} ${w < 780 ? "hide" : ""}`}
            >
                <div 
                    className="option-menu-icon-container"
                    data-title="Choose Theme Styling"
                    onClick={() => setOpen(!state)}
                >
                    <SettingOutlined />
                </div>
                <div 
                    className="option-menu-icon-container"
                    data-title="Showcase"
                >
                    <a 
                        href=""
                        className="option-menu-icon"
                    >
                        <HeartOutlined />
                    </a>
                </div>
                <div 
                    className="option-menu-icon-container"
                    data-title="Theme Documentation"
                >
                    <a 
                        href=""
                        className="option-menu-icon"
                    >
                        <ReadOutlined />
                    </a>
                </div>
                <div 
                    className="option-menu-icon-container"
                    data-title="Purchase Theme"
                >
                    <a 
                        href=""
                        className="option-menu-icon"
                    >
                        <ShoppingCartOutlined />
                    </a>
                </div>
            </div>
        </Fragment>
    );
}