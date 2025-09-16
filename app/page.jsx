import Features from "@/components/Features";
import Hero from "@/components/Hero";
import PopularHotels from "@/components/PopularHotels";

const HomePage = ({ searchParams }) => {
  return (
    <>
      <Hero />
      <Features />
      <PopularHotels searchParams={searchParams} />
    </>
  );
};

export default HomePage;
