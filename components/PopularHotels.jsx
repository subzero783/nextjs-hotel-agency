"use client";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HotelProperty from "@/components/HotelProperty";

import hotelProperties from "@/hotels.json";

const PopularHotels = () => {
  const [hotelList, setHotelList] = useState(hotelProperties);

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
            <HotelProperty
              key={hotel._id}
              hotel={hotel}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PopularHotels;
