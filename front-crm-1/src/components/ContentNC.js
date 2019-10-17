import React, { Component } from 'react';
import API from "../utils/API";
import {Link} from 'react-router'
import  { Redirect } from 'react-router-dom';
class ContentNC extends Component {
    state = {
        types: [],
        zones: [],
        sousZones: [],
        sousZone:'',
        zone:'',
        type:'',
        nom:'',
        tel:'',
        email:'',
        adresse:''
      }
      
    async componentDidMount() {              
        try {
          // Load async data from an inexistent endpoint.
           await API.get("/typeclient ")
          .then(res => {
            const types = res.data.type;
            this.setState({types:types,type:types[0].id});
            console.log("typeclient,",types)
          });
           await API.get("/zone ")
           .then(res => {
            const zones = res.data.zone;
            this.setState({zones:zones,zone:zones[0].id});
            console.log("zone,",zones)
          });
           const id=this.state.zones[0].id;         
           await API.get("/zone/souszone/parents/"+id)
          .then(res => {
            const sousZones = res.data.sous_zone;
            this.setState({sousZones:sousZones,sousZone:sousZones[0].id});
            console.log("sousZones,",sousZones)
          });
          
        } catch (e) {
          console.log(`😱 Axios request failed: ${e}`);
        }
    }
     nomChangeHandler = (event) => { this.setState({nom:event.target.value}); }
     telChangeHandler = (event) =>  { this.setState({tel:event.target.value}); }
     emailChangeHandler = (event) =>  { this.setState({email:event.target.value}); }
     adresseChangeHandler = (event) =>  { this.setState({adresse:event.target.value}); }     
     zoneChangeHandler = (event) => {
        console.log('this vaut :', event.target.value);
         API.get("/zone/souszone/parents/"+event.target.value)
        .then(res => {
          const sousZones = res.data.sous_zone;
          if (sousZones != null)
             this.setState({sousZones:sousZones});
          else
          this.setState({sousZones:[]});
          console.log("sousZones,",sousZones)
        });
      }
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
                          API.post("/posts/client",user)
                          .then(res => {      
                            window.location = '/client';                       
                          })          
                        } catch (e) {
                          console.log(`😱 Axios request failed: ${e}`);
                        }
        
      }
   

    render() {
        let types = this.state.types.map((type) => {
            return (
                  <option key={type.id} value={"dog"}>{type.intitule}</option>
                )
        });
        let zones = this.state.zones.map((zone) => {
            return (
                  <option key={zone.id} value={zone.id}>{zone.intitule}</option>
                )
        });
        let sousZones = this.state.sousZones.map((zone) => {
            return (
                  <option key={zone.id}>{zone.intitule}</option>
                )
        });
        return (
            <div>                              
              <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox float-e-margins">
                                <div className="ibox-title">
                                    <h5>Ajouter nouveau client </h5>                                   
                                </div>
                                <div className="ibox-content">
                                    <form method="get" className="form-horizontal" onSubmit={this.handleSubmit}>
                                    <div className="form-group"><label className="col-sm-2 control-label">Nom & prénom</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" 
                                                        required
                                                        value={this.state.nom} 
                                                        onChange={this.nomChangeHandler}/>
                                            </div>
                                    </div>
                                    <div className="hr-line-dashed" />
                                    <div className="form-group"><label className="col-sm-2 control-label">Nature de client</label>
                                            <div className="col-sm-10">
                                                <select className="form-control m-b" name="account">
                                                    {types}
                                                </select>
                                            </div>
                                        </div>
                                       
                                        <div className="hr-line-dashed" />
                                        <div className="form-group"><label className="col-sm-2 control-label">Téléphone</label>
                                            <div className="col-sm-10">
                                                <input type="number"  className="form-control"min="10000000" max="99999999" value={this.state.tel} onChange={this.telChangeHandler} />
                                            </div>
                                        </div>
                                        <div className="hr-line-dashed" />
                                        <div className="form-group"><label className="col-sm-2 control-label">Email</label>
                                            <div className="col-sm-10">
                                                <input type="email" className="form-control" 
                                                  value={this.state.email} onChange={this.emailChangeHandler}  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}"/>
                                            </div>
                                        </div>                                       
                                        <div className="hr-line-dashed" />
                                        <div className="form-group"><label className="col-sm-2 control-label">Zone</label>
                                            <div className="col-sm-10">                                               
                                                <select className="form-control m-b" name="account" onChange={this.zoneChangeHandler}>
                                                  {zones}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="hr-line-dashed" />
                                        <div className="form-group"><label className="col-sm-2 control-label">Sous zone</label>
                                            <div className="col-sm-10"><select className="form-control m-b" name="account">
                                                {sousZones}
                                            </select>
                                            </div>
                                        </div>
                                        <div className="hr-line-dashed" />
                                        <div className="form-group"><label className="col-sm-2 control-label">Adresse</label>
                                            <div className="col-sm-10"><input type="text" required className="form-control" name="password" 
                                              value={this.state.adresse} onChange={this.adresseChangeHandler}/></div>
                                        </div>
                                        <div className="hr-line-dashed" />
                                        <div className="form-group text"style={{paddingTop: "3%", textAlign:"end",paddingRight:"20px"}}>
                                                <a className="btn btn-primary btn-outline" style={{marginRight:"10px",padding:"3px 10px"}} type="submit" href="client">Annuler</a>
                                                <input type="submit" value="Enregister" className="btn btn-success "style={{padding:"3px 10px"}}  />
                                                
                                         
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
        );
    }
}

export default ContentNC;