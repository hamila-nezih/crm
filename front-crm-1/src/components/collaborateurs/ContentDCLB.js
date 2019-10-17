import React, { Component } from 'react';
import '../Client.css';

class ContentDCLB extends Component {
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
                                                <a href="ajouterITV" className="btn btn-primary btn-xs pull-right" style={{ marginLeft: "10px" }}>Nouvelle intervention </a>
                                                    <a href="#" className="btn btn-danger btn-xs btn-outline pull-right" style={{ marginLeft: "10px" }}>
                                                        <i className="fa fa-trash" aria-hidden="true"></i></a>
                                                    <a href="#" className="btn btn-primary btn-outline btn-xs pull-right" data-toggle="modal" data-target="#myModal4">
                                                    <i className="fa fa-pencil" aria-hidden="true"></i></a>

                                                    
                                                    <div className="modal inmodal" id="myModal4" tabIndex={-1} role="dialog" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content animated fadeIn">
                                                                <div className="modal-header">
                                                                    <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Annuler</span></button>
                                                                    <h4 className="modal-title">Modifier collaborateur</h4>
                                                                </div>
                                                                <div className="modal-body">
                                                                <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox float-e-margins">
                                
                                <div className="ibox-content">
                                    <form method="get" className="form-horizontal">
                                        <div className="form-group"><label className="col-sm-2 control-label">Nom</label>
                                            <div className="col-sm-10"><input type="text" className="form-control" /></div>
                                        </div>
                                        <div className="hr-line-dashed" />
                                        <div className="form-group"><label className="col-sm-2 control-label">Tél</label>
                                            <div className="col-sm-10"><input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="hr-line-dashed" />
                                        <div className="form-group"><label className="col-sm-2 control-label">Mail</label>
                                            <div className="col-sm-10"><input type="password" className="form-control" name="password" /></div>
                                        </div>
                                        <div className="hr-line-dashed" />
                                        <div className="form-group"><label className="col-sm-2 control-label">Zone</label>
                                            <div className="col-sm-10"><select className="form-control m-b" name="account">
                                                <option>Sahel</option>
                                                <option>Gabon</option>
                                                <option>Sud</option>
                                                <option>option 4</option>
                                            </select>
                                            </div>
                                        </div>
                                       
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

                                                    <h2>Nom du collaborateur </h2>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <dl className="dl-horizontal">
                                                    <dt>Tél:</dt> <dd>53 123 456 </dd>
                                                    <dt>Mail:</dt> <dd> exemple@gmail.com</dd>
                                                </dl>
                                            </div>
                                            <div className="col-lg-7" id="cluster_info">
                                                <dl className="dl-horizontal">
                                                    <dt>Zone:</dt> <dd>Sahel</dd>
                                                </dl>
                                            </div>
                                        </div>
                                        <div className="row m-t-sm">
                                            <div className="col-lg-12">
                                                <div className="panel blank-panel">
                                                    <div className="panel-heading">
                                                        <div className="panel-options">
                                                            <ul className="nav nav-tabs">
                                                                <li className="active"><a href="#tab-1" data-toggle="tab">intervention en attente</a></li>
                                                                <li className><a href="#tab-2" data-toggle="tab">Intervention Cloturé</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="panel-body">
                                                        <div className="tab-content">
                                                            <div className="tab-pane active" id="tab-1">
                                                                <div className="feed-activity-list">
                                                                <table className="table table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Status</th>
                                                                            <th>référence</th>
                                                                            <th>Client</th>
                                                                            <th>Date</th>
                                                                            <th>Commentaires</th>
                                                                            <th></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td >
                                                                                <span className="label label-info"><i class="fa fa-hourglass-start"></i> En attente</span>
                                                                            </td>
                                                                            <td>
                                                                                X21421p
                            </td>
                                                                            <td>
                                                                                Nom du client
                                                                            </td>
                                                                             <td>
                                                                                12 / 07 / 19
                                                                            </td>

                                                                            <td>
                                                                                <p className="small" >
                                                                                    Remarque...
                                                                                </p>
                                                                            </td>
                                                                            <td style={{ width: "7%" }}>
                                                                                <div className="media-body " >
                                                                                <a type="button" className="btn btn-danger btn-xs pull-right" href="detailClient" style={{marginLeft:'15px'}}>
                                                                                    <i className="fa fa-trash-o " style={{fontSize:"15px"}} aria-hidden="true"></i>                                 
                                                                              </a> 
                                                                             <a type="button" className="btn btn-primary btn-xs pull-right" href="detailClient">
                                                                               <span className="glyphicon glyphicon-edit" aria-hidden="true" style={{fontSize:"15px"}}></span>                                
                                                                             </a>                                                                                </div>
                                                                            </td>
                                                                        </tr>

                                                                    </tbody>
                                                                </table>
                                                                </div>
                                                                </div>
                                                        
                                                            <div className="tab-pane" id="tab-2">
                                                                <table className="table table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Status</th>
                                                                            <th>référence</th>
                                                                            <th>Nom du client</th>
                                                                            <th>Date</th>
                                                                            <th>Commentaires</th>
                                                                            <th></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <span className="label label-primary"><i className="fa fa-check" /> Validé</span>
                                                                            </td>
                                                                            <td>
                                                                                X21421p
                                                                            </td>
                                                                            <td>
                                                                                Nom-Exemple
                                                                            </td>    
                                                                            <td>
                                                                              12 / 04 / 19
                                                                            </td>                                                                     


                                                                            <td>
                                                                                <p className="small" >
                                                                               Remarque ...
                                                                                </p>
                                                                            </td>
                                                                            <td style={{ width: "7%" }}>
                                                                                <div className="media-body " >
                                                                                <a type="button" className="btn btn-danger btn-xs pull-right" href="detailClient" style={{marginLeft:'15px'}}>
                                                                                    <i className="fa fa-trash-o " style={{fontSize:"15px"}} aria-hidden="true"></i>                                 
                                                                              </a> 
                                                                             <a type="button" className="btn btn-primary btn-xs pull-right" href="detailClient">
                                                                               <span className="glyphicon glyphicon-edit" aria-hidden="true" style={{fontSize:"15px"}}></span>                                
                                                                             </a>                                                                                </div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          

        );
    }
}


export default ContentDCLB;