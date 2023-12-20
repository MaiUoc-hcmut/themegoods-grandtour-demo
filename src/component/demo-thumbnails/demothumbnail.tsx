'use client'
import React, { Fragment, useState } from "react";
import "@/style/sidebar/demo-thumbnail.css";


export default function DemoThumbnail({
    name,
    image,
    url,
}: {
    name: string,
    image: string,
    url: string,
}) {

    const [isThumbnailHovered, setIsThumbnailHovered] = useState<boolean>(false);

    return(
        <Fragment>
            <div 
                className={`demo-thumbnail-container ${isThumbnailHovered ? "hovered" : "not-hovered"}`}
                onMouseEnter={() => setIsThumbnailHovered(true)}
                onMouseLeave={() => setIsThumbnailHovered(false)}
            >
                <div 
                    className={`thumbnail-image ${isThumbnailHovered ? "hovered" : "not-hovered"}`}
                >
                    <img src={image} alt="Thumbnail" />
                </div>
                <div className={`thumbnail-name ${isThumbnailHovered ? "hovered" : "not-hovered"}`}>
                    <h6>{name}</h6>
                </div>
                <div className={`launch-button ${isThumbnailHovered ? "hovered" : "not-hovered"}`}>
                    <a href={url} target="_blank">
                        Launch
                    </a>
                </div>
            </div>
        </Fragment>
    );
}