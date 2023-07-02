import withImages from "next-images";

const nextConfig = {
  images: {
    unoptimized: true,
  },
};

export default withImages(nextConfig);
