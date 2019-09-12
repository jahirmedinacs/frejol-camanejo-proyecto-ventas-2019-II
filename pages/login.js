import React, {Component} from 'react'



class Login extends Component {
  render() {
      return (
          <body>
            <div>
              <div id= "universal-nav">
                <h2></h2>
              </div>
                <div className ="modal-content">
                  <div className = "modal-wrapp">
                    <div className = "modal-form">
                      <div className = "login">
                        <div className = "form-container">
                          <h1 className = "form-heading-h1"><span>Iniciar sesión</span></h1>
                          <div className ="flex">
                            <p></p>
                            <label for = "username"><span>Usuario: </span></label>
                              <input type= "Text" className = "username" value= "username" ></input>
                            <p></p>
                            <label for = "password">Contraseña: </label>
                              <input type= "Text" className = "password" value = "password" ></input>
                            <p></p>
                            <button id="enter-button" type = "submit" className = "enter-button-login"><span>Ingrese</span></button>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className = "alternative-nospacing">
                        <p></p>
                      </div>
                      <div className = "create-account">
                        <p>
                          <span>¿No tiene cuenta?</span>
                            <a href="">
                              <span>Crear una cuenta.</span>
                            </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            
            
            <style jsx>{`
                body {
                  padding: 0rem;
                  margin: 0;
                  font-family: "Helvetica Neue",Arial,sans-serif;
                  direction : ltr;
                }
                h1 {
                  font-weight: 400;
                  font-family:"Helvetica Neue",Arial,sans-serif;
                }
                div { 
                  display: block;
                  margin: 0;
                  border: 0;
                  vertical-align: baseline;
                }
                #universal-nav {
                  
                  
                  background: #fff;
                  border-bottom:1px solid #ececec;
                  height:50px;
                  position:relative;
                  z-index:2;

               }
                .modal-content{ 
                 background-color: #f4f4f4;
                 margin: 0;
                 padding: 0;
                 border: 0;
                 vertical-align: baseline;
               }
               .modal-wrapp {
                 border: 0;
                 vertical-align: baseline;
                 object-fit: contain;
                 max-width: 568px;
               }
               .modal-form {
                 background-color:#fff;
                 margin: 0;
                 border: 0;
                 vertical-align: baseline;
                 padding: 32px 16px;
               }
               span { 
                 font-size: inherit;
                 margin: 0;
                 padding: 0;
                 border: 0;
                 vertical-align: baseline;
                 display: inline;
               }
               p {
                 font-size: 1rem;
                 line-height: 1.625rem;
                 padding: 0 0 15px;
               }
               input {
                 color: #323232;
                 font-size: 1rem;
                 -webkit-writing-mode: horizontal-tb!important;
                 text-rendering: auto;
                 letter-spacing: normal;
                 word-spacing: normal;
                 text-transform: none;
                 cursor: text;
                 text-align: start;
                 display: inline-block;
                 padding: 1px 0px;
               }
               .enter-button-login {
                 background-color: #0062ff;
                 border-color : #0062ff;
                 outline-color : #0062ff;
                 width: 190px;
                 max-width: 100%;
                 min-width: 160px;
                 text-align: left;
                 color: white;
                 outline: 3px solid;
                 margin: 8px 0 8px 3px;
                 border: 1px solid;
                 font-size: 16px;
                 line-height: 20px;
                 box-sizing : border-box;
                 cursor: pointer;
                 padding: 11px 18px;
               }
               
               .register-button-login {
                  background-color: #0062ff;
                  border-color : #0062ff;
                  outline-color : #0062ff;
                  width: 190px;
                  max-width: 100%;
                  min-width: 160px;
                  text-align: left;
                  color: white;
                  outline: 3px solid;
                  margin: 8px 0 8px 3px;
                  border: 1px solid;
                  font-size: 16px;
                  line-height: 20px;
                  box-sizing : border-box;
                  cursor: pointer;
                  padding: 11px 18px;
               }
              `}</style>

      
          </body>
      )
  }
}

export default Login





