import React from 'react';
import {NavLink} from "react-router-dom";
import './Abstract.css';

class Abstract extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.info)
    }
    showTypeDamage()
    {
        let str = ""
        switch(this.props.info.typeDamage){
            case 1:
                str = "Desbarranco"
                break;
            case 2:
                str =  "Se averió"
                break;
            case 3:
                str =  "Choque provocado por el conductor"
                break;
            case 4:
                str = "Choque frontal"
                break;
            case 5:
                str =  "Volcadura"
                break;
            case 6:
                str = "Daños a/de terceros"
                break;
        }
        return str;
    }
    showDamagedParts(){
        return <ul>
            {
                this.props.info.damagedParts.map((item,index)=>{
                  return <li key={index}>{item}</li>
                })
             }
        </ul>
    }
    render(){
        return <div className='container'>
                    <div className='row'>
                        <div className="col-md-1 col-xs-1 text-center">
                            <a href="javascript:window.history.back();">
                                <i className="fa fa-chevron-left arrow" aria-hidden="true" />
                              </a>
                        </div>
                            <div className="col-md-10 col-xs-10 text-center">
                                <h3 className="titleCar">Información registrada</h3>
                            </div>                                
                    </div>
                    <div className='row'>
                        <div className='col-xs-offset-4 col-xs-4'>
                            <div className='avatar'>
                                <img src='http://www.myiconfinder.com/uploads/iconsets/218780527bb8acc76f78fecaca298342.png'/>
                            </div>
                                
                        </div>

                    </div>
                    <br/>
                    <b>Usuario:</b><br/><span>{this.props.info.user}</span><br/>
                    <b>Email:</b><br/><span>{this.props.info.email}</span><br/>
                    <b>Ubicación del Accidente:</b><br/><span>{this.props.info.location}</span><br/>
                    <b>Tipo de daño:</b><br/><span>{this.showTypeDamage()}</span><br/>
                    <b>Descripción del accidente:</b><br/><span>{this.props.info.description}</span><br/>
                    <b>Partes dañadas:</b><br/><span>{this.showDamagedParts()}</span><br/>
                    <div className='row'>
                        <div className='col-xs-12'><NavLink className='btn btn-block' to={'/results'}>Enviar</NavLink></div><br/><br/>
                        <div className='col-xs-12'><NavLink className='btn btn-block' to={'/map'}>Cancelar</NavLink></div>
                    </div>
                </div>

    }
}
export default Abstract;