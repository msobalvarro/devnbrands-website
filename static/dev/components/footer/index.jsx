import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
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
                        Copyrigt - All rights reserved { moment(new Date()).format('YYYY') }
                        <br/>
                        <a href="mailto:info@devnbrands.com">info@devnbrands.com</a>
                    </p>
                    <Link to='/contacto' className="button-contacto-footer">Contáctenos</Link>
                </div>
                <div className="col center">
                    <Image source="./static/img/logo@1x.png" alt=""/>
                </div>
            </div>
        )
    }
}

export default Footer