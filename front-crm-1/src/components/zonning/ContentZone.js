import React, { Component } from 'react';
const $ = window.$;

class ContentZone extends Component {
       
            componentDidMount() {
                $(function () {
                 
            
                })
              }
              render() {
                return (
                  <div >
                  
             
          <div className="wrapper wrapper-content animated fadeInRight">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="ibox float-e-margins">
            
            
                              <div className="ibox-title" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <h5 >Liste des zones</h5>
                               <div className="input-group"><input type="text" className="form-control" placeholder="nouvelle zone" />
                                 <span className="input-group-btn"> <button type="button" className="btn btn-primary">ajouter
                                </button> </span></div>

                              </div>
                              <div className="ibox-content">
                                <div className="table-responsive">
                                  <table className="zone table table-striped table-bordered table-hover dataTables-example">
                                    <thead>
                                      <tr>
                                        <th>Nom</th>
                                        <th>nombre des clients</th>
                                        <th>nombre des sous zones</th>                                        
                                        <th></th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="gradeA">
                                        <td>Sahel</td>
                                        <td>70</td>
                                        <td>9</td>                                        
                                        <td align="center"> 
                                          <a type="button" className= "btn btn-outline btn-info btn-xs"href="detailSZ">
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
            
      

export default ContentZone;