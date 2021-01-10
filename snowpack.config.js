/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/', //mount the /public folder to the site's root folder
    src: '/dist' //mount the /src folder to the dist folder
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-postcss'
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
