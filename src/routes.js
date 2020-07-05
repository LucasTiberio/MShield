import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import PaymentMethod from './Components/PaymentMethod';

const Routes = props => (
  <BrowserRouter>
    <Switch>
      <Route path='/' render={() => <PaymentMethod {...props} />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;