import React, { Fragment } from "react";
import TipCard from "../card/article-and-tips";
import "@/style/article-&-tip/article-and-tips.css"


export default function ArticleAndTips() {
    return (
        <Fragment>
            <div className="container" id="article-and-tips-container">
                <div className="title-and-tagline">
                    <h2 className="title">
                        Article & Tips
                    </h2>
                    <div className="tagline">
                        Explore some of the best tips from around the world
                    </div>
                </div>
                <div className="tips-card">
                    <div className="tip-card">
                        <TipCard 
                            image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg"
                            url="https://themes.themegoods.com/grandtour/demo/my-memorial-day-tribute-to-someone-who-told-me-to-travel/"
                            alt=""
                            time="Dec 12, 2016"
                            tipName="Memorial Day to Someone Told Me to Travel"
                            tipDescription="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
                        />
                    </div>
                    <div className="tip-card">
                        <TipCard 
                            image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg"
                            url="https://themes.themegoods.com/grandtour/demo/my-memorial-day-tribute-to-someone-who-told-me-to-travel/"
                            alt=""
                            time="Dec 12, 2016"
                            tipName="7 Tips For Nomads On A Budget Trips"
                            tipDescription="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
                        />
                    </div>
                    <div className="tip-card">
                        <TipCard 
                            image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg"
                            url="https://themes.themegoods.com/grandtour/demo/my-memorial-day-tribute-to-someone-who-told-me-to-travel/"
                            alt=""
                            time="Dec 12, 2016"
                            tipName="Taking A Travel Blog Victory Lap"
                            tipDescription="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}