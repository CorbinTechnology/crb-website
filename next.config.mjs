/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["ts", "tsx"], 
    async redirects() {
      return [
        {
          source: "/",
          destination: "/home",
          permanent: true,
        },
      ];
    },
  };
  
  
  export default nextConfig;
