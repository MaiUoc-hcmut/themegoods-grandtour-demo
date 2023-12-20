'use client'
import React, { Fragment, useState, useEffect } from "react";
import { SearchOutlined, CalendarOutlined, SwapOutlined, DownOutlined, UpOutlined, DollarOutlined } from '@ant-design/icons';
// import dynamic from "next/dynamic";
import "@/style/search/search-trip.css";

declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void,
        YT: any
    }
}

// const DynamicJarallax = dynamic(
//     () => import('@/component/parallax/parallax-video'),
//     { ssr: false }
// );

const MonthToSelect = [
    "Any Month",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const TripFilter = [
    "Sort By Date",
    "Price Low to High",
    "Price High to Low",
    "Sort By Name",
    "Sort By Popularity",
    "Sort By Review Score"
];

const Categories = [
    "All Categories",
    "Moutain",
    "Rural",
    "Snow & Ice",
    "Wildlife"
];

const Destination = [
    "Any Destinations",
    "Tokyo",
    "Seoul",
    "Paris",
    "London",
    "Venice",
    "Miami",
    "Rome",
    "Prague",
    "California",
    "Kyoto",
    "Hong Kong",
    "Santorini"
]


export default function SearchTrip() {

    const [advanced, setAdvanced] = useState<boolean>(false);

    const monthOptions = MonthToSelect.map((month) => {
        return (
            <option key={month} value={month}>
                {month}
            </option>
        )
    });

    const sortOptions = TripFilter.map((option) => {
        return (
            <option key={option} value={option}>
                {option}
            </option>
        )
    });

    const categoryOptions = Categories.map((category) => {
        return (
            <option key={category} value={category}>
                {category}
            </option>
        )
    });

    const destinationOptions = Destination.map((destination) => {
        return (
            <option key={destination} value={destination}>
                {destination}
            </option>
        )
    })

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <Fragment>
            <div className="search-trip-wrapper" id="search-trip">
                <div className="search-trip-container">
                    <div className="title-and-tagline" style={{ color: "white" }}>
                        <h2 className="search-trip-title" style={{ margin: 0 }}>
                            Where do you want to go?
                        </h2>
                        <div className="search-trip-tagline">
                            Trips, experiences, and places. All in one service.
                        </div>
                    </div>
                    <div className="search-field" id="search-field">
                        <div className="default-field">
                            <div className="default-search-field">
                                <div className="filter-field">
                                    <input type="text" placeholder="Destination city" />
                                </div>
                                <div className="icon-search-field">
                                    <SearchOutlined style={{ opacity: 0.4 }}  />
                                </div>
                            </div>
                            <div className="default-search-field">
                                <div className="filter-field">
                                    <select defaultChecked defaultValue="Any Month">
                                        {monthOptions}
                                    </select>
                                </div>
                                <div className="icon-search-field">
                                    <CalendarOutlined style={{ opacity: 0.4 }} />
                                </div>
                            </div>
                            <div className="default-search-field">
                                <div className="filter-field">
                                    <select>
                                        {sortOptions}
                                    </select>   
                                </div>
                                <div className="icon-search-field">
                                    <SwapOutlined style={{ opacity: 0.4 }}  />
                                </div>
                            </div>
                            <div className="search-button">
                                <input type="submit" value="Search" />
                            </div>
                        </div>
                        {
                            advanced && (
                                <div className="advanced-field">
                                    <div className="advanced-search-field">
                                        <div className="filter-field">
                                            <select>
                                                {categoryOptions}
                                            </select>   
                                        </div>
                                        <div className="icon-search-field">
                                            <DownOutlined style={{ opacity: 0.4 }}  />
                                        </div>
                                    </div>
                                    <div className="advanced-search-field">
                                        <div className="filter-field">
                                            <select>
                                                {destinationOptions}
                                            </select>   
                                        </div>
                                        <div className="icon-search-field">
                                            <DownOutlined style={{ opacity: 0.4 }}  />
                                        </div>
                                    </div>
                                    <div className="advanced-search-field">
                                        <div className="filter-field">
                                            <input type="text" placeholder="Max budget ex. 500" />
                                        </div>
                                        <div className="icon-search-field">
                                            <DollarOutlined style={{ opacity: 0.4 }}  />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div 
                            className="show-advanced-field"
                            onClick={() => setAdvanced(!advanced)}
                        >
                            <div style={{ marginRight: 5 }}>
                                {
                                    advanced === false ? 
                                    <DownOutlined /> :
                                    <UpOutlined />
                                }
                            </div>
                            <p>Advanced Search</p>
                        </div>
                    </div>
                </div>
                <div 
                    className="jarallax"
                    id="background-youtube-player"
                    data-jarallax-video="https://www.youtube.com/watch?v=JPe2mwq96cw"
                    style={{
                        top: scrollY / 2.5
                    }}
                >
                    <iframe 
                        src="https://youtube.com/embed/JPe2mwq96cw?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1&loop=1&playlist=JPe2mwq96cw&rel=0"
                        allowFullScreen
                        style={{ border: "none" }}
                        className="iframe-video"
                    >
                    </iframe>
                </div>
            </div>
        </Fragment>
    );
}