import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ currentFilter = 'All' }) => {
  return (
    <div className="footer">
      <ul>
        {
          ['All', 'Active', 'Completed'].map((filter) => (
            <li className={filter === currentFilter ? "active" : ""}>
              {filter}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

Footer.propTypes = {
  currentFilter: PropTypes.string,
};

export default Footer;
