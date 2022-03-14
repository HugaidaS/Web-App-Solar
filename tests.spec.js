import { fireEvent, render } from "@testing-library/svelte";
import { get } from "svelte/store";
import {
  storePanels,
  width,
  height,
  rightIntent,
  leftIntent,
  canvas,
} from "./src/services/store";

import App from "./src/App.svelte";

describe("App", () => {
  test("width input updates the store", async () => {
    const { container } = render(App);
    const input = container.querySelector('[name="Width"]');

    // type in input
    await fireEvent.input(input, { target: { value: 5000 } });
    width.set(input.value);
    expect(get(width)).toBe("5000");
  });
  test("height input updates the store", async () => {
    const { container } = render(App);
    const input = container.querySelector('[name="Height"]');

    // type in input
    await fireEvent.input(input, { target: { value: 5000 } });
    height.set(input.value);
    expect(get(height)).toBe("5000");
  });
  test("leftIntent input updates the store", async () => {
    const { container } = render(App);
    const input = container.querySelector('[name="Left Intent"]');

    // type in input
    await fireEvent.input(input, { target: { value: 100 } });
    leftIntent.set(input.value);
    expect(get(leftIntent)).toBe("100");
  });
  test("rightIntent input updates the store", async () => {
    const { container } = render(App);
    const input = container.querySelector('[name="Right Intent"]');

    // type in input
    await fireEvent.input(input, { target: { value: 100 } });
    rightIntent.set(input.value);
    expect(get(rightIntent)).toBe("100");
  });
  test("app creates field for the roof", async () => {
    render(App);
    expect(get(canvas).toDataURL()).toBe("data:image/png;base64,00");
  });
  test("click creates new panel", async () => {
    const { container } = render(App);
    const button = container.querySelector("button");
    button.click();
    expect(get(storePanels).length).toBe(2);
  });
});
