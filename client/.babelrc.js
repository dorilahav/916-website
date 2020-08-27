module.exports = {
  target: {
    website: true
  },
  presets: [[
    "@babel/preset-env", {
      useBuiltIns: "entry"
    }],
    "@babel/preset-react"],
  plugins: [['@babel/plugin-proposal-private-methods', {loose: true}]]
};
