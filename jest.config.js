
module.exports = {
    // preset: "ts-jest/presets/js-with-ts",
    testEnvironment: "node",
    coveragePathIgnorePatterns: ["/node_modules/", "/models/"],
    rootDir: "./__tests__",
    verbose: true,
    modulePathIgnorePatterns: ["models", "node_modules"],
    // transform: {
    //     "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest",
    // },
    transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
    coverageDirectory: "coverage",
    clearMocks: true,
    collectCoverage: false,
};
