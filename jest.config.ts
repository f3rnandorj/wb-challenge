import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  preset: "ts-jest",
  coverageProvider: "v8",
  testEnvironment: "jest-fixed-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/test/jestSetup.ts"],
  collectCoverageFrom: [
    "src/{components,utils,hooks,domain,pages}/**/*.{js,jsx,ts,tsx}",
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/src/pages/_app.page.tsx",
    "<rootDir>/src/pages/_document.page.tsx",
  ],
};

export default createJestConfig(config);
