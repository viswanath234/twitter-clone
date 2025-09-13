const isProduction = process.env.NODE_ENV === "production";

export const baseUrl = isProduction
  ? "https://xclone-zeta.vercel.app"
  : "http://localhost:5000";
