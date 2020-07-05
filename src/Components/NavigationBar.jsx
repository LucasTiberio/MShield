import React from 'react';

import '../scss/components/navbar.scss'

const NavigationBar = props => {

  const NavItems = [
    {
      title: "Overview",
      quantity: 0,
      submenu: false,
      active: false
    },
    {
      title: "Orders",
      quantity: 2,
      submenu: false,
      active: false
    },
    {
      title: "Payment Methods",
      quantity: 10,
      submenu: false,
      active: true
    },
    {
      title: "Chargebacks",
      quantity: 1,
      submenu: false,
      active: false
    },
    {
      title: "Locations",
      quantity: 15,
      submenu: false,
      active: false
    },
    {
      title: "Devices",
      quantity: 2,
      submenu: true,
      active: false
    },
    {
      title: "Sessions",
      quantity: 0,
      submenu: true,
      active: false
    },

  ]
   
  return (
    <div className={`navbar ${props.separated && 'separated'}`}>
      <ul>
        {NavItems.map(item => (
          <li className={`${item.active && 'active'}`}>{item.title} {item.quantity > 0 && <span>{item.quantity}</span>}</li>
        ))}
      </ul>
    </div>
  )
};

export default NavigationBar;