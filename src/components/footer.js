import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilter } from "../actions/index";

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilter;

const Footer = () => (
  <div className="footer">
    <p>
        Show
        {" "}
      <FilterLink filter={SHOW_ALL}>
          All
        </FilterLink>
      {", "}
      <FilterLink filter={SHOW_COMPLETED}>
          Completed
        </FilterLink>
      {", "}
      <FilterLink filter={SHOW_ACTIVE}>
          Active
        </FilterLink>
    </p>
  </div>
  );

export default Footer;
