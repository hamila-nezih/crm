import React, { Component } from 'react';
import './Client.css';
import API from "../utils/API";
import swal from 'sweetalert';
import { Link } from 'react-router-dom'

const $ = window.$;

//import { NotificationContainer , NotificationManager} from 'react-notifications';




class ContentClient extends Component {
  state = {
    clients: []
  }
  async componentDidMount() {
    try {
     
      // Load async data from an inexistent endpoint.
      let userData = await API.get("/client ")
      .then(res => {
        const client = res.data.client;
        this.setState({clients:client});
        console.log(client)
      });
    } catch (e) {
      
    }
 
    const jqueryObj = $;
    jqueryObj(function () {
      jqueryObj('.dataTables-example').DataTable({
      });

    })
  }
  handleDetail= (id) => { 
    localStorage.setItem('idClient', id);
  }
  handleDelete= (id) => { 
    swal({
      title: "êtes-vous sûr?",
      text: "Une fois supprimer, vous ne pouvez plus le récupérer!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      try {
            if (willDelete)  { 
               API.delete("/client/delete/"+id)
                  .then(res => {
                           swal("Le client a bien été supprimer!", {
                                 icon: "success",
                                });
                            API.get("/client ")
                               .then(res => {
                                       const client = res.data.client;
                                       this.setState({clients:client});
                                        console.log(client)
                              });
                  })
            } 
            
           
      } catch (e) {
        console.log(`😱 Axios request failed: ${e}`);
      }
    });
    console.log("delete",id);
  }
  render() {
    let clients = this.state.clients.map((client) => {
      return (
        <tr className="gradeA" key={client.id}>
          <td>{client.intitule}</td>
          <td>{client.telephone}</td>
          <td>{client.email}</td>
          <td>{client.type}</td>
          <td className="center">{client.zone}</td>
          <td className="center">{client.adresse}</td>          
          <td align="center">
         
            <Link  type="button" className="btn btn-outline btn-primary btn-xs" to={`/detailClient`}
               onClick={() => this.handleDetail(client.id)} >
              <span aria-hidden="true" > Détail</span>
            </Link >
           
          </td>
        </tr>
      )
    });
    return (
      <div className="wrapper wrapper-content animated fadeInRight">
        <div className="row">
          <div className="col-lg-12">
            <div className="ibox float-e-margins">
              <div className="ibox-title" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h5 >Liste des clients</h5>
                <a type="button" className="btn btn-primary" href="nouveauClient" >Nouveau Client</a>
              </div>
              <div className="ibox-content">
                <div className="table">
                  <table className="table table-striped table-bordered table-hover dataTables-example">
                    
                    <thead>
                      <tr>
                        <th>Nom</th>
                        <th>Téléphone</th>
                        <th>Email</th>
                        <th>Nature client</th>
                        <th>Zone</th>
                        <th>Adresse</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {clients}
                    </tbody>

                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentClient;