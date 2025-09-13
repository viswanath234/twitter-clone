const isProduction = process.env.NODE_ENV === "production";

export const baseUrl = isProduction
  ? "https://twitter-clone-two-eosin-57.vercel.app/"
  : "http://localhost:5000";
