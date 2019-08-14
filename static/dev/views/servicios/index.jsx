import React, { PureComponent } from 'react'
import services from './products.json'


class Servicios extends PureComponent {
    state = {
        services: [],
        
        // Represent url static img 
        urlStaticImage: 'static/img/icons-services'
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
            </div>
        )
    }

    render () {
        return (
            <div id="view-services">
                <h2>Creacion de productos, aplicaciones y servicios</h2>

                <div className="content-products">
                    {
                        this.state.services.map(this.itemProduct)
                    }
                </div>
            </div>
        )
    }
}

export default Servicios