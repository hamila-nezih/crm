import React, { Component } from 'react';
import './Client.css';

class ContentDC extends Component {
    render() {
        return (

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wrapper wrapper-content animated fadeInUp">
                                <div className="ibox">
                                    <div className="ibox-content">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="m-b-md">
                                                    <a href="#" className="btn btn-primary btn-xs pull-right" style={{ marginLeft: "10px" }}>Nouveau contact </a>
                                                    <a href="#" className="btn btn-danger btn-xs btn-outline pull-right" style={{ marginLeft: "10px" }}>
                                                        <i className="fa fa-trash" aria-hidden="true"></i></a>
                                                    <a href="#" className="btn btn-primary btn-outline btn-xs pull-right" data-toggle="modal" data-target="#myModal4">
                                                    <i className="fa fa-pencil" aria-hidden="true"></i></a>
                                                    <div className="modal inmodal" id="myModal4" tabIndex={-1} role="dialog" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content animated fadeIn">
                                                                <div className="modal-header">
                                                                    <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Annuler</span></button>
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
                                                                                                <option>Détail</option>
                                                                                                <option>Prospect</option>
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
                                                                <div className="modal-footer" style={{ textAlign: "end" }}>
                                                                    <button type="button" className="btn btn-primary btn-outline" data-dismiss="modal">Annuler</button>
                                                                    <button type="button" className="btn btn-success btn-outline" data-dismiss="modal">Enregistrer</button>

                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <dt>Nom du client </dt>
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
                                                                <li className><a href="#tab-3" data-toggle="tab">Interventions</a></li>
                                                                <li className><a href="#tab-4" data-toggle="tab">Remarques</a></li>


                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="panel-body">
                                                        <div className="tab-content">
                                                            <div className="tab-pane active" id="tab-1">
                                                                <div className="table">
                                                                    <table className="table table-striped table-bordered table-hover dataTables-example">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Nom & prénom</th>
                                                                                <th>Poste occupé</th>
                                                                                <th>Tél</th>
                                                                                <th>Email</th>
                                                                                <th></th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr className="gradeA">
                                                                               
                                                                                <td>Nom de contact</td>
                                                                                <td>Directeur</td>
                                                                                <td>
                                                                                    72 545 125
                                                                                </td>
                                                                                <td className="center">exemple@gmail.com</td>
                                                                                <td align="center">
                                                                                    <a type="button" className="btn btn-outline btn-primary btn-xs" href="detailITV">
                                                                                        <span>Détail</span>
                                                                                    </a>
                                                                                    <a href="#" className="btn btn-danger btn-xs btn-outline pull-right" >
                                                                                   <i className="fa fa-trash" aria-hidden="true"></i></a>

                                                                                </td>


                                                                            </tr>




                                                                        </tbody>
                                                                        <tfoot>

                                                                        </tfoot>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane " id="tab-4">
                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <div className="wrapper wrapper-content animated fadeInUp">
                                                                            <ul className="notes">
                                                                                <li>
                                                                                    <div>
                                                                                        <small>12:03:28 12-04-2014</small>
                                                                                        <h4>Livraison</h4>
                                                                                        <p>Livraison terminé.</p>
                                                                                        <a href="#"><i className="fa fa-trash-o " /></a>
                                                                                    </div>
                                                                                </li></ul></div></div></div>
                                                            </div>
                                                            <div className="tab-pane " id="tab-3">
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
                                                                                    <a type="button" className="btn btn-outline btn-primary btn-xs" href="detailITV">
                                                                                        <span>Détail</span>
                                                                                    </a>

                                                                                </td>


                                                                            </tr>




                                                                        </tbody>
                                                                        <tfoot>

                                                                        </tfoot>
                                                                    </table>
                                                                </div></div>
                                                            <div className="tab-pane " id="tab-2">
                                                                <table className="table table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Status</th>
                                                                            <th>référence</th>
                                                                            <th>Client</th>
                                                                            <th>Collaborateur</th>
                                                                            <th>Prix total</th>
                                                                            <th>Date</th>
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
                                                                                client1
                                                                            </td>
                                                                            <td>
                                                                                Collaborateur1
                                                                            </td>
                                                                            <td>
                                                                                100 DN
                                                                            </td>

                                                                            <td>
                                                                                12/12/2018
                                                                            </td>
                                                                            <td style={{ width: "10%" }}>
                                                                                <div className="media-body " >
                                                                                    <a type="button" className="btn btn-outline btn-primary btn-xs" href="detailClient">
                                                                                        Edit
                                                                                 </a>
                                                                                    <a type="button" className="btn btn-outline btn-danger btn-xs" href="detailClient" style={{ marginLeft: '15px' }}>
                                                                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                                                                    </a>
                                                                                </div>
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
        );
    }
}

export default ContentDC;