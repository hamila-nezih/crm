import React, { Component } from 'react';
const $ = window.$;

class ContentDB extends Component {
 
  render() {
    return (
      <div>
           <div className="row wrapper border-bottom white-bg page-heading">
            <div className="col-lg-12 ">
              <h2>Bienvenue-STARTEC</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 ">
              <div className="widget style1 red-bg outline-btn">
                <div className="row  -obtnutline">
                  <div className="col-xs-4 text-center">
                     <i class="fa fa-user fa-5x"></i>      
                  </div>
                  <div className="col-xs-8 text-right">
                    <span> Nombres des <br></br> clients </span>
                    <h2 className="font-bold">1514</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="widget style1 navy-bg">
                <div className="row">
                  <div className="col-xs-4">
                    <i className="fa fa-users fa-5x" />
                  </div>
                  <div className="col-xs-8 text-right">
                    <span> Nombres des prospect</span>
                    <h2 className="font-bold">2014</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="widget style1 lazur-bg">
                <div className="row">
                  <div className="col-xs-4">
                    <i className="fa fa-folder-open fa-5x" />
                  </div>
                  <div className="col-xs-8 text-right">
                    <span> Nombes des commandes</span>
                    <h2 className="font-bold">5000</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="widget style1 yellow-bg">
                <div className="row">
                  <div className="col-xs-4">
                    <i className="fa fa-blind fa-5x" />
                  </div>
                  <div className="col-xs-8 text-right">
                    <span> Nombres des collaborateurs </span>
                    <h2 className="font-bold">120</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="ibox float-e-margins">
                    <div className="ibox-title">
                      <h5>Nombres des commandes par mois</h5>
                      <div className="ibox-tools">
                        <a className="collapse-link">
                          <i className="fa fa-chevron-up" />
                        </a>
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                          <i className="fa fa-wrench" />
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                          <li><a href="#">Config option 1</a>
                          </li>
                          <li><a href="#">Config option 2</a>
                          </li>
                        </ul>
                        <a className="close-link">
                          <i className="fa fa-times" />
                        </a>
                      </div>
                    </div>
                    <div className="ibox-content">
                      <div className="flot-chart">
                        <div className="flot-chart-content" id="flot-bar-chart" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
  <div className="ibox float-e-margins">
    <div className="ibox-title">
      <h5>Nombres des commandes par zone</h5>
      <div className="ibox-tools">
        <a className="collapse-link">
          <i className="fa fa-chevron-up" />
        </a>
        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
          <i className="fa fa-wrench" />
        </a>
        <ul className="dropdown-menu dropdown-user">
          <li><a href="#">Config option 1</a>
          </li>
          <li><a href="#">Config option 2</a>
          </li>
        </ul>
        <a className="close-link">
          <i className="fa fa-times" />
        </a>
      </div>
    </div>
    <div className="ibox-content">
      <div className="flot-chart">
        <div className="flot-chart-pie-content" id="flot-pie-chart" />
      </div>
    </div>
  </div>
</div>

                     </div>
                </div>
     
    );
  }
}

export default ContentDB;