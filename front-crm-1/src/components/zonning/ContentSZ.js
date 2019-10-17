import React, { Component } from 'react';

class ContentSZ extends Component {
    render() {
        return (
        <div>
           
          <div className="row">
                <div className="col-lg-12">
                    <div className="wrapper wrapper-content animated fadeInUp">
                        <div className="ibox">
                            <div className="ibox-content">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="m-b-md">
                                            <a href="#" className="btn btn-info btn-xs pull-right" style={{ marginLeft: "10px" }}>Ajouter sous zone </a>
                                            <a href="#" className="btn btn-danger btn-xs pull-right" style={{ marginLeft: "10px" }}>Supprimer</a>
                                            <a href="#" className="btn btn-primary btn-xs pull-right" data-toggle="modal" data-target="#myModal4">Edit</a>
                                            <div className="modal inmodal" id="myModal4" tabIndex={-1} role="dialog" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content animated fadeIn">
                                                        <div className="modal-header">
                                                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Annuler</span></button>
                                                            <h4 className="modal-title">Modifier nom  de zone</h4>
                                                        </div>
                                                        <div className="modal-body">
                                                        <div className="row">
                <div className="col-lg-12">
                    <div className="ibox float-e-margins">
                        
                        <div className="ibox-content">
                            <form method="get" className="form-horizontal">
                                <div className="form-group"><label className="col-sm-3 control-label">Nom de zone</label>
                                    <div className="col-sm-9"><input type="text" className="form-control" /></div>
                                </div>
                                <div className="hr-line-dashed" />
                                
                               
                                </form>
                        </div>
                    </div>
                </div>

        </div>
                                                        </div>
                                                        <div className="modal-footer" style={{textAlign: "center"}}>
                                                            <button type="button" className="btn btn-white" data-dismiss="modal">Annuler</button>
                                                            <button type="button" className="btn btn-white" data-dismiss="modal">Enregistrer</button>
                                                            
                                                         </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <h2>Nom zone </h2>
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5">
                                        <dl className="dl-horizontal">
                                            <dt>Nombre des clients:</dt> <dd>90</dd>
                                            
                                        </dl>
                                    </div>
                                    <div className="col-lg-7" id="cluster_info">
                                        <dl className="dl-horizontal">
                                            <dt>Nombre des sous zones:</dt> <dd>10</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="row m-t-sm">

                                    <div className="col-lg-12">
                                    <table className="zone table table-striped table-bordered table-hover dataTables-example">
                                    <thead>
                                      <tr>
                                        <th>Nom de sous zone</th>
                                        <th>nombre des clients</th>
                                        <th></th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="gradeA">
                                        <td>Msaken</td>
                                        <td>90</td>
                                        <td align="center"> 
                                          <a type="button" className= "btn btn-outline btn-info btn-xs"href="detailSZ">
                                            <span className="fa fa-pencil" aria-hidden="true" ></span>                                
                                          </a>
                                          <a type="button" className="btn btn-outline btn-danger btn-xs"  href="detailClient" style={{marginLeft:'15px'}}>
                                           <i className="fa fa-trash" aria-hidden="true"></i>                                 
                                          </a> 
                                         </td>
                                       </tr><tr className="gradeA">
                                        <td>Sousse</td>
                                        <td>90</td>
                                        <td align="center"> 
                                          <a type="button" className= "btn btn-outline btn-info btn-xs"href="detailSZ">
                                            <span className="fa fa-pencil" aria-hidden="true" ></span>                                
                                          </a>
                                          <a type="button" className="btn btn-outline btn-danger btn-xs"  href="detailClient" style={{marginLeft:'15px'}}>
                                           <i className="fa fa-trash" aria-hidden="true"></i>                                 
                                          </a> 
                                         </td>
                                       </tr><tr className="gradeA">
                                        <td>Monastir</td>
                                        <td>90</td>
                                        <td align="center"> 
                                          <a type="button" className= "btn btn-outline btn-info btn-xs"href="detailSZ">
                                            <span className="fa fa-pencil" aria-hidden="true" ></span>                                
                                          </a>
                                          <a type="button" className="btn btn-outline btn-danger btn-xs"  href="detailClient" style={{marginLeft:'15px'}}>
                                           <i className="fa fa-trash" aria-hidden="true"></i>                                 
                                          </a> 
                                         </td>
                                       </tr><tr className="gradeA">
                                        <td>Masaadine</td>
                                        <td>90</td>
                                        <td align="center"> 
                                          <a type="button" className= "btn btn-outline btn-info btn-xs"href="detailSZ">
                                            <span className="fa fa-pencil" aria-hidden="true" ></span>                                
                                          </a>
                                          <a type="button" className="btn btn-outline btn-danger btn-xs"  href="detailClient" style={{marginLeft:'15px'}}>
                                           <i className="fa fa-trash" aria-hidden="true"></i>                                 
                                          </a> 
                                         </td>
                                       </tr><tr className="gradeA">
                                        <td>Jawhara</td>
                                        <td>90</td>
                                        <td align="center"> 
                                          <a type="button" className= "btn btn-outline btn-info btn-xs"href="detailSZ">
                                            <span className="fa fa-pencil" aria-hidden="true" ></span>                                
                                          </a>
                                          <a type="button" className="btn btn-outline btn-danger btn-xs"  href="detailClient" style={{marginLeft:'15px'}}>
                                           <i className="fa fa-trash" aria-hidden="true"></i>                                 
                                          </a> 
                                         </td>
                                       </tr><tr className="gradeA">
                                        <td>Sahloul</td>
                                        <td>90</td>
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
        </div>
  

);
}
}


export default ContentSZ;