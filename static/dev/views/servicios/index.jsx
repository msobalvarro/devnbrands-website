import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer'
import Modal from '../../components/modal'
import services from './products.json'
import './estilos-servicios.css'

class Servicios extends PureComponent {
    state = {
        services: [],

        filter: '',

        // Represent url static img 
        urlStaticImage: 'static/img/icons-services',
    }

    componentWillMount() {
        // Update state of services from json services
        this.setState({ services })
    }

    /**this method represent a item product */
    itemProduct = ({ name, iconId, color, description }, index) => {
        const { urlStaticImage } = this.state

        if(name.length > 0 && name.toLowerCase().search(this.state.filter) > -1) {
            return (
                <div className="item-product" key={index}>
                    <figure>
                        <img src={`${urlStaticImage}/${iconId}.svg`} alt={iconId} />
    
                        <figcaption style={{ color }}>{name}</figcaption>
                    </figure>
    
                    <p className="description">
                        {description}
                    </p>
    
                    <Link className="btn warning" to={`/servicios/${iconId}`}>Empezar</Link>
                </div>
            )
        }

    }

    render() {
        return (
            <React.Fragment>
                <NavBar />

                <div id="view-services">
                    <h2>Creacion de productos, aplicaciones y servicios</h2>

                    <input type="search" className="input-search" placeholder="Filtrar" onChange={
                        ({ currentTarget }) => {
                            const { value } = currentTarget

                            this.setState({ filter: value })
                        }
                    } />

                    <div className="content-products">
                        {
                            this.state.services.map(this.itemProduct)
                        }
                    </div>
                </div>

                <Footer /> 

            </React.Fragment>
        )
    }
}

export default Servicios