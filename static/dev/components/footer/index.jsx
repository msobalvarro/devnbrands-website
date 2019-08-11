import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Image from 'react-lazy-image'
import './estilos-footer.css'

class Footer extends PureComponent {
    render() {
        return (
            <div className="footer-main">
                <div className="col large">
                    <h3>Dev & Brands</h3>
                    <p>
                        Empresa informática establecida en Managua, Nicaragua en el año 2017. <br/>
                        Consulte por nuestros planes y servicios.
                    </p>
                    <p>
                        De los semáforos de la UCA, 100mts al norte, 100mts al oeste. <br/>
                        Tel. <a href="tel:+(505) 8384-0565">+(505) 8384-0565</a> / <a href="tel:+(505) 8361-8879">+(505) 8361-8879</a> <br/>
                        <a href="mailto:info@devnbrands.com">info@devnbrands.com</a>
                    </p>
                    <Link to='#' className="button-contacto-footer">Contáctenos</Link>
                </div>
                <div className="col center">
                    <Image source="./static/img/logo@1x.png" alt=""/>
                </div>
            </div>
        )
    }
}

export default Footer