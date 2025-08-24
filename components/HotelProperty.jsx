"use client";
import { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdHotel } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import StateContextProvider from "./StateContext";

const HotelProperty = ({ hotel }) => {
  const [like, setLike] = useState(false);
  const { isLoggedIn } = useContext(StateContextProvider);

  const getTypeIcon = (type) => {
    if (type.toLowerCase() === "hotel") {
      return <MdHotel />;
    } else if (type.toLowerCase() === "resort") {
      return <FaUmbrellaBeach />;
    } else {
      return <MdHotel />;
    }
  };

  return (
    <div className="hotel-property">
      <div className="image-container">
        <Image
          src={`/images/hotel-properties/${hotel.images[0]}`}
          alt=""
          width={0}
          height={0}
          sizes="50vw"
          priority={true}
        />
        <span
          className={`like-hotel-container ${like === true ? "liked" : ""}`}
          onClick={() => {
            if (isLoggedIn) {
              setLike(!like);
            }
          }}
        >
          {like === true ? <FaHeart /> : <FaRegHeart />}
        </span>
      </div>
      <div className="text-container">
        <Link
          className="hotel-link"
          href={`/hotels/${hotel._id}`}
        >
          <h3 className="type">
            {getTypeIcon(hotel.type)} {hotel.type}
          </h3>
          <h2>
            <span>{hotel.name}</span>
          </h2>
        </Link>
        <h3>{`${hotel.location.city}, ${hotel.location.country}`}</h3>
        <div className="price-container">
          <p>
            Starting from <span>US ${hotel.price_per_night}</span>
          </p>
        </div>
        <div className="rating-and-details">
          <div className="stars-and-rating">
            <div className="stars">
              <span>{hotel.star_rating}</span>
            </div>
            <span className="rating">Rating</span>
          </div>
          <Link
            className="details"
            href={`/hotels/${hotel._id}`}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelProperty;
