import React, { Component } from 'react';
import './Client.css';
class ContentDC extends Component {
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
                                                    <a href="#" className="btn btn-info btn-xs pull-right" style={{ marginLeft: "10px" }}>Ajouter contact </a>
                                                    <a href="#" className="btn btn-danger btn-xs pull-right" style={{ marginLeft: "10px" }}>Supprimer</a>
                                                    <a href="#" className="btn btn-primary btn-xs pull-right" data-toggle="modal" data-target="#myModal4">Edit </a>
                                                    <div className="modal inmodal" id="myModal4" tabIndex={-1} role="dialog" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content animated fadeIn">
                                                                <div className="modal-header">
                                                                    <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Annuler</span></button>
                                                                    <i className="fa fa-clock-o modal-icon" />
                                                                    <h4 className="modal-title">Modifier client</h4>
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

                                        <div className="form-group"><label className="col-sm-2 control-label">Nature de client</label>
                                            <div className="col-sm-10"><select className="form-control m-b" name="account">
                                                <option>Grossiste</option>
                                                <option>option 2</option>
                                                <option>option 3</option>
                                                <option>option 4</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div className="hr-line-dashed" />
                                        <div className="form-group"><label className="col-sm-2 control-label">Adresse</label>
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
                                        <div className="hr-line-dashed" />
                                        <div className="form-group"><label className="col-sm-2 control-label">Sous zone</label>
                                            <div className="col-sm-10"><select className="form-control m-b" name="account">
                                                <option>Msaken</option>
                                                <option>Soussa</option>
                                                <option>Monastir</option>
                                                <option>option 4</option>
                                            </select>
                                            </div>
                                        </div>
                                        
                                        <div className="hr-line-dashed" />
                                        </form>
                                </div>
                            </div>
                        </div>

                </div>
                                                                </div>
                                                                <div className="modal-footer" style={{textAlign: "center"}}>
                                                                    <button type="button" className="btn btn-white" data-dismiss="modal">Close</button>
                                                                    <button type="button" className="btn btn-white" data-dismiss="modal">Enregistrer</button>
                                                                    
                                                                 </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <h2>Nom du client </h2>
                                                </div>
                                                <dl className="dl-horizontal">
                                                    <dt>Status:</dt> <dd><span className="label label-primary">Prospect</span></dd>
                                                </dl>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <dl className="dl-horizontal">
                                                    <dt>Nature:</dt> <dd>Grossiste</dd>
                                                    <dt>Tél:</dt> <dd>73 123 456 </dd>
                                                    <dt>Mail:</dt> <dd> exemple@gmail.com</dd>
                                                </dl>
                                            </div>
                                            <div className="col-lg-7" id="cluster_info">
                                                <dl className="dl-horizontal">
                                                    <dt>Zone:</dt> <dd>Sahel</dd>
                                                    <dt>Sous zone:</dt> <dd> M'saken</dd>
                                                    <dt>Adress:</dt> <dd> 14 de sousse, Msaken 4070</dd>
                                                </dl>
                                            </div>
                                        </div>
                                        <div className="row m-t-sm">
                                            <div className="col-lg-12">
                                                <div className="panel blank-panel">
                                                    <div className="panel-heading">
                                                        <div className="panel-options">
                                                            <ul className="nav nav-tabs">
                                                                <li className="active"><a href="#tab-1" data-toggle="tab">Contacts</a></li>
                                                                <li className><a href="#tab-2" data-toggle="tab">Commandes</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="panel-body">
                                                        <div className="tab-content">
                                                            <div className="tab-pane active" id="tab-1">
                                                                <div className="feed-activity-list">
                                                                    <div className="feed-element">
                                                                        <a href="#" className="pull-left">
                                                                        </a>
                                                                        <div className="media-body ">
                                                                              <a type="button" className="btn btn-danger btn-xs pull-right" href="detailClient" style={{marginLeft:'15px'}}>
                                                                                    <i className="fa fa-trash-o " style={{fontSize:"15px"}} aria-hidden="true"></i>                                 
                                                                              </a> 
                                                                             <a type="button" className="btn btn-primary btn-xs pull-right" href="detailClient">
                                                                               <span className="glyphicon glyphicon-edit" aria-hidden="true" style={{fontSize:"15px"}}></span>                                
                                                                             </a>
                                                                              
                                                                            <strong>Nom prénom</strong> Post  occupé  <br />
                                                                            <small className="text-muted"><strong>73 123 456 </strong>exemple@gmail.com</small>
                                                                            <div className="well">
                                                                                Discription ...
                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="feed-element">
                                                                        <a href="#" className="pull-left">
                                                                        </a>
                                                                        <div className="media-body ">
                                                                             <a type="button" className="btn btn-danger btn-xs pull-right" href="detailClient" style={{marginLeft:'15px'}}>
                                                                                    <i className="fa fa-trash-o " style={{fontSize:"15px"}} aria-hidden="true"></i>                                 
                                                                              </a> 
                                                                             <a type="button" className="btn btn-primary btn-xs pull-right" href="detailClient">
                                                                               <span className="glyphicon glyphicon-edit" aria-hidden="true" style={{fontSize:"15px"}}></span>                                
                                                                             </a>                                                                            <strong>Nom prénom 2 </strong> Post  occupé 2  <br />
                                                                            <small className="text-muted"><strong>73 112 456 </strong>exemple@gmail.com</small>
                                                                        </div>
                                                                    </div>


                                                                </div>
                                                            </div>
                                                            <div className="tab-pane" id="tab-2">
                                                                <table className="table table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Status</th>
                                                                            <th>référence</th>
                                                                            <th>Date</th>
                                                                            <th>Collaborateur</th>
                                                                            <th>Prix total</th>
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
                                                                                12.07.2014
                                                                            </td>
                                                                            <td>
                                                                               Collaborateur 1
                                                                            </td>
                                                                            <td>
                                                                                1000 DN
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

export default ContentDC;