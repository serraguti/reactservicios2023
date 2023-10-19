import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class BuscadorCoches extends Component {
    cajaMarca = React.createRef();
    //VARIABLE PARA ALMACENAR TODOS LOS COCHES
    //AL CARGAR LA PRIMERA VEZ EL SERVICIO
    cochesAll = [];
    
    state = {
        coches: [],
        status: false
    }

    loadCoches = (e) => {
        if (e != null){
            e.preventDefault();
        }
        
        var request = "webresources/coches";
        var url = Global.urlApiCoches + request;
        axios.get(url).then(response => {
            this.setState({
                coches: response.data,
                status: true
            })
            this.cochesAll = response.data;
        })
    }

    filtrarCoches = (e) => {
        e.preventDefault();
        var cars = this.cochesAll;
        var marca = this.cajaMarca.current.value.toLowerCase();
        //DEBERIAMOS HACER UN BUCLE Y ALMACENAR LOS COCHES FILTRADOS EN ALGUN
        //SITIO
        // var cochesFiltrados = [];
        // for (var car of cars){
        //     if (car.marca.toLowerCase() == marca){
        //         cochesFiltrados.push(car);
        //     }
        // }
        //TAMBIEN PODEMOS UTILIZAR UN METODO DE LA CLASE ARRAY
        //QUE ES EL METODO filter Y NOS DEVUELVE UN ARRAY CON LOS 
        //ELEMENTOS DE LA BUSQUEDA
        //Array.filter(objetoArray => objetoArray.propiedad == valor)
        var cochesFiltrados = 
            cars.filter(car => car.marca.toLowerCase().includes(marca));
        //ASIGNAMOS LOS COCHES AL STATE
        this.setState({
            coches: cochesFiltrados,
            status: true
        })
    }

    componentDidMount = () => {
        this.loadCoches();
    }

  render() {
    return (
        <div>
            <h1>BuscadorCoches</h1>
            <form>
                <label>Introduzca marca</label>
                <input type="text" ref={this.cajaMarca}/>
                <button onClick={this.filtrarCoches}>Buscar coches</button>
                <button onClick={this.loadCoches}>Todos coches</button>
            </form>
            <table border="1">
                <thead>
                    <tr>
                        <th>Coche</th>
                        <th>Conductor</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.status == true &&
                        (
                            this.state.coches.map((car, index) => {
                                return (<tr key={index}>
                                    <td>
                                        {car.marca + " " + car.modelo}
                                    </td>
                                    <td>
                                        {car.conductor}
                                    </td>
                                    <td>
                                        <img src={car.imagen}
                                            style={{width: "250px", height: "250px"}}/>
                                    </td>
                                </tr>)
                            })
                        )
                    }
                </tbody>
            </table>
        </div>
    )
  }
}
