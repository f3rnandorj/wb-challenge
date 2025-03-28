import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    push: jest.fn(),
    pathname: "/",
    route: "/",
    query: {},
    asPath: "/",
  })),
}));
