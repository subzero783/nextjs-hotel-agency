"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

const HotelFilterButtons = ({ types }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeType = searchParams.get("type") || "All";

  const handleFilter = (type) => {
    const params = new URLSearchParams(searchParams);
    if (type === "All") {
      params.delete("type");
    } else {
      params.set("type", type);
    }

    // Append the hash to the URL string
    const newUrl = `${pathname}?${params.toString()}#popular-hotels`;
    router.push(newUrl);
  };

  return (
    <div className="popular-hotels-buttons">
      {types.map((type) => (
        <button
          key={type}
          className={`popular-hotels-button ${activeType === type ? "active" : ""}`}
          onClick={() => handleFilter(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default HotelFilterButtons;
