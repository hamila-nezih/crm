import React, { Component } from 'react';
import './Client.css';
import API from "../utils/API";
import { BrowserRouter, Route, Link } from "react-router-dom";



class ContentDC extends Component {

    constructor(props) {
        super(props);
    }
    state = {
        client: [],
        types: [],
        type:'',
        zones: [],
        zone:'',
        sousZones: [],
        sousZone:'',
        nom:'',
        tel:'',
        email:'',
        adresse:''
    }
    async componentDidMount() {
        try {
            // Load async data from an inexistent endpoint.
            let userData = await API.get(`/client/` + 33)
                .then(res => {
                    const client = res.data.client;
                    this.setState({ client: client
                                    , nom:client[0].intitule 
                                    , tel:client[0].telephone
                                    , email:client[0].email 
                                    , adresse:client[0].adresse });
                    console.log("client", client)
                });
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }


    }
    typeChangeHandler = (event) => { 
        console.log("event.target.value",event.target.value)
        this.setState({type:event.target.value}); 
    }
     handleModifierClient = () => {
         API.get("/typeclient ")
        .then(res => {
          const types = res.data.type;
          this.setState({types:types,type:this.state.client[0].id_type});
          console.log("typeclient,",types)
        });
         API.get("/zone ")
           .then(res => {
            const zones = res.data.zone;
            this.setState({zones:zones,zone:this.state.client[0].id_zone});
            console.log("zone,",zones)
          });
          const id=this.state.client[0].id_zone;         
            API.get("/zone/souszone/parents/"+id)
          .then(res => {
            const sousZones = res.data.sous_zone;
            this.setState({sousZones:sousZones,sousZone:sousZones[0].id});
            console.log("sousZones get,",sousZones[0].id)
          });
    }
    zoneChangeHandler = (event) => {
        console.log('this vaut :', event.target.value);
        this.setState({zone:event.target.value});
         API.get("/zone/souszone/parents/"+event.target.value)
        .then(res => {
          const sousZones = res.data.sous_zone;
          if (sousZones != null)
             this.setState({sousZones:sousZones,sousZone:sousZones[0].id});
          else
          this.setState({sousZones:[],sousZone:null});
          console.log("sousZones,",sousZones)
        });
      }
      sousZoneChangeHandler = (event) => {
        console.log('this vaut :', event.target.value);
        this.setState({sousZone:event.target.value});
        
      }
      nomChangeHandler = (event) => { this.setState({nom:event.target.value}); }
      telChangeHandler = (event) =>  { this.setState({tel:event.target.value}); }
      emailChangeHandler = (event) =>  { this.setState({email:event.target.value}); }
      adresseChangeHandler = (event) =>  { this.setState({adresse:event.target.value}); }  
      handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state.nom,this.state.tel,this.state.email,this.state.adresse,this.state.type,this.state.sousZone);
        const user = {
                       idtype:this.state.type,                       
                       intitule: this.state.nom,
                       telephone: this.state.tel,
                       email: this.state.email,
                       idsouszone:this.state.sousZone,
                       adresse: this.state.adresse
                       
                     };
                     try {
                           // Load async data from an inexistent endpoint.
                           API.post("/update/client/33",user)
                          .then(res => {         
                            const client = res.data.client;
                            this.setState({ client: client});
                            console.log('😱 Axios request failed:',client);                       
                          })          
                        } catch (e) {
                          console.log(`😱 Axios request failed: ${e}`);
                        }
        
      }
    render() {

        let zones = this.state.zones.map((zone) => {
            return (
                  <option key={zone.id} value={zone.id}>{zone.intitule}</option>
                )
        });
        let types = this.state.types.map((type) => {          
            return (                
                     <option key={type.id} value={type.id} >{type.intitule}</option>                 
                  
                )
        });
        let sousZones = this.state.sousZones.map((zone) => {
            return (
                  <option key={zone.id} value={zone.id}  >{zone.intitule}</option>
                )
        });
        let formClient = this.state.client.map((client) => {
            return (
                <form method="get" className="form-horizontal">
                    <div className="form-group"><label className="col-sm-2 control-label">Nom</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" value={this.state.nom} onChange={this.nomChangeHandler} /></div>
                    </div>
                    <div className="hr-line-dashed" />
                    <div className="form-group"><label className="col-sm-2 control-label">Tél</label>
                        <div className="col-sm-10"><input type="text" className="form-control" value={this.state.tel} onChange={this.telChangeHandler}/>
                        </div>
                    </div>
                    <div className="hr-line-dashed" />
                    <div className="form-group"><label className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10"><input type="text" className="form-control" value={this.state.email} onChange={this.emailChangeHandler}/>
                        </div>
                    </div>
                    <div className="hr-line-dashed" />

                    <div className="form-group"><label className="col-sm-2 control-label">Nature de client</label>
                        <div className="col-sm-10"><select className="form-control m-b" name="account" value={this.state.type}onChange={this.typeChangeHandler}>
                        {types}
                        </select>
                        </div>
                    </div>
                    <div className="hr-line-dashed" />
                    <div className="form-group"><label className="col-sm-2 control-label">Adresse</label>
                        <div className="col-sm-10"><input type="text" className="form-control" name="password"value={this.state.adresse} onChange={this.adresseChangeHandler} /></div>
                    </div>
                    <div className="hr-line-dashed" />
                    <div className="form-group"><label className="col-sm-2 control-label">Zone</label>
                        <div className="col-sm-10"><select className="form-control m-b" name="account" value={this.state.zone} onChange={this.zoneChangeHandler}>
                        {zones}
                        </select>
                        </div>
                    </div>
                    <div className="hr-line-dashed" />
                    <div className="form-group"><label className="col-sm-2 control-label">Sous zone</label>
                        <div className="col-sm-10"><select className="form-control m-b" name="account" onChange={this.sousZoneChangeHandler} value={this.state.sous_zone} >
                               {sousZones}
                        </select>
                        </div>
                    </div>

                    <div className="hr-line-dashed" />
                </form>)
        });
        let nomClient = this.state.client.map((client) => {
            return (
                <dt>{client.intitule}</dt>

            )
        });
        let natureClient = this.state.client.map((client) => {
            return (

                <dl className="dl-horizontal">
                    <dt>Status:</dt> <dd><span className="label label-primary">{client.type}</span></dd>
                </dl>

            )
        });
        let restClient = this.state.client.map((client) => {
            return (

                <div className="row">
                    <div className="col-lg-5">
                        <dl className="dl-horizontal">
                            <dt>Nature:</dt> <dd>{client.type}</dd>
                            <dt>Tél:</dt> <dd>{client.telephone} </dd>
                            <dt>Email:</dt> <dd> {client.email}</dd>
                        </dl>
                    </div>
                    <div className="col-lg-7" id="cluster_info">
                        <dl className="dl-horizontal">
                            <dt>Zone:</dt> <dd>{client.zone}</dd>
                            <dt>Sous zone:</dt> <dd>{client.sous_zone}</dd>
                            <dt>Adress:</dt> <dd> {client.adresse}</dd>
                        </dl>
                    </div>
                </div>
            )
        });


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
                                            <button className="btn btn-primary btn-outline btn-xs pull-right" onClick={() => this.handleModifierClient()}
                                                data-toggle="modal" data-target="#myModal4">
                                                <i className="fa fa-pencil" aria-hidden="true"></i></button>
                                            <div className="modal inmodal" id="myModal4" tabIndex={-1} role="dialog" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content animated fadeIn">
                                                        <div className="modal-header">
                                                            <button type="button" className="close" data-dismiss="modal">
                                                                <span aria-hidden="true">×</span><span className="sr-only">Annuler</span></button>
                                                            <h4 className="modal-title">Modifier client</h4>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="ibox float-e-margins">

                                                                        <div className="ibox-content">
                                                                        {formClient}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer" style={{ textAlign: "end" }}>
                                                            <button type="button" className="btn btn-primary btn-outline" data-dismiss="modal">Annuler</button>
                                                            <button type="button" className="btn btn-success btn-outline" data-dismiss="modal" onClick={this.handleSubmit}>Enregistrer</button>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            {nomClient}
                                        </div>
                                        {natureClient}
                                    </div>
                                </div>
                                {restClient}

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