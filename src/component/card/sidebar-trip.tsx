import React, { Fragment } from "react";
import '@/style/sidebar/tripcard.css';

export default function SidebarTripCard({
    price,
    newPrice,
    name,
    rating,
    image,
    altImage,
}: {
    price: number,
    newPrice?: number,
    name: string,
    rating: number,
    image: string,
    altImage: string,
}) {
    const calculateStars = () => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
    
        const stars = [];
    
        for (let i = 1; i <= fullStars; i++) {
          stars.push(<span key={i} className="star star-filled">&#9733;</span>);
        }
    
        const emptyStarsCount = 5 - stars.length;
        for (let i = 1; i <= emptyStarsCount; i++) {
          stars.push(<span key={`empty-${i}`} className="star star-empty">&#9734;</span>);
        }
    
        return stars;
    };

    return (
        <Fragment>
            <div className="sidebar-trip-card-container">
                <div className="image-theme">
                    <img src={image} alt={altImage} />
                </div>
                {
                    newPrice === undefined 
                    ? (
                        <div className="trip-price">
                            {`$${price.toLocaleString('en-US')}`}
                        </div>
                    )
                    : (
                        <div className="trip-price">
                            <del className="old-price">{`$${price.toLocaleString('en-US')}`}</del> {`$${newPrice.toLocaleString('en-US')}`}
                        </div>
                    )
                }
                <div className="trip-name">
                    {name}
                </div>
                <div className="trip-rating">
                    {calculateStars().map((star, index) => (
                        <span key={index}>{star}</span>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}