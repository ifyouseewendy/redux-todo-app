import React from "react";
import { shallow } from "enzyme";
import Link from "../Link";

describe("Link", () => {
  it("should render a text span for active link", () => {
    const wrapper = shallow(
      <Link
        active
        onClick={() => {}}
      >
        hello
      </Link>
    );

    expect(wrapper.find("span").text()).toEqual("hello");
  });

  it("should render a button for inactive link", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <Link
        active={false}
        onClick={onClick}
      >
        hello
      </Link>
    );

    expect(wrapper.find("button").text()).toEqual("hello");

    wrapper.find("button").simulate("click", { preventDefault: () => {} });
    expect(onClick).toBeCalled();
  });
});
