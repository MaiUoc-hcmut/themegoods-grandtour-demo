"use client"
import React, { Fragment, useState } from "react";
import { RightOutlined } from "@ant-design/icons";
import SubMenu from "./submenu";
import "@/style/header/dropdown-menu.css";

interface elementMenuData {
    key: string,
    subMenu?: Array<string>
}


export default function DropdownMenu({
    children,
    isOpen,
    menu,
}: {
    children: React.ReactNode,
    isOpen: boolean,
    menu: Array<elementMenuData>
}) {

    const [hoveredElement, setHoveredElement] = useState<string>("");

    const isElementHovered = (element: string) => {
        return element === hoveredElement;
    };

    const dropdownMenu = menu.map((site: elementMenuData) => {
        return (
            <div 
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
                onMouseEnter={() => setHoveredElement(site.key)}
                onMouseLeave={() => setHoveredElement("")}
                className="dropdown-element"
                key={site.key}
            >
                <SubMenu
                    isOpen={isElementHovered(site.key)}
                    subMenu={site.subMenu}
                >
                    {site.key}
                    { (site.subMenu !== undefined) && (
                        <RightOutlined style={{ fontSize: 8 }} />
                    )}
                </SubMenu>
            </div>
        );
    })

    return (
        <Fragment>
            {children}
            {
                isOpen && (
                    <div className="dropdown">
                        {dropdownMenu}
                    </div>
                )
            }
        </Fragment>
    );
}

