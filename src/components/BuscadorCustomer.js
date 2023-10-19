import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class BuscadorCustomer extends Component {
    urlApiCustomers = Global.urlApiCustomers;
    cajaId = React.createRef();

    state = {
        customer: {}, 
        status: false
    }

    buscarCustomer = (e) => {
        e.preventDefault();
        var idCustomer = this.cajaId.current.value;
        //customers/ALFKI.json
        var request = "customers/" + idCustomer + ".json";
        axios.get(this.urlApiCustomers + request).then(response => {
            this.setState({
                customer: response.data.customer,
                status: true
            })
        })
    }

  render() {
    return (
        <div>
            <h1>BuscadorCustomer Component</h1>
            <form onSubmit={this.buscarCustomer}>
                <label>ID Customer: </label>
                <input type="text" ref={this.cajaId}/>
                <button>Buscar cliente</button>
            </form>
            {
                this.state.status == true &&
                (<div>
                    <h1 style={{color:"blue"}}>
                        Cliente: {this.state.customer.contactName}
                    </h1>
                    <h2 style={{color:"red"}}>
                        Empresa:  {this.state.customer.companyName}
                    </h2>
                    <h2 style={{color:"orange"}}>
                        Ciudad: {this.state.customer.city}
                    </h2>
                    <h2 style={{color:"fuchsia"}}>
                        Cargo: {this.state.customer.contactTitle}
                    </h2>
                </div>)
            }
        </div>
    )
  }
}
