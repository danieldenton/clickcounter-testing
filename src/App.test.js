import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

const setup = () => shallow(<App />);

const findByTestAtt = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAtt(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setup();
  const button = findByTestAtt(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAtt(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter display starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAtt(wrapper, "count").text();
  expect(count).toBe("0");
});

test("clicking button increments the counter", () => {
  const wrapper = setup();
  const button = findByTestAtt(wrapper, "increment-button");
  button.simulate("click");
  const count = findByTestAtt(wrapper, "count").text();
  expect(count).toBe("1");
});

test("clicking button decrements the counter", () => {
  const wrapper = setup();
  const button = findByTestAtt(wrapper, "decrement-button");
  button.simulate("click");
  const error = findByTestAtt(wrapper, "error").text();
  expect(error).toBe("You cannot decrement the count below 0");
});
