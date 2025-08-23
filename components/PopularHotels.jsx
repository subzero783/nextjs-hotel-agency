"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdHotel } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";

import hotelProperties from "@/hotels.json";

const PopularHotels = () => {
  const [hotelList, setHotelList] = useState(hotelProperties);

  const getTypeIcon = (type) => {
    if (type.toLowerCase() === "hotel") {
      return <MdHotel />;
    } else if (type.toLowerCase() === "resort") {
      return <FaUmbrellaBeach />;
    } else {
      return <MdHotel />;
    }
  };

  const getHotelList = (type) => {
    if (type === "All") {
      setHotelList(hotelProperties);
    } else {
      const newHotelList = hotelProperties.filter((hotel) => hotel.type === type);
      setHotelList(newHotelList);
    }
  };

  const typesHotels = [...new Set(hotelProperties.map((item) => item.type))];

  return (
    <Container
      className="popular-hotels"
      fluid
    >
      <Row>
        <Col>
          <h2 className="title">Popular Hotels</h2>
        </Col>
        <Col className="hotel-types-buttons">
          <button
            className="type-button"
            onClick={() => {
              getHotelList("All");
            }}
          >
            All
          </button>
          {typesHotels.map((item, index) => (
            <button
              className="type-button"
              key={index}
              onClick={() => {
                getHotelList(item);
              }}
            >
              {item}
            </button>
          ))}
        </Col>
      </Row>
      <Row>
        {hotelList.map((hotel) => (
          <Col
            className="col"
            key={hotel._id}
            xxl={3}
            xl={4}
            lg={4}
            md={6}
            sm={6}
            xs={12}
          >
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
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PopularHotels;
