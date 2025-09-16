const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchHotels() {
  try {
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/hotels`);

    if (!res.ok) {
      throw new Error("Failed to fetch hotels data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { fetchHotels };
