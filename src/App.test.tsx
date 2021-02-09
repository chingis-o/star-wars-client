import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders search placeholder", () => {
  render(<App />);
  expect(screen.getByPlaceholderText("Enter your query")).toBeDefined()
});
