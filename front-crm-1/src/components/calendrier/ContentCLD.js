import React, { Component } from 'react';
const $ = window.$;

class ContentCLD extends Component {
    componentDidMount() {
        $(function () {
            $('.i-checks').iCheck({
                checkboxClass: 'icheckbox_square-green',
                radioClass: 'iradio_square-green'
            });

            /* initialize the external events
             -----------------------------------------------------------------*/


            $('#external-events div.external-event').each(function () {

                // store data so the calendar knows to render an event upon drop
                $(this).data('event', {
                    title: $.trim($(this).text()), // use the element's text as the event title
                    stick: true // maintain when user navigates (see docs on the renderEvent method)
                });

                // make the event draggable using jQuery UI
                $(this).draggable({
                    zIndex: 1111999,
                    revert: true,      // will cause the event to go back to its
                    revertDuration: 0  //  original position after the drag
                });

            });


            /* initialize the calendar
             -----------------------------------------------------------------*/
            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();

            $('#calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                editable: true,
                droppable: true, // this allows things to be dropped onto the calendar
                drop: function () {
                    // is the "remove after drop" checkbox checked?
                    if ($('#drop-remove').is(':checked')) {
                        // if so, remove the element from the "Draggable Events" list
                        $(this).remove();
                    }
                },
                events: [
                    {
                        title: 'Prospection',
                        start: new Date(y, m, 1),
                        url: 'detailITV',
                        backgroundColor:"#23c6c8"
                    },
                    {
                        title: 'Livraison',
                        start: new Date(y, m, d - 5),
                        end: new Date(y, m, d - 2),
                        url: 'detailITV',
                        backgroundColor:"#1ab394"
                    },
                    {
                        id: 999,
                        title: 'Recouvrement',
                        start: new Date(y, m, d - 3, 16, 0),
                        allDay: false,
                        url: 'detailITV',
                        backgroundColor:"#1c84c6;"
                    },
                    {
                        id: 999,
                        title: 'Evenement',
                        start: new Date(y, m, d + 4, 16, 0),
                        allDay: false,
                        url: 'detailITV',
                        backgroundColor:"#f8ac59"
                    },
                    {
                        title: 'Reclamation',
                        start: new Date(y, m, d, 10, 30),
                        allDay: false,
                        url: 'detailITV',
                        backgroundColor:"#ed5565"
                    },
                    {
                        title: 'Livraison',
                        start: new Date(y, m, d, 12, 0),
                        end: new Date(y, m, d, 14, 0),
                        url: 'detailITV',
                        allDay: false,
                        backgroundColor:"#1ab394"
                    },
                    {
                        title: 'Evenement',
                        start: new Date(y, m, d + 1, 19, 0),
                        end: new Date(y, m, d + 1, 22, 30),
                        url: 'detailITV',
                        allDay: false,
                        backgroundColor:"#f8ac59"
                    },
                    {
                        title: 'Evenement',
                        start: new Date(y, m, 28),
                        end: new Date(y, m, 29),
                        url: 'detailITV',
                        backgroundColor:"#f8ac59"
                    }
                ]
            });
        });
    }
    render() {
        return (
            <div>
                     <div id="page-wrapper" class="gray-bg">
                    <div className="row border-bottom">
                        <nav className="navbar navbar-static-top" role="navigation" style={{ marginBottom: 0 }}>
                            <div className="navbar-header">
                                <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i className="fa fa-bars" /> </a>

                            </div>
                            <ul className="nav navbar-top-links navbar-right">
                                <li>
                                    <span className="m-r-sm text-muted welcome-message"></span>
                                </li>
                                <li>
                                    <a href="/login">
                                        <i className="fa fa-sign-out" /> Déconnecté
                 </a>
                                </li>

                            </ul>
                        </nav>
                        <div className="footer">
                            <div className="pull-right">
                                <strong>STARTEC</strong>
                            </div>
                            <div>
                                <strong>Copyright</strong> GST © 2019
                    </div>
                        </div>  </div>

                    <div >
                        <div className="wrapper wrapper-content">
                            <div className="row animated fadeInDown">
                                <div className="col-lg-12">
                                    <div className="ibox float-e-margins">
                                        <div className="ibox-title" style={{marginBottom:"10px"}}>
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <select className="form-control m-b" name="account">
                                                      <option>tous les interventions </option>
                                                      <option>Livaison</option>
                                                      <option>Prospection</option>
                                                      <option>Recouvrement</option>
                                                      <option>Reclamation</option>
                                                      <option>Evenement</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-3">
                                                    <select className="form-control m-b" name="account">
                                                      <option>Tous les collaborateurs</option>
                                                      <option>Sahel </option>
                                                      <option>Gabon</option>
                                                      <option>Sud</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-3">
                                                    <select className="form-control m-b" name="account">
                                                    <option>Tous les zones</option>
                                                      <option>Sahel </option>
                                                      <option>Gabon</option>
                                                      <option>Sud</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-3">
                                                    <select className="form-control m-b" name="account">
                                                      <option>Tous les sous zones </option>
                                                      <option>Sousse </option>
                                                      <option>M'saken</option>
                                                      <option>Monastir</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">                                              
                                                
                                                <div className="col-lg-2 bg-info  b-r-xl p-xxs"style={{marginLeft:"2%",width:"180px",padding:"1px",textAlign: "center",marginTop:"10px"}}>
                                                    Prospection
                                                </div>
                                                <div className="col-lg-2 bg-primary  b-r-xl p-xxs" style={{marginLeft:"2%",width:"180px",padding:"1px",textAlign: "center",marginTop:"10px"}}>
                                                    Livaison
                                                </div>
                                                <div className="col-lg-2 bg-success p-xxs b-r-xl"style={{marginLeft:"2%",width:"180px",padding:"1px",textAlign: "center",marginTop:"10px"}}>
                                                    Recouvrement
                                                </div> 
                                                
                                                <div className="col-lg-2 bg-warning  p-xxs b-r-xl"style={{marginLeft:"2%",width:"180px",padding:"1px",textAlign: "center",marginTop:"10px"}}>
                                                    Evenement
                                                </div>
                                                <div className="col-lg-4 bg-danger p-xxs b-r-xl"style={{marginLeft:"2%",width:"170px",padding:"1px",textAlign: "center",marginTop:"10px"}}>
                                                    Reclamation
                                                </div>

                                               
                                            </div>
                                        </div>
                                        <div className="ibox-content">
                                            <div id="calendar" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer">
                            <div className="pull-right">
                                10GB of <strong>250GB</strong> Free.
    </div>
                            <div>
                                <strong>Copyright</strong> Example Company © 2014-2017
    </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentCLD;