"use client"
import React, { Fragment } from "react";
import "@/style/header/submenu.css";

export default function SubMenu ({
    children,
    isOpen,
    subMenu,
} : {
    children: React.ReactNode,
    isOpen: boolean,
    subMenu?: Array<string>,
}) {

    const submenu = subMenu?.map((site: string, index) => {
        return (
            <div className="submenu-element" key={index}>
                {site}
            </div>
        );
    })

    return (
        <Fragment>
            {children}
            {
                isOpen && (subMenu !== undefined) && (
                    <div 
                        className="sub-menu"
                    >
                        {submenu}
                    </div>
                )
            }
        </Fragment>
    );
}