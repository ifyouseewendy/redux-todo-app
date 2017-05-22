import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

const Footer = ({ filter, onFilterClick }) => {
  return (
    <p>
      Show:
      {" "}
      <Link active={filter === "All"} children="All" onClick={onFilterClick} />
      {", "}
      <Link active={filter === "Active"} children="Active" onClick={onFilterClick} />
      {", "}
      <Link active={filter === "Completed"} children="Completed" onClick={onFilterClick} />
    </p>
  );
};

Footer.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};

export default Footer;
