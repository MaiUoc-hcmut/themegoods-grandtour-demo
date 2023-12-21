"use client"
import React, { Fragment, useState, useEffect } from "react";
import { UpOutlined } from "@ant-design/icons";
import "@/style/back-to-top/back-to-top.css";


export default function BackToTop() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
    return (
        <Fragment>
            {
                isVisible && (
                    <div 
                        className="container"
                        id="back-to-top-button"
                        onClick={scrollToTop}
                    >
                        <UpOutlined 
                        />
                    </div>
                )
            }
        </Fragment>
    );
}