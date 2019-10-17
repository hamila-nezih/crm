import React, { Component } from 'react';

class ContentNC extends Component {
    handleAjouterClient = () => {
        console.log('this vaut :', this);
      }
    render() {
        return (
            <div>
                 
              <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox float-e-margins">
                                <div className="ibox-title">
                                    <h5>Ajouter nouveau client </h5>                                   
                                </div>
                                <div className="ibox-content">
                                    <form method="get" className="form-horizontal">
                                    <div className="form-group"><label className="col-sm-2 control-label">Nature de client</label>
                                            <div className="col-sm-10"><select className="form-control m-b" name="account">
                                                <option>Grossiste</option>
                                                <option>Détail</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div className="form-group"><label className="col-sm-2 control-label">Nom & prénom</label>
                                            <div className="col-sm-10"><input type="text" className="form-control" /></div>
                                        </div>
                                        <div className="hr-line-dashed" />
                                        <div className="form-group"><label className="col-sm-2 control-label">Téléphone</label>
                                            <div className="col-sm-10"><input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="hr-line-dashed" />
                                        <div className="form-group"><label className="col-sm-2 control-label">Email</label>
                                            <div className="col-sm-10"><input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="hr-line-dashed" />

                                       
                                        
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
                                        <div className="form-group"><label className="col-sm-2 control-label">Adresse</label>
                                            <div className="col-sm-10"><input type="password" className="form-control" name="password" /></div>
                                        </div>
                                        <div className="hr-line-dashed" />
                                        <div className="form-group"style={{paddingTop: "3%"}}>
                                           <div className="col-sm-9"style={{paddingBottom: "7%"}}></div>
                                           
                                                <a className="btn btn-primary btn-outline" style={{marginRight:"10px",padding:"3px 10px"}} type="submit" href="client">Annuler</a>
                                                <a className="btn btn-success btn-outline"style={{padding:"3px 10px"}}  
                                                   type="submit" href="client" onClick={this.handleAjouterClient}>
                                                       Enregister
                                                </a>
                                         
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