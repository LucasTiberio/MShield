import React from 'react';

import '../scss/components/navbar.scss'

const NavigationBar = props => {

  const hasPath = path => window.location.pathname.includes(path);

  const NavItems = [
    {
      title: "Overview",
      quantity: 0,
      submenu: false,
      active: hasPath('overview')
    },
    {
      title: "Payment Methods",
      quantity: 10,
      submenu: false,
      active: hasPath('payment-methods')
    },
    {
      title: "Chargebacks",
      quantity: 1,
      submenu: false,
      active: hasPath('chargebacks')
    },
    {
      title: "Locations",
      quantity: 15,
      submenu: false,
      active: hasPath('locations')
    },
    {
      title: "Sessions",
      quantity: 0,
      submenu: true,
      active: hasPath('sessions')
    },

  ]

  return (
    <div className={`navigationbar ${props.separated && 'separated'}`}>
      <ul>
        {NavItems.map(item => (
          <li key={item.title} className={`${item.active && 'active'}`}>{item.title} {item.quantity > 0 && <span>{item.quantity}</span>}</li>
        ))}
      </ul>
    </div>
  )
};

export default NavigationBar;