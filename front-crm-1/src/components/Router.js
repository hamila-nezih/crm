import React, { Component } from 'react';
import { Route, Link, BrowserRouter ,Switch } from 'react-router-dom'
import Dashboard from './Dashboard';
import Client from './Client';
import Login from './Login';
import NouveauCliet from './NouveauCliet';
import DetailClient from './DetailClient';
import Collaborateur from './collaborateurs/Collaborateur';
import DetailCLB from './collaborateurs/DetailCLB';
import Calendrier from './calendrier/Calendrier';

import Zone from './zonning/Zone';
import SousZone from './zonning/SousZone';
import DetailITV from './interventions/DetailITV';
import Intervention from './interventions/Intervention';
import AjouterITV from './interventions/AjouterITV';
import Root from '../Root';
import ContentContactClt from './ContentContactClt';





class Router extends Component {
    render() {
        return (
            
              <BrowserRouter>
                 <Switch>
                     <Route path='/login' component={Login} />                
                     <Route path='/'component={Root}   >                                 
                     </Route>
                </Switch>
              </BrowserRouter>
            
        );
    }
}

export default Router;