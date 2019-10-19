import React, { Component } from 'react';
import './Client.css';
import API from "../utils/API";
import swal from 'sweetalert';
import Moment from 'react-moment';
import { Redirect } from 'react-router-dom'
class ContentDC extends Component {

    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }
    state = {
        idCollaborateur: '17',
        redirect: false,
        client: [],
        types: [],
        type: '',
        zones: [],
        zone: '',
        sousZones: [],
        sousZone: '',
        nom: '',
        tel: '',
        email: '',
        adresse: '',
        logo: '',
        idClient: '',
        idContact: '',
        contacts: [],
        contact: [],
        contactNom: '',
        contactTel: '',
        contactEmail: '',
        contactPoste: '',
        nouveaucontactNom: '',
        nouveaucontactTel: '',
        nouveaucontactEmail: '',
        nouveaucontactPoste: '',
        remarques: [],
        remarque: '',
        idremarque: '',
        remarqueIdcollaborateur: '',
        remarqueIdclient: '',
        remarqueDescription: '',
        remarqueTitre: '',



    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/client' />
        }
    }
    async componentDidMount() {

        let idClient = localStorage.getItem('idClient');
        this.setState({ idClient: idClient });
        try {
            // Load async data from an inexistent endpoint.
            let userData = await API.get(`/client/` + idClient)
                .then(res => {
                    const client = res.data.client;
                    this.setState({
                        client: client
                        , nom: client[0].intitule
                        , tel: client[0].telephone
                        , email: client[0].email
                        , adresse: client[0].adresse
                        , logo: client[0].logo
                    });
                    console.log("client", client)
                });
            // Load Contact par id client .
            await API.get(`/contact/client/` + idClient)
                .then(res => {
                    const contacts = res.data.contact;
                    if (contacts != null)
                        this.setState({
                            contacts: contacts
                        });
                    console.log("contacts", contacts)
                });
            // Load remarque par id client .
            await API.get(`/remarque/client/` + idClient)
                .then(res => {
                    const remarques = res.data.remarque;
                    if (remarques != null)
                        this.setState({
                            remarques: remarques
                        });
                    console.log("remarques", remarques)
                });
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }


    }
    typeChangeHandler = (event) => {

        console.log("event.target.value", event.target.value)
        this.setState({ type: event.target.value });
    }
    
    handleModifierClient = () => {
        API.get("/typeclient ")
            .then(res => {
                const types = res.data.type;
                this.setState({ types: types, type: this.state.client[0].id_type });
                console.log("typeclient,", types)
            });
        API.get("/zone ")
            .then(res => {
                const zones = res.data.zone;
                this.setState({ zones: zones, zone: this.state.client[0].id_zone });
                console.log("zone,", zones)
            });
        const id = this.state.client[0].id_zone;
        API.get("/zone/souszone/parents/" + id)
            .then(res => {
                const sousZones = res.data.sous_zone;
                this.setState({ sousZones: sousZones, sousZone: sousZones[0].id });
                console.log("sousZones get,", sousZones[0].id)
            });
    }
    handleDelete = () => {
        swal({
            title: "êtes-vous sûr?",
            text: "Une fois supprimer, vous ne pouvez plus le récupérer!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {

                try {
                    if (willDelete) {
                        API.delete("/client/delete/" + this.state.idClient)
                            .then(res => {

                                swal("Le client a bien été supprimer!", {
                                    icon: "success",
                                });
                                this.setRedirect();
                                console.log(`😱 Axios request failed delete client`);


                            })
                    }

                } catch (e) {

                    console.log(`😱 Axios request failed: ${e}`);
                }
            });
    }
    zoneChangeHandler = (event) => {
        console.log('this vaut :', event.target.value);
        this.setState({ zone: event.target.value });
        API.get("/zone/souszone/parents/" + event.target.value)
            .then(res => {
                const sousZones = res.data.sous_zone;
                if (sousZones != null)
                    this.setState({ sousZones: sousZones, sousZone: sousZones[0].id });
                else
                    this.setState({ sousZones: [], sousZone: null });
                console.log("sousZones,", sousZones)
            });
    }
    sousZoneChangeHandler = (event) => {
        console.log('this vaut :', event.target.value);
        this.setState({ sousZone: event.target.value });

    }
    nomChangeHandler = (event) => { this.setState({ nom: event.target.value }); }
    telChangeHandler = (event) => { this.setState({ tel: event.target.value }); }
    emailChangeHandler = (event) => { this.setState({ email: event.target.value }); }
    adresseChangeHandler = (event) => { this.setState({ adresse: event.target.value }); }
    handleSubmit = (event) => {
        event.preventDefault();      
        //console.log(this.state.nom, this.state.tel, this.state.email, this.state.adresse, this.state.type, this.state.sousZone,`${this.fileInput.current.files[0].name}`);
        const user = {
            idtype: this.state.type,
            intitule: this.state.nom,
            telephone: "this.state.tel",
            email: this.state.email,
            idsouszone: this.state.sousZone,
            adresse: this.state.adresse,
            logo :"popo"

        };
        try {
            // Load async data from an inexistent endpoint.
            API.post(`/update/client/${this.state.idClient}`, user)
                .then(res => {
                    const client = res.data.client;
                    this.setState({ client: client });
                    console.log('😱 Axios request client:', client);
                })
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }

    }


    /***************************** contact********************************/
    contactNomChangeHandler = (event) => { this.setState({ contactNom: event.target.value }); }
    contactTelChangeHandler = (event) => { this.setState({ contactTel: event.target.value }); }
    contactEmailChangeHandler = (event) => { this.setState({ contactEmail: event.target.value }); }
    contactPostChangeHandler = (event) => { this.setState({ contactPoste: event.target.value }); }
    handleSubmitContcat = (event) => {
        const context = this;
        event.preventDefault();
        //console.log(this.state.nom, this.state.tel, this.state.email, this.state.adresse, this.state.type, this.state.sousZone);
        const contact = {
            idclient: this.state.idClient,
            intitule: this.state.contactNom,
            poste: this.state.contactPoste,
            telephone: this.state.contactTel,
            email: this.state.contactEmail

        };
        try {
            // Load async data from an inexistent endpoint.
            API.post(`/update/contact/${this.state.idContact}`, contact)
                .then(res => {
                    API.get(`/contact/client/` + context.state.idClient)
                        .then(res => {
                            const contacts = res.data.contact;
                            if (contacts != null)
                                this.setState({
                                    contacts: contacts
                                });
                            console.log("contacts", contacts)
                        });
                    console.log('😱 Axios request failed:', contact);
                })
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }

    }
    handleEditContact = (id) => {
        this.setState({ idContact: id });
        API.get(`/contact/` + id)
            .then(res => {
                const contact = res.data.contact;
                this.setState({
                    contact: contact,
                    contactNom: contact[0].intitule,
                    contactTel: contact[0].telephone,
                    contactEmail: contact[0].email,
                    contactPoste: contact[0].poste,
                });
                console.log("contact", contact)
            });
    }
    handleDeleteContact = (id) => {
        swal({
            title: "êtes-vous sûr?",
            text: "Une fois supprimer, vous ne pouvez plus le récupérer!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                try {
                    if (willDelete) {
                        API.delete("/contact/delete/" + id)
                            .then(res => {
                                swal("Le client a bien été supprimer!", {
                                    icon: "success",
                                });
                                API.get(`/contact/client/` + this.state.idClient)
                                    .then(res => {
                                        const contact = res.data.contact;
                                        console.log("handleDeleteContact", contact)
                                        if (contact != null)
                                            this.setState({ contacts: contact });
                                        else
                                            this.setState({ contacts: [] });

                                    });
                            })
                    }


                } catch (e) {
                    console.log(`😱 Axios request failed: ${e}`);
                }
            });
        console.log("delete", id);
    }
    /*******************nouveau contacts************** */
    nouveaucontactNomChangeHandler = (event) => { this.setState({ nouveaucontactNom: event.target.value }); }
    nouveaucontactTelChangeHandler = (event) => { this.setState({ nouveaucontactTel: event.target.value }); }
    nouveaucontactEmailChangeHandler = (event) => { this.setState({ nouveaucontactEmail: event.target.value }); }
    nouveaucontactPostChangeHandler = (event) => { this.setState({ nouveaucontactPoste: event.target.value }); }
    handleSubmitNouveauContcat = (event) => {
        const context = this;
        event.preventDefault();
        //console.log(this.state.nom, this.state.tel, this.state.email, this.state.adresse, this.state.type, this.state.sousZone);
        const contact = {
            idclient: this.state.idClient,
            intitule: this.state.nouveaucontactNom,
            poste: this.state.nouveaucontactPoste,
            telephone: this.state.nouveaucontactTel,
            email: this.state.nouveaucontactEmail

        };
        try {
            // Load async data from an inexistent endpoint.
            API.post(`/contact`, contact)
                .then(res => {
                    API.get(`/contact/client/` + context.state.idClient)
                        .then(res => {
                            this.setState({
                                nouveaucontactNom: '',
                                nouveaucontactTel: '',
                                nouveaucontactEmail: '',
                                nouveaucontactPoste: ''
                            })
                            const contacts = res.data.contact;
                            if (contacts != null)
                                this.setState({
                                    contacts: contacts
                                });
                            console.log("contacts", contacts)
                        });
                    console.log('😱 Axios request failed:', contact);
                })
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }

    }
    /*******************remarque************** */

    nouveauRemarqueTitreHandler = (event) => { this.setState({ nouveauRemarqueTitre: event.target.value }); }
    nouveauRemarqueDescriptionChangeHandler = (event) => { this.setState({ nouveauRemarqueDescription: event.target.value }); }
    /*******************modifier remarque************** */

    modifierRemarqueTitreHandler = (event) => { this.setState({ remarqueTitre: event.target.value }); }
    modifierRemarqueDescriptionChangeHandler = (event) => { this.setState({ remarqueDescription: event.target.value }); }

    handleEditRemarque = (id) => {
        this.setState({ idremarque: id });
        API.get(`/remarque/` + id)
            .then(res => {
                const remarque = res.data.remarque;
                this.setState({
                    remarque: remarque,

                    remarqueIdcollaborateur: remarque[0].idcollaborateur,
                    remarqueIdclient: remarque[0].idclient,
                    remarqueDescription: remarque[0].description,
                    remarqueTitre: remarque[0].titre,
                });
            });
        console.log("bonjour")
    }
    /*******************ajouter remarque************** */
    handleAjouterRemarque = (event) => {

        const context = this;
        event.preventDefault();
        //console.log(this.state.nom, this.state.tel, this.state.email, this.state.adresse, this.state.type, this.state.sousZone);
        const remarque = {
            titre: this.state.nouveauRemarqueTitre,
            description: this.state.nouveauRemarqueDescription,
            idclient: this.state.idClient,
            idcollaborateur: this.state.idCollaborateur
        };
        try {
            // Load async data from an inexistent endpoint.
            API.post(`/remarque`, remarque)
                .then(res => {
                    API.get(`/remarque/client/` + this.state.idClient)
                        .then(res => {
                            const remarques = res.data.remarque;
                            if (remarques != null)
                                this.setState({
                                    remarques: remarques,
                                    nouveauRemarqueTitre: "",
                                    nouveauRemarqueDescription: ""
                                });
                            console.log("remarques", remarques)
                        });
                })
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }


    }
    /*******************modifier remarque************** */

    handleSubmitModifierRemarque = (event) => {

        const context = this;
        event.preventDefault();
        //console.log(this.state.nom, this.state.tel, this.state.email, this.state.adresse, this.state.type, this.state.sousZone);
        const remarque = {
            titre: this.state.remarqueTitre,
            description: this.state.remarqueDescription,
            idclient: this.state.idClient,
            idcollaborateur: this.state.idCollaborateur
        };
        try {
            // Load async data from an inexistent endpoint.
            API.post(`/remarque/update/${context.state.idremarque}`, remarque)
                .then(res => {
                    API.get(`/remarque/client/` + this.state.idClient)
                        .then(res => {
                            const remarques = res.data.remarque;
                            if (remarques != null)
                                this.setState({
                                    remarques: remarques
                                });
                            console.log("remarques", remarques)
                        });
                })
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }


    }

    /*******************modifier remarque************** */

    handleDeleteRemarque = (id) => {
        swal({
            title: "êtes-vous sûr?",
            text: "Une fois supprimer, vous ne pouvez plus le récupérer!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                try {
                    if (willDelete) {
                        API.delete("/remarque/delete/" + id)
                            .then(res => {
                                swal("Le client a bien été supprimer!", {
                                    icon: "success",
                                });
                                API.get(`/remarque/client/` + this.state.idClient)
                                    .then(res => {
                                        const remarques = res.data.remarque;
                                        console.log("handleDeleteContact", remarques)
                                        if (remarques != null)
                                            this.setState({ remarques: remarques });
                                        else
                                            this.setState({ remarques: [] });

                                    });
                            })
                    }


                } catch (e) {
                    console.log(`😱 Axios request failed: ${e}`);
                }
            });
        console.log("delete", id);
    }
    render() {
        /******************* remarque ************** */
        let ModifierRemarqueFormulaire =
            <form method="get" className="form-horizontal">
                <div className="form-group"><label className="col-sm-2 control-label">Titre </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={this.state.remarqueTitre} onChange={this.modifierRemarqueTitreHandler} /></div>
                </div>
                <div className="hr-line-dashed" />
                <div className="form-group"><label className="col-sm-2 control-label">Description</label>
                    <div className="col-sm-10"><textarea className="form-control" value={this.state.remarqueDescription}
                        onChange={this.modifierRemarqueDescriptionChangeHandler} />
                    </div>
                </div>

                <div className="hr-line-dashed" />
            </form>

        let formRemarque = this.state.remarques.map((remarque) => {
            return (
                <li>
                    <div>
                        <small style={{ left: "5px" }}> {remarque.collaborateur}</small>
                        <small><Moment format="YYYY/MM/DD HH:MM">
                            {remarque.date_creation.date}
                        </Moment></small>
                        <h4>{remarque.titre}</h4>
                        <p>{remarque.description}</p>
                        <a href="#" style={{ right: "25px" }} data-toggle="modal" data-target="#editRemarque"
                            onClick={() => this.handleEditRemarque(remarque.id)}><i className="fa fa-pencil " /></a>
                        <a href="#" onClick={() => this.handleDeleteRemarque(remarque.id)} ><i className="fa fa-trash-o " /></a>
                    </div>
                </li>)
        });
        /*******************nouveau remarque************** */

        let formNouveauRemarque =
            <form method="get" className="form-horizontal">
                <div className="form-group"><label className="col-sm-2 control-label">Titre </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={this.state.nouveauRemarqueTitre} onChange={this.nouveauRemarqueTitreHandler} /></div>
                </div>
                <div className="hr-line-dashed" />
                <div className="form-group"><label className="col-sm-2 control-label">Description</label>
                    <div className="col-sm-10"><textarea className="form-control" value={this.state.nouveauRemarqueDescription}
                        onChange={this.nouveauRemarqueDescriptionChangeHandler} />
                    </div>
                </div>

                <div className="hr-line-dashed" />
            </form>

        /*******************contacts************** */

        let formNouveauContact =
            <form method="get" className="form-horizontal">
                <div className="form-group"><label className="col-sm-2 control-label">Nom & Prénom</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={this.state.nouveaucontactNom} onChange={this.nouveaucontactNomChangeHandler} /></div>
                </div>
                <div className="hr-line-dashed" />
                <div className="form-group"><label className="col-sm-2 control-label">Poste occupé</label>
                    <div className="col-sm-10"><input type="text" className="form-control" value={this.state.nouveaucontactPoste} onChange={this.nouveaucontactPostChangeHandler} />
                    </div>
                </div>
                <div className="hr-line-dashed" />
                <div className="form-group"><label className="col-sm-2 control-label">Téléphone</label>
                    <div className="col-sm-10"><input type="text" className="form-control" value={this.state.nouveaucontactTel} onChange={this.nouveaucontactTelChangeHandler} />
                    </div>
                </div>
                <div className="hr-line-dashed" />

                <div className="form-group"><label className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-10"><input type="text" className="form-control" value={this.state.nouveaucontactEmail} onChange={this.nouveaucontactEmailChangeHandler} />
                    </div>
                </div>
                <div className="hr-line-dashed" />
            </form>

        let contacts = this.state.contacts.map((contact) => {
            return (
                <tr className="gradeA">
                    <td>{contact.intitule}</td>
                    <td>{contact.poste}</td>
                    <td>{contact.telephone}</td>
                    <td className="center">{contact.email}</td>
                    <td align="center">
                        <button type="button" className="btn btn-outline btn-primary btn-xs"
                            data-toggle="modal" data-target="#myModal2" onClick={() => this.handleEditContact(contact.id)}>
                            <span>Edit</span>
                        </button>
                        <a href="#" className="btn btn-danger btn-xs btn-outline pull-right" >
                            <i className="fa fa-trash" aria-hidden="true" onClick={() => this.handleDeleteContact(contact.id)}></i></a>
                    </td>


                </tr>
            )
        });
        let formContact = this.state.contact.map((contact) => {
            return (
                <form method="get" className="form-horizontal">
                    <div className="form-group"><label className="col-sm-2 control-label">Nom & Prénom</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" value={this.state.contactNom} onChange={this.contactNomChangeHandler} /></div>
                    </div>
                    <div className="hr-line-dashed" />
                    <div className="form-group"><label className="col-sm-2 control-label">Poste occupé</label>
                        <div className="col-sm-10"><input type="text" className="form-control" value={this.state.contactPoste} onChange={this.contactPostChangeHandler} />
                        </div>
                    </div>
                    <div className="hr-line-dashed" />
                    <div className="form-group"><label className="col-sm-2 control-label">Téléphone</label>
                        <div className="col-sm-10"><input type="text" className="form-control" value={this.state.contactTel} onChange={this.contactTelChangeHandler} />
                        </div>
                    </div>
                    <div className="hr-line-dashed" />

                    <div className="form-group"><label className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10"><input type="text" className="form-control" value={this.state.contactEmail} onChange={this.contactEmailChangeHandler} />
                        </div>
                    </div>
                    <div className="hr-line-dashed" />
                </form>)
        });
        /*******************client************** */

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
                     <div className=" form-group " data-provides="fileinput">
                          <label className="col-sm-2 control-label">Nom</label>   
                          <div className="col-sm-10">                   
                                  <input className="form-control" type="file" name="..."ref={this.fileInput} />
                          </div>   
                    </div>


                    <div className="hr-line-dashed" />
                    <div className="form-group"><label className="col-sm-2 control-label">Tél</label>
                        <div className="col-sm-10"><input type="text" className="form-control" value={this.state.tel} onChange={this.telChangeHandler} />
                        </div>
                    </div>
                    <div className="hr-line-dashed" />
                    <div className="form-group"><label className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10"><input type="text" className="form-control" value={this.state.email} onChange={this.emailChangeHandler} />
                        </div>
                    </div>
                    <div className="hr-line-dashed" />

                    <div className="form-group"><label className="col-sm-2 control-label">Nature de client</label>
                        <div className="col-sm-10"><select className="form-control m-b" name="account" value={this.state.type} onChange={this.typeChangeHandler}>
                            {types}
                        </select>
                        </div>
                    </div>
                    <div className="hr-line-dashed" />
                    <div className="form-group"><label className="col-sm-2 control-label">Adresse</label>
                        <div className="col-sm-10"><input type="text" className="form-control" name="password" value={this.state.adresse} onChange={this.adresseChangeHandler} /></div>
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

        let restClient = this.state.client.map((client) => {
            return (

                <div className="row">
                    {this.renderRedirect()}

                    <div className="profile-image col-lg-2">
                        {this.state.logo.length > 0 ?
                            <img src={`http://172.0.1.160:8080/Startec/web/uploads/documents/${this.state.logo}`} className="img-circle img-lg circle-border m-b-md" alt="profile" />
                            :
                            <img src="img/image-profil.jpg" className="img-circle img-lg circle-border m-b-md" alt="profile" />
                        }
                    </div>

                    <div className="col-lg-4">
                        <dl className="dl-horizontal">
                            <dl className="dl-horizontal"><dt>Nom:</dt> <dd>{client.intitule}</dd></dl>
                            <dt>Nature:</dt> <dd>{client.type}</dd>
                            <dt>Tél:</dt> <dd>{client.telephone} </dd>
                            <dt>Email:</dt> <dd> {client.email}</dd>
                        </dl>
                    </div>
                    <div className="col-lg-4" id="cluster_info">
                        <dl className="dl-horizontal">
                            <dl className="dl-horizontal"><dt>Status:</dt> <dd><span className="label label-primary">{client.type}</span></dd></dl>
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
                                            <a href="#" className="btn btn-danger btn-xs btn-outline pull-right" style={{ marginLeft: "10px" }} onClick={() => this.handleDelete()}>
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
                                                            <button type="button" className="btn btn-success btn-outline" data-dismiss="modal"
                                                                onClick={this.handleSubmit}>Enregistrer</button>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="modal inmodal" id="nouveauContact" tabIndex={-1} role="dialog" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content animated fadeIn">
                                                        <div className="modal-header">
                                                            <button type="button" className="close" data-dismiss="modal">
                                                                <span aria-hidden="true">×</span><span className="sr-only">Annuler</span></button>
                                                            <h4 className="modal-title">Ajouter un nouveau contact</h4>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="ibox float-e-margins">

                                                                        <div className="ibox-content">
                                                                            {formNouveauContact}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer" style={{ textAlign: "end" }}>
                                                            <button type="button" className="btn btn-primary btn-outline" data-dismiss="modal">Annuler</button>
                                                            <button type="button" className="btn btn-success btn-outline" data-dismiss="modal" onClick={this.handleSubmitNouveauContcat}>Enregistrer</button>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal inmodal" id="editRemarque" tabIndex={-1} role="dialog" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content animated fadeIn">
                                                        <div className="modal-header">
                                                            <button type="button" className="close" data-dismiss="modal">
                                                                <span aria-hidden="true">×</span><span className="sr-only">Annuler</span></button>
                                                            <h4 className="modal-title">Modifier la remarque</h4>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="ibox float-e-margins">

                                                                        <div className="ibox-content">
                                                                            {ModifierRemarqueFormulaire}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer" style={{ textAlign: "end" }}>
                                                            <button type="button" className="btn btn-primary btn-outline" data-dismiss="modal">Annuler</button>
                                                            <button type="button" className="btn btn-success btn-outline" data-dismiss="modal" onClick={this.handleSubmitModifierRemarque}>Enregistrer</button>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal inmodal" id="myModal2" tabIndex={-1} role="dialog" aria-hidden="true">
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
                                                                            {formContact}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer" style={{ textAlign: "end" }}>
                                                            <button type="button" className="btn btn-primary btn-outline" data-dismiss="modal">Annuler</button>
                                                            <button type="button" className="btn btn-success btn-outline" data-dismiss="modal" onClick={this.handleSubmitContcat}>Enregistrer</button>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal inmodal" id="nouveauRemarque" tabIndex={-1} role="dialog" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content animated fadeIn">
                                                        <div className="modal-header">
                                                            <button type="button" className="close" data-dismiss="modal">
                                                                <span aria-hidden="true">×</span><span className="sr-only">Annuler</span></button>
                                                            <h4 className="modal-title">Ajouter uune nouvelle remarque</h4>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="ibox float-e-margins">

                                                                        <div className="ibox-content">
                                                                            {formNouveauRemarque}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer" style={{ textAlign: "end" }}>
                                                            <button type="button" className="btn btn-primary btn-outline" data-dismiss="modal">Annuler</button>
                                                            <button type="button" className="btn btn-success btn-outline" data-dismiss="modal" onClick={this.handleAjouterRemarque}>Enregistrer</button>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>

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
                                                        <li ><a href="#tab-2" data-toggle="tab">Commandes</a></li>
                                                        <li ><a href="#tab-3" data-toggle="tab">Interventions</a></li>
                                                        <li ><a href="#tab-4" data-toggle="tab">Remarques</a></li>


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
                                                                        <th>
                                                                            <div className="m-b-md">
                                                                                <a href="#" className="btn btn-primary btn-xs pull-center"
                                                                                    onClick={() => this.handleModifierClient()}
                                                                                    data-toggle="modal" data-target="#nouveauContact">Nouveau contact </a>
                                                                            </div>
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {contacts}
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
                                                                    <div className="m-b-md">
                                                                        <a href="#" className="btn btn-primary btn-xs pull-right"

                                                                            data-toggle="modal" data-target="#nouveauRemarque">Nouveau remarque </a>
                                                                    </div>
                                                                    <ul className="notes">
                                                                        {formRemarque}
                                                                    </ul></div></div></div>
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