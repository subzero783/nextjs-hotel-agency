import connectDB from "@/config/database";
import Hotel from "@/models/Hotel";

export const GET = async (request) => {
  try {
    await connectDB();

    const properties = await Hotel.find({});

    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};
