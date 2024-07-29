import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavItem.css';

const NavItem = ({ to, label, activeLink, setActiveLink }) => {
  const handleClick = () => {
    setActiveLink(label);
  };

  return (
    <li className={`nav-item ${activeLink === label ? 'active' : ''}`}>
      <Link to={to} className="nav-link font-weight-semibold text-white" onClick={handleClick}>
        {label}
      </Link>
    </li>
  );
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  activeLink: PropTypes.string.isRequired,
  setActiveLink: PropTypes.func.isRequired,
};

export default NavItem;
