import React, { Component } from 'react';
import './Client.css';
import API from "../utils/API";
import axios from 'axios';
const $ = window.$;


class ContentClient extends Component {
  state = {
    clients: []
  }
  async componentDidMount() {
    try {
      // Load async data from an inexistent endpoint.
      let userData = await API.get("/client ")
      .then(res => {
        const persons = res.data;
        console.log("persons",persons);
      });
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
 
    this.setState({
      clients:
        [
          {
            "id": "1",
            "Nom": "GST",
            "Tel": "73 000 522",
            "Email": "exemple@gmail.com",
            "Nature": "Grossiste",
            "Adress": "10 Rue de sousse Msaken 4070",
            "zone": "Sahel"
          },
          {
            "id": "2",
            "Nom": "IObird",
            "Tel": "73 553 522",
            "Email": "azerty@gmail.com",
            "Nature": "détail",
            "Adress": "10 Rue de sousse Msaken 4070",
            "zone": "Sahel"
          }
        ]
    });
    $(function () {
      $('.dataTables-example').DataTable({
      });

    })
  }
  render() {
    let clients = this.state.clients.map((client) => {
      return (
        <tr className="gradeA" key={client.id}>
          <td>{client.Nom}</td>
          <td>{client.Tel}</td>
          <td>{client.Email}</td>
          <td>{client.Nature}</td>
          <td className="center">{client.Adress}</td>
          <td className="center">{client.zone}</td>
          <td align="center">
            <a type="button" className="btn btn-outline btn-primary btn-xs" href="detailClient">
              <span aria-hidden="true" > Détail</span>
            </a>
            <a type="button" className="btn btn-outline btn-danger btn-xs" href="detailClient" style={{ marginLeft: '15px' }}>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </a>
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
                <a type="button" class="btn btn-primary" href="nouveauClient" >Nouveau Client</a>
              </div>
              <div className="ibox-content">
                <div className="table">
                  <table className="table table-striped table-bordered table-hover dataTables-example">
                    <thead>
                      <tr>
                        <th>Nom</th>
                        <th>Tél</th>
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