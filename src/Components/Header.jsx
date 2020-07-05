import React from 'react';

import "../scss/components/header.scss";

const Header = () => {

  const HeaderItems = [
    {
      title: "Overview",
      disabled: true,
      active: false
    },
    {
      title: "Customers",
      disabled: false,
      active: true
    },
    {
      title: "Reports",
      disabled: true,
      active: false
    },
    {
      title: "Leaderboard",
      disabled: true,
      active: false
    },
  ];

  return (
    <nav>
      {HeaderItems.map(item => (
        <span className={`nav-item ${item.disabled && 'disabled'} ${item.active && 'active'}`} key={item.title}>{item.title}</span>
      ))}
    </nav>
  )
};

export default Header;