"use client"
import { Fragment, useEffect } from "react";
import { jarallax } from "jarallax";

export default function JarallaxParallax() {
    

    return (
        <Fragment>
            <div 
                className="jarallax"
                id="background-youtube-player"
                data-jarallax
                data-video-src="https://www.youtube.com/watch?v=JPe2mwq96cw"
                style={{
                    top: ``
                }}
            >
                <iframe 
                    src="https://youtube.com/embed/JPe2mwq96cw?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1&loop=1&playlist=JPe2mwq96cw&rel=0"
                    allowFullScreen
                    style={{ border: "none" }}
                    className="jarallax-video"
                >
                </iframe>
            </div>
        </Fragment>
    );
}