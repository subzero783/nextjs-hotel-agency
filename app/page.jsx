import Features from "@/components/Features";
import Hero from "@/components/Hero";
import PopularHotels from "@/components/PopularHotels";

const HomePage = ({ searchParams }) => {
  const selectedType = searchParams.type || "All";

  return (
    <>
      <Hero />
      <Features />
      <PopularHotels selectedType={selectedType} />
    </>
  );
};

export default HomePage;
