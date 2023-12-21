import React, { Fragment } from "react";
import "@/style/best-value-trip/trip-card.css";

export default function BestValueTripCard({
    image,
    url,
    alt,
    name,
    categories,
    price,
    newPrice,
    rating,
    nreview,
    duration,
}: {
    image: string,
    url: string,
    alt?: string,
    name: string,
    categories: string[],
    price: number,
    newPrice?: number,
    rating: number,
    nreview: number,
    duration: number,
}) {

    const calculateStars = () => {
        const fullStars = Math.floor(rating);
    
        const stars = [];
    
        for (let i = 1; i <= fullStars; i++) {
          stars.push(<span key={`best-${i}`} className="best-star star-filled">&#9733;</span>);
        }
    
        const emptyStarsCount = 5 - stars.length;
        for (let i = 1; i <= emptyStarsCount; i++) {
            stars.push(
                <span 
                    key={`best-empty-${i}`} 
                    className="best-star star-empty"
                    style={{
                        color: "rgba(0, 0, 0, 0.3)"
                    }}
                >
                    &#9734;
                </span>
            );
        }
    
        return stars;
    };

    const categoryList = categories.map((category, index) => {
        if (index === 0) {
            return (
                <p key={index}>{category}</p>
            );
        } 
        return (
            <p key={index}>{`, ${category}`}</p>
        );
    })

    return (
        <Fragment>
            <div className="card-container" id="best-value-trip-card-container">
                <a href={url} target="_blank">
                    <div className="card-anchor-part">
                        <div className="trip-card-image">
                            <img src={image} alt={alt} />
                        </div>
                        {
                            newPrice === undefined 
                            ? (
                                <div className="best-trip-price">
                                    {`$${price.toLocaleString("en-US")}`}
                                </div>
                            )
                            : (
                                <div className="best-trip-price">
                                    <del className="old-price">{`$${price.toLocaleString("en-US")}`}</del> {`$${newPrice.toLocaleString("en-US")}`}
                                </div>
                            )
                        }
                    </div>
                </a>
                <div className="card-info-part">
                    <div className="best-trip-name">
                        {name}
                    </div>
                    <div className="trip-categories">
                        {categoryList}
                    </div>
                    <div className="other-trip-info">
                        <div className="rating-and-nreviews">
                            <div className="best-trip-rating">
                                {calculateStars().map((star, index) => (
                                    <span key={index}>{star}</span>
                                ))}
                            </div>
                            <div className="trip-nreviews">
                                {`${nreview} reviews`}
                            </div>
                        </div>
                        <div className="trip-duration">
                            {`${duration} days`}
                        </div>
                    </div>
                </div>
                {
                    newPrice !== undefined && (
                        <div className="sale-circle">
                            Sale
                        </div>
                    )
                }
            </div>
        </Fragment>
    );
}