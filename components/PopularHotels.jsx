import { Col, Container, Row } from "react-bootstrap";
import HotelProperty from "@/components/HotelProperty";
import HotelFilterButtons from "./HotelFilterButtons";
import { fetchHotels } from "@/utils/requests";

const PopularHotels = async ({ searchParams }) => {
  // 1. async ({ searchParams }): We make this component async so we can use 'await', and it receives the searchParams from the HomePage.

  const hotels = await fetchHotels();
  // 2. const hotels = await fetchHotels(): Instead of reading from a local file, we are now calling our helper function which fetches the data directly from our MongoDB database via our API route. This happens on the server.

  const typesHotels = ["All", ...new Set(hotels.map((item) => item.type))];
  // 3. This line creates our array of unique hotel types for the filter buttons, directly from the live data.

  const selectedType = (await searchParams.type) || "All";
  // 4. We check the URL to see if a filter is active.

  const filteredHotels = selectedType === "All" ? hotels : hotels.filter((hotel) => hotel.type === selectedType);
  // 5. And here we filter our hotels array on the server before sending it to the browser.

  return (
    <Container
      id="popular-hotels"
      className="popular-hotels"
      fluid
    >
      <Row>
        <Col>
          <h2 className="title">Popular Hotels</h2>
        </Col>
        <Col className="hotel-types-buttons">
          <HotelFilterButtons types={typesHotels} />
        </Col>
      </Row>
      <Row>
        {filteredHotels.map((hotel) => (
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
