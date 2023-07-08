import withImages from "next-images";

export default withImages({
  images: {
    unoptimized: true,
  },
  //de pus pathuri la imagini
  webpack: (config, options) => {
    config.module.rules.push({
      test: /react-hexgrid/,
      use: [options.defaultLoaders.babel],
    });

    return config;
  },
});
