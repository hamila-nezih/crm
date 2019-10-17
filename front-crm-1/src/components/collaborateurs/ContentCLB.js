import React, { Component } from 'react';
const $ = window.$;

class ContentCLB extends Component {
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
                        <h5 >Liste des collaborateurs</h5>
                        <a type="button" class="btn btn-primary" href="" >Nouveau collaborateur</a>
                      </div>
                      <div className="ibox-content">
                        <div className="table">
                          <table className="table table-striped table-bordered table-hover dataTables-example">
                            <thead>
                              <tr>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Tél</th>
                                <th>Email</th>
                                <th>Zone</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="gradeA">
                                <td>Example</td>
                                <td>Exemple</td>
                                <td>74 123 456 </td>
                                <td className="center">Example@gmail.com</td>
                                <td className="center">Sahel</td>
                                <td align="center"> 
                                  <a type="button" className= "btn btn-outline btn-info btn-xs"href="detailCLB">
                                    <span className="fa fa-pencil" aria-hidden="true" ></span>                                
                                  </a>
                                  <a type="button" className="btn btn-outline btn-danger btn-xs"  href="detailClient" style={{marginLeft:'15px'}}>
                                   <i className="fa fa-trash" aria-hidden="true"></i>                                 
                                  </a> 
                                </td>
    </tr>
                             
                              
    
    
                            </tbody>
                            
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
    

export default ContentCLB;