module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"], // ✅ 올바른 Expo 설정
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
};
