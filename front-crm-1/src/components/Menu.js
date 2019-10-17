import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div>
            <nav className="navbar-default navbar-static-side" role="navigation">
              <div className="sidebar-collapse">
                <ul className="nav metismenu" id="side-menu">
                  <li className="nav-header">
                    <div className="dropdown profile-element"> <span>
                        <img alt="image" className="img-circle" src="img/profile_small.jpg" />
                      </span>
                      <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                        <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">Star Tec</strong>
                          </span> <span className="text-muted text-xs block">Directeur <b className="caret" /></span> </span> </a>
                      <ul className="dropdown-menu animated fadeInRight m-t-xs">
                        <li><a href="profile.html">Profile</a></li>                        
                        <li className="divider" />
                        <li><a href="login.html">Logout</a></li>
                      </ul>
                    </div>
                    <div className="logo-element">
                      IN+
                    </div>
                  </li>  
                  <li className="active"><a href="dashboard">
                          <i className="fa fa-diamond" /> <span>Accueil</span>
                       </a>
                    </li>                
                  <li >
                    <a href="#"><i className="fa fa-th-large" /> <span className="nav-label">Structures</span><span className="fa arrow" /></a>
                    <ul className="nav nav-second-level collapse">
                      <li className="active"><a href="client">Client</a></li>
                      <li><a href="collaborateur">Collaborateur</a></li>   
                      <li><a href="zone">Zonning</a></li>                    
                    </ul>
                  </li>
                  <li><a href="calendrier">
                          <i className="fa fa-calendar" /> <span>Calendrier</span>
                       </a>
                    </li>
                    <li><a href="intervention">
                          <i className="fa fa-pie-chart" /> <span>Interventions</span>
                       </a>
                    </li>
                    <li><a href="pages/widgets.html">
                          <i className="fa fa-dashboard" /> <span>Commandes</span>
                        </a>
                    </li>
                <li>
                                <a href="pages/widgets.html">
                                    <i className="fa fa-bar-chart-o" /> <span>Statistique</span>
                                   
                                </a>
                            </li>
                 
                  
                </ul>
              </div>
            </nav>
          </div>
        );
    }
}

export default Menu;