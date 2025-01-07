module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          api: "./api",
          assets: "./assets",
          components: "./components",
          constants: "./constants",
          hooks: "./hooks",
          styles: "./styles",
          types: "./.expo/types",
        },
      },
    ],
  ],
};
