import React, { Fragment } from "react";
import "@/style/article-&-tip/tip-card.css";


export default function TipCard({
    image,
    url,
    alt,
    time,
    tipName,
    tipDescription,
}: {
    image: string,
    url: string,
    alt: string,
    time: string,
    tipName: string,
    tipDescription: string,
}) {
    return (
        <Fragment>
            <div className="card-container" id="tip-card-container">
                <a href={url}>
                    <div className="tip-image">
                        <img src={image} alt={alt} />
                    </div>
                </a>
                <div className="tip-info">
                    <div className="time">
                        <a href={url}>
                            {time}
                        </a>
                    </div>
                    <div className="tip-name">
                        <a href={url}>
                            {tipName}
                        </a>
                    </div>
                    <div className="tip-description">
                        {tipDescription}
                    </div>
                    <div className="readmore">
                        <a href={url} style={{ opacity: 0.4 }}>Read More <span>{`>`}</span></a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}