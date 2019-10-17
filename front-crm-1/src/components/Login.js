import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
    <div className="gray-bg">
       <div className="footer">
                <div className="pull-right">
                     <strong>STARTEC</strong> 
                 </div>
                <div>
                    <strong>Copyright</strong> GST © 2019
                </div>
            </div>
  <div className="middle-box text-center loginscreen animated fadeInDown" style={{paddingBottom:"17%",paddingTop:'2%'}}>
    <div>
      <div>
        <h1 className="logo-name">IN+</h1>
      </div>
      <h3>Bienvenue STARTEC</h3>
      <p>
        {/*Continually expanded and constantly improved Inspinia Admin Them (IN+)*/}
      </p>
      <p>Login in. Pour voir les fenêtres.</p>
      <form className="m-t" role="form" action="http://webapplayers.com/inspinia_admin-v2.7.1/index.html">
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Nom" required />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Mots de paasse" required />
        </div>
        {/*<button type="submit" className="btn btn-primary block full-width m-b">Login</button>*/}
        <a className="btn btn-primary block full-width m-b" href="/dashboard">Login</a>
        <a href="#"><small>Mots de passe oublié ?</small></a>
        <p className="text-muted text-center"><small>Vous avez pas de compte?</small></p>
        <a className="btn btn-sm btn-white btn-block" href="register.html">creation du cpmpte</a>
      </form>
     
    
    </div>
   
  </div>
 
</div>


                
            
        );
    }
}

export default Login;