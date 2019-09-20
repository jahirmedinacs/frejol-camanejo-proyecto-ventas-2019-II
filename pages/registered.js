import React, {Component} from 'react'
import Head from 'next/head'
import { Input } from 'antd'
import { Checkbox } from 'antd';
import { Button } from 'antd';



class Registered extends Component {

    state = {
        name: '',
        lastname: '',
        email: '',
        password: '',
        terminos: false,
    }

    onChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value === undefined ? e.target.checked : e.target.value,
        });
    }

    onSubmit = () => {
        console.log("H11");
        console.log(this.state);
    }

   
 

    render() {
        return (


            <body>
            <div className = "nav-home">

            </div>
            <div className ="modal-content">
                <div className ="modal-wrapp">
                    <div className = "modal-form">
                    <div className = "login">
                        <div className = "form-container">
                          <h1 className = "form-heading-h1"><span>Registrate</span></h1>
                          <div className ="flex">
                
                <Head>
                    <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css' />
                </Head>
                
                <Input 
                    name= 'name'
                    maxLength={25}
                    placeholder= 'Nombres'
                    onChange = {e => this.onChange(e)} />
                <br/>
                <Input
                
                    name= 'lastname'
                    maxLength={25}
                    placeholder= 'Apellidos'
                    onChange = {e => this.onChange(e)} />
                 <br/>
                 <Input
                   
                    name= 'email'
                    maxLength={25}
                    placeholder= 'Email'
                    onChange = {e => this.onChange(e)} />
                <br/>
                <Input
                    
                    name= 'password'
                    maxLength={25}
                    placeholder= 'Contraseña'
                    type = 'password'
                    onChange = {e => this.onChange(e)} />
                <br/>
                 <Checkbox 
                    name= 'terminos'
                    checked= {this.state.terminos}
                    onChange = {e => this.onChange(e)}>
                    Acepto los terminos y condiciones del formulario de este registro.
                 </Checkbox>
                 <br/>
                 <Button onClick= {() => this.onSubmit()} type ='primary '>Enviar</Button>

                 </div> 
                </div>
                </div> 
                </div>
                <div className = "create-account">
                            <p>
                              <span>¿Ya tiene una cuenta en Frejolito? </span>
                              <a href="/login">
                              <span>Iniciar sesion.</span>
                              </a>
                            </p>
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
                        div { 
                            display: block;
                            margin: 0;
                            border: 0;
                            vertical-align: baseline;
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
                            padding-top:40px;
                            padding-bottom: 40px;
                            margin:auto;
                            vertical-align: baseline;
                            object-fit: contain;
                            max-width: 550px;
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
                        .nav-home {
                            background: #fff;
                            border-bottom:1px solid #ececec;
                            height:50px;
                            position: relative;
                            z-index;
                          }
                        a {
                            color : #1268fb;
                            transition: .3s color;
                            text-decoration: none;
                            font-size: inherit;
                            margin: 0;
                            padding: 0;
                            border: 0;
                            vertical-align: baseline;
                            cursor: pointer;
                          }
                `}
            </style>
            
            </body>
    
        )
    }
  }
  
  export default Registered
  
  