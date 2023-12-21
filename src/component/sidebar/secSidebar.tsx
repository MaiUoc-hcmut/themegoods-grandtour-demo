import React, { Fragment } from "react";
import DemoThumbnail from "../demo-thumbnails/demothumbnail";
import "@/style/sidebar/sec-sidebar.css";


export default function SecondarySidebar({
    isVisible,
}: {
    isVisible: boolean,
}) {
    return (
        <Fragment>
            <div className={`secondary-sidebar-wrapper ${isVisible ? "open" : "close"}`}>
                <div className="secondary-sidebar-container">
                    <div className="secondary-sidebar-child" id="create-grand-tour">
                        <div className="create-grand-tour-child">
                            <h4>Created With Grand Tour</h4>
                            <p className="description-sec-sidebar">
                                We designed Grand Tour theme to make it works especially for tour & travel site. 
                                Here are a few included examples that you can import with one click.
                            </p>
                            <div className="demo-tour">

                            </div>
                        </div>
                        <div className="create-grand-tour-child thumbnail">
                            <div className="demo-thumbnail">
                                <DemoThumbnail 
                                    name="Demo 1"
                                    image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling1.jpg"
                                    url="https://themes.themegoods.com/grandtour/demo/"
                                />
                            </div>
                            <div className="demo-thumbnail">
                                <DemoThumbnail 
                                    name="Demo 2"
                                    image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/demo2.jpg"
                                    url="https://themes.themegoods.com/grandtour/demo2/"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="secondary-sidebar-child" id="predefined-colors">
                        <h4 style={{ textAlign: "center" }}>Predefined Colors</h4>
                        <div id="color-list">
                            <div className="predefined-color" id="FF4A52"></div>
                            <div className="predefined-color" id="FF9500"></div>
                            <div className="predefined-color" id="FFCC00"></div>
                            <div className="predefined-color" id="P4CD964"></div>
                            <div className="predefined-color" id="P5AC8FA"></div>
                            <div className="predefined-color" id="P007AFF"></div>
                            <div className="predefined-color" id="P5856D6"></div>
                            <div className="predefined-color" id="FF2D55"></div>
                        </div>
                    </div>
                    <div className="secondary-sidebar-child" id="predefined-stylings">
                        <h4 style={{ textAlign: "center" }}>Predefined Stylings</h4>
                        <div className="predefined-styling-child thumbnail">
                            <div className="demo-thumbnail">
                                <DemoThumbnail
                                    name="Left Align Menu"
                                    image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling1.jpg"
                                    url="https://themes.themegoods.com/grandtour/demo/"
                                />
                            </div>
                            <div className="demo-thumbnail">
                                <DemoThumbnail
                                    name="Center Align"
                                    image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling2.jpg"
                                    url="https://themes.themegoods.com/grandtour/demo/?menulayout=centeralign"
                                />
                            </div>
                            <div className="demo-thumbnail">
                                <DemoThumbnail
                                    name="Center Logo +2 Menus"
                                    image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling3.jpg"
                                    url="https://themes.themegoods.com/grandtour/demo/?menulayout=centeralogo"
                                />
                            </div>
                            <div className="demo-thumbnail">
                                <DemoThumbnail
                                    name="Fullscreen Menu"
                                    image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling4.jpg"
                                    url="https://themes.themegoods.com/grandtour/demo/?menulayout=hammenufull"
                                />
                            </div>
                            <div className="demo-thumbnail">
                                <DemoThumbnail
                                    name="Side Menu"
                                    image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling5.jpg"
                                    url="/"
                                />
                            </div>
                            <div className="demo-thumbnail">
                                <DemoThumbnail
                                    name="With Frame"
                                    image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling6.jpg"
                                    url="https://themes.themegoods.com/grandtour/demo/?frame=1"
                                />
                            </div>
                            <div className="demo-thumbnail">
                                <DemoThumbnail
                                    name="With Top Bar"
                                    image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling8.jpg"
                                    url="https://themes.themegoods.com/grandtour/demo/?topbar=1"
                                />
                            </div>
                            <div className="demo-thumbnail">
                                <DemoThumbnail
                                    name="Boxed Layout"
                                    image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling7.jpg"
                                    url="https://themes.themegoods.com/grandtour/demo/?boxed=1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}