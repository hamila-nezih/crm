import React, { Component } from 'react';
import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption} from "mdbreact";
const $ = window.$;


class ContentAITV extends Component {

  componentDidMount() {
    $(function () {
      $('.tagsinput').tagsinput({
        tagClass: 'label label-primary'
      });

      var $image = $(".image-crop > img")
      $($image).cropper({
        aspectRatio: 1.618,
        preview: ".img-preview",
        done: function (data) {
          // Output the result data for cropping image.
        }
      });

      var $inputImage = $("#inputImage");
      if (window.FileReader) {
        $inputImage.change(function () {
          var fileReader = new FileReader(),
            files = this.files,
            file;

          if (!files.length) {
            return;
          }

          file = files[0];

        });
      } else {
        $inputImage.addClass("hide");
      }

      $("#download").click(function () {
        window.open($image.cropper("getDataURL"));
      });

      $("#zoomIn").click(function () {
        $image.cropper("zoom", 0.1);
      });

      $("#zoomOut").click(function () {
        $image.cropper("zoom", -0.1);
      });

      $("#rotateLeft").click(function () {
        $image.cropper("rotate", 45);
      });

      $("#rotateRight").click(function () {
        $image.cropper("rotate", -45);
      });

      $("#setDrag").click(function () {
        $image.cropper("setDragMode", "crop");
      });

      $('#data_1 .input-group.date').datepicker({
        todayBtn: "linked",
        keyboardNavigation: false,
        forceParse: false,
        calendarWeeks: true,
        autoclose: true
      });

      $('#data_2 .input-group.date').datepicker({
        startView: 1,
        todayBtn: "linked",
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true,
        format: "dd/mm/yyyy"
      });

      $('#data_3 .input-group.date').datepicker({
        startView: 2,
        todayBtn: "linked",
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true
      });

      $('#data_4 .input-group.date').datepicker({
        minViewMode: 1,
        keyboardNavigation: false,
        forceParse: false,
        forceParse: false,
        autoclose: true,
        todayHighlight: true
      });

      $('#data_5 .input-daterange').datepicker({
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true
      });


      $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green'
      });

      $('.demo1').colorpicker();



      $('.clockpicker').clockpicker();

      $('input[name="daterange"]').daterangepicker();




      $(".select2_demo_1").select2();
      $(".select2_demo_2").select2();
      $(".select2_demo_3").select2({
        placeholder: "Select a state",
        allowClear: true
      });


      $(".touchspin1").TouchSpin({
        buttondown_class: 'btn btn-white',
        buttonup_class: 'btn btn-white'
      });

      $(".touchspin2").TouchSpin({
        min: 0,
        max: 100,
        step: 0.1,
        decimals: 2,
        boostat: 5,
        maxboostedstep: 10,
        postfix: '%',
        buttondown_class: 'btn btn-white',
        buttonup_class: 'btn btn-white'
      });

      $(".touchspin3").TouchSpin({
        verticalbuttons: true,
        buttondown_class: 'btn btn-white',
        buttonup_class: 'btn btn-white'
      });

      $('.dual_select').bootstrapDualListbox({
        selectorMinimalHeight: 160
      });


    });

    $('.chosen-select').chosen({ width: "100%" });

    $("#ionrange_1").ionRangeSlider({
      min: 0,
      max: 5000,
      type: 'double',
      prefix: "$",
      maxPostfix: "+",
      prettify: false,
      hasGrid: true
    });

    $("#ionrange_2").ionRangeSlider({
      min: 0,
      max: 10,
      type: 'single',
      step: 0.1,
      postfix: " carats",
      prettify: false,
      hasGrid: true
    });

    $("#ionrange_3").ionRangeSlider({
      min: -50,
      max: 50,
      from: 0,
      postfix: "°",
      prettify: false,
      hasGrid: true
    });

    $("#ionrange_4").ionRangeSlider({
      values: [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
      ],
      type: 'single',
      hasGrid: true
    });

    $("#ionrange_5").ionRangeSlider({
      min: 10000,
      max: 100000,
      step: 100,
      postfix: " km",
      from: 55000,
      hideMinMax: true,
      hideFromTo: false
    });

    $(".dial").knob();

    var basic_slider = document.getElementById('basic_slider');



    var range_slider = document.getElementById('range_slider');



    var drag_fixed = document.getElementById('drag-fixed');


  }
  render() {
    return (
      <div >
          
          <div className="row">
            <div className="col-lg-12">
              <div className="ibox float-e-margins">
                <div className="ibox-title">
                  <h5>Nouvelle intervention</h5>
                </div>
                <div className="ibox-content">
                  <form method="get" className="form-horizontal">                   
                    <div className="form-group"><label className="col-sm-2 control-label">Type</label>

                      <div className="col-sm-10">
                      <div className="radio radio-info radio-inline">
                        <input type="radio" id="inlineRadio1" defaultValue="option1" name="radioInline" defaultChecked />
                        <label htmlFor="inlineRadio1"> Livraison</label>
                      </div>
                      <div className="radio radio-info radio-inline">
                        <input type="radio" id="inlineRadio2" defaultValue="option1" name="radioInline"  />
                        <label htmlFor="inlineRadio2"> Prospection </label>
                      </div>
                      <div className="radio radio-danger radio-inline ">
                        <input type="radio" id="inlineRadio2" defaultValue="option1" name="radioInline"  />
                        <label htmlFor="inlineRadio2"> Reclamation </label>
                      </div>
                      <div className="radio radio-info radio-inline">
                        <input type="radio" id="inlineRadio2" defaultValue="option1" name="radioInline"  />
                        <label htmlFor="inlineRadio2"> Recouvrement </label>
                      </div>
                      <div className="radio radio-info radio-inline">
                        <input type="radio" id="inlineRadio2" defaultValue="option1" name="radioInline"  />
                        <label htmlFor="inlineRadio2"> Evenement</label>
                      </div>
                     
                     </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Zone</label>
                      <div className="col-sm-4"><select className="form-control m-b" name="account">
                        <option>Sahel</option>
                        <option>Sud</option>
                        <option>Gabon</option>
                        <option>Tounes 1</option>
                        <option>Tounes 2</option>

                        </select>
                      </div>   
                         
                                   
                    <label className="col-sm-2 control-label">Sous zone</label>
                      <div className="col-sm-4"><select className="form-control m-b" name="account">
                        <option>Msaken</option>
                        <option>Soussa</option>
                        <option>Monastir</option>
                        <option>option 4</option>
                      </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Client</label>
                      <div className="col-sm-4"><select className="form-control m-b" name="account">
                        <option>Client1</option>
                        <option>Client2</option>
                        <option>Client3</option>
                        </select>
                      </div>   
                         
                                   
                    <label className="col-sm-2 control-label">Contact</label>
                      <div className="col-sm-4"><select className="form-control m-b" name="account">
                        <option>Contact1</option>
                        <option>Contact2</option>
                        <option>Contact3</option>
                      </select>
                      </div>
                    </div>

                    
                    <div className="hr-line-dashed" />

                    <div className="form-group">
                      <label className="col-sm-2 control-label">Collaborateur(s)</label>
                      <div className="col-sm-10">
                        <select data-placeholder="Collaborateur" multiple className="chosen-select" tabIndex={4}>
                          <option value></option>
                          <option value="Viet Nam">Collaborateur 1</option>
                          <option value="Virgin Islands, British">Collaborateur 2</option>
                          <option value="Virgin Islands, U.S.">Collaborateur 3</option>
                          <option value="Wallis and Futuna">Collaborateur 4</option>

                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Date</label>
                      <div className="col-sm-4 " id="data_1">
                      <div className="input-group date"  >
                          <span className="input-group-addon"><i className="fa fa-calendar" /></span>
                          <input type="text" className="form-control" defaultValue="03/04/2014" />
                      </div>
                      </div>
                      <label className="col-sm-1 control-label">au</label>
                      <div className="col-sm-4 " id="data_1">
                      <div className="input-group date"  >
                          <span className="input-group-addon"><i className="fa fa-calendar" /></span>
                          <input type="text" className="form-control" defaultValue="03/04/2014" />
                      </div>
                      </div>
                    </div>
                    <div className="hr-line-dashed" />
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Description</label>
                      
                      <div className="col-sm-10 " >
                          
                          <textarea   className="form-control"  />
                     
                      </div>
                    </div>
                    
                       <div className="text-right" style={{ paddingTop: "3%" }}>
                        
                                  <a className="btn btn-primary btn-outline" style={{ marginRight: "10px", padding: "3px 10px" }} 
                                  type="submit" href="intervention">Annuler</a>
                                  <a className="btn btn-primary " style={{ padding: "3px 10px" }} 
                                  type="submit" href="intervention">Enregister</a>
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


export default ContentAITV;