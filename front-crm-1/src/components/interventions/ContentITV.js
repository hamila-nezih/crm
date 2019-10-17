import React, { Component } from 'react';
const $ = window.$;

class ContentITV extends Component {
    componentDidMount() {
        $(function () {
          $('.dataTables-example').DataTable({
          });
    
        })
      }
      render() {
        return (
          <div>
           
          <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="ibox float-e-margins">
    
    
                      <div className="ibox-title" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <h5 >Liste des interventions</h5>
                        <a type="button" class="btn btn-primary" href="ajouterITV" >Nouvelle intervention</a>
                      </div>
                      <div className="ibox-content">
                        <div className="table">
                          <table className="table table-striped table-bordered table-hover dataTables-example">
                            <thead>
                              <tr>
                                <th>status</th>
                                <th>Collaborateur</th>
                                <th>Client</th>
                                <th>Contact client</th>
                                <th>type</th>
                                <th>Date de début</th>
                                <th>Date de fin</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="gradeA">
                                <td> 
                                  <span className="label label-primary">En cours</span>
                                </td>
                                <td>Nom du Collaborateur</td>
                                <td>GST</td>
                                <td>Directeur</td>
                                <td> 
                                  Livraison
                                </td>
                                <td className="center">10/05/2019 17:30</td>
                                <td className="center">02/12/2019 10:00</td>
                                <td align="center"> 
                                  <a type="button" className= "btn btn-outline btn-info btn-xs"href="detailITV">
                                    <span className="fa fa-pencil" aria-hidden="true" ></span>                                
                                  </a>
                                  <a type="button" className="btn btn-outline btn-danger btn-xs"  href="detailClient" style={{marginLeft:'15px'}}>
                                    <i className="fa fa-trash" aria-hidden="true"></i>                                 
                                  </a> 
                                </td>
    
                              
                              </tr>
                             
                              
    
    
                            </tbody>
                            <tfoot>
                              
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
            </div>
        );
      }
    }
export default ContentITV;