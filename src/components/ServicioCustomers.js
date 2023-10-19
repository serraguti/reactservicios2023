import React, { Component } from 'react'
//IMPORTAMOS LA LIBRERIA DE AXIOS
import axios from 'axios';
import Global from '../Global';

export default class ServicioCustomers extends Component {
    //NECESITAMOS UNA URL DE ACCESO AL SERVICIO API
    urlApiCustomers = Global.urlApiCustomers;

    //NECESITAMOS ALMACENAR, DENTRO DE state, UN CONJUNTO
    //DE OBJETOS CUSTOMERS
    state = {
        customers: []
    }

    //METODO PARA CARGAR TODOS LOS CLIENTES DEL
    //SERVICIO API
    loadCustomers = () => {
        console.log("Loading Customers....");
        var request = "customers.json";
        axios.get(this.urlApiCustomers + request).then(response => {
            //console.log(response.data);
            this.setState({
                customers: response.data.results
            })
        })
    }

    //TENDREMOS UN METODO DE CICLO DE VIDA PARA 
    //CARGAR LOS CLIENTES SOLAMENTE AL INICIAR EL COMPONENT
    componentDidMount = () => {
        console.log("Creando Component");
        this.loadCustomers();
    }

  render() {
    return (
        <div>
            <h1>Servicio Customers</h1>
            {
                this.state.customers.map((cliente, index) => {
                    return (<h2 style={{color:"blue"}} key={index}>
                        {cliente.contactName}
                    </h2>)
                })
            }
        </div>
    )
  }
}
