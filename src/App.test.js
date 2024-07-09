import { render, screen } from "@testing-library/react";
import App from "./App";

describe("render app component", () => {
  it("render app component", () => {
    render(<App />);
  });
});
