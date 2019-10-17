import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Zone from './components/zonning/Zone';
import Dashboard from './components/Dashboard';
import NouveauCliet from './components/NouveauCliet';
import DetailClient from './components/DetailClient';
import Collaborateur from './components/collaborateurs/Collaborateur';
import DetailCLB from './components/collaborateurs/DetailCLB';
import SousZone from './components/zonning/SousZone';
import Intervention from './components/interventions/Intervention';
import DetailITV from './components/interventions/DetailITV';
import AjouterITV from './components/interventions/AjouterITV';
import Calendrier from './components/calendrier/Calendrier';
import Client from './components/Client';
import Menu from './components/Menu';


class Root extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div id="page-wrapper" className="gray-bg  wrapper">
                    <div className="row border-bottom">
                        <nav className="navbar navbar-static-top" role="navigation" style={{ marginBottom: 0 }}>
                            <div className="navbar-header">
                                <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#">
                                    <i className="fa fa-bars" />
                                </a>
                            </div>
                            <ul className="nav navbar-top-links navbar-right">
                                <li>
                                    <span className="m-r-sm text-muted welcome-message"></span>
                                </li>
                                <li>
                                    <a href="/login">
                                        <i className="fa fa-sign-out" /> Déconnecté
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="footer">
                            <div className="pull-right">
                                <strong>STARTEC</strong>
                            </div>
                            <div>
                                <strong>Copyright</strong> GST © 2019
                            </div>
                        </div> 
                    </div>
                    <Route path='/client' component={Client} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/nouveauClient' component={NouveauCliet} />
                    <Route path='/detailClient' component={DetailClient} />
                    <Route path='/collaborateur' component={Collaborateur} />
                    <Route path='/DetailCLB' component={DetailCLB} />
                    <Route path='/zone' component={Zone} />
                    <Route path='/detailSZ' component={SousZone} />
                    <Route path='/intervention' component={Intervention} />
                    <Route path='/detailITV' component={DetailITV} />
                    <Route path='/ajouterITV' component={AjouterITV} />
                    <Route path='/calendrier' component={Calendrier} />
                </div>
            </div>
        );
    }
}

export default Root;