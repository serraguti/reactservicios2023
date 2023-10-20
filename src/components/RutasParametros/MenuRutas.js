import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/tabla/21">Tabla multiplicar 21</a>
            </li>            
            <li>
                <a href="/tabla/89">Tabla multiplicar 89</a>
            </li>            
            <li>
                <a href="/tabla/5">Tabla multiplicar 5</a>
            </li>
            <li>
                <a href="/noexisto">Sin ruta mapeada</a>
            </li>
        </ul>
      </div>
    )
  }
}
