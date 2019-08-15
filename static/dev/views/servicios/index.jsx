import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './estilos-servicios.css'
import services from './products.json'
import Modal from '../../components/modal'

class Servicios extends PureComponent {
    state = {
        services: [],

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

        return (
            <div className="item-product" key={index}>
                <figure>
                    <img src={`${urlStaticImage}/${iconId}.svg`} alt={iconId} />

                    <figcaption style={{ color }}>{name}</figcaption>
                </figure>

                <p className="description">
                    {description}
                </p>

                <button className="btn warning" onClick={
                    () => {
                        this.modal.open()
                    }
                }>Get start</button>
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                <Modal ref={e => this.modal = e}>
                    <h2>XDXD</h2>
                </Modal>

                <div id="view-services">
                    <h2>Creacion de productos, aplicaciones y servicios</h2>

                    <div className="content-products">
                        {
                            this.state.services.map(this.itemProduct)
                        }
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Servicios