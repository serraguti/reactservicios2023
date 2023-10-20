import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import TablaMultiplicar from './RutasParametros/TablaMultiplicar';
import Home from './RutasParametros/Home';
import NotFound from './RutasParametros/NotFound';

export default class Router extends Component {
  render() {
    function TablaMultiplicarElement() {
        //ESTA FUNCION PERMITE CAPTURAR LOS PARAMETROS
        //DE LA RUTA DE FORMA DINAMICA.
        //VAMOS A RECIBIR UN PARAMETRO LLAMADO minumero
        var { minumero } = useParams();
        //DEVOLVEMOS LA ETIQUETA <TablaMultiplicar/> CON SU
        //props DE numero
        return <TablaMultiplicar numero={minumero}/>
    }

    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/tabla/:minumero" 
                element={<TablaMultiplicarElement/>}/>
            {/* PARA LAS RUTAS QUE NO EXISTAN,  
            DEBEMOS UTILIZAR EL ASTERISCO EN PATH
            Y DEBE SER LA ULTIMA ETIQUETA DE <Routes/>
            */}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
