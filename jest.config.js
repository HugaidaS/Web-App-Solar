module.exports = {
  transform: {
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        preprocess: "./svelte.config.js",
      },
    ],
    "^.+\\.js$": "babel-jest",
  },
  moduleFileExtensions: ["js", "svelte", "ts"],
  testEnvironment: "jsdom",
  setupFiles: ["jest-canvas-mock"],
};
