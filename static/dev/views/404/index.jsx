import React from 'react'
import { Link } from 'react-router-dom'
import './estilos-404.css'
import conos from './img/conos.png'
import logo from './img/logo.png'

const NotFound = () => (
    <React.Fragment>
        <main id="page-404">
            <div className="draw-line"></div>
            <figure className="logo">
                <img src={logo} alt="Logo" />
            </figure>

            <h1>Lo sentimos, esta pagina no esta disponible</h1>
            <h2>
                Regresa a <Link to="/">Inicio</Link>
            </h2>
            <div className="draw-line"></div>
        </main>

        <img src={conos} alt="coins" className="coins" />
    </React.Fragment>
)

export default NotFound