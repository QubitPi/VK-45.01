import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../../vk4501-redux";

test("renders title", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const elements = screen.getAllByText("VK-45.01");
  expect(elements.length).toBe(2);
});
