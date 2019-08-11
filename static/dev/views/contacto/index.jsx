import React, { Component } from 'react'
import './estilos-contacto.css'
import countries from './countries.json'
import Footer from '../../components/footer'
import NavBar from '../../components/navbar'

/**Componente que renderiza la vista Contacto */
class Contacto extends Component {
    state = {
        dataSend: {
            name: '',
            lastName: '',
            country: 'default'
        }
    }

    componentDidMount() {}

    /**Escucha todos los cambios de los inputs */
    onHandledChangeInput = ({ target }) => {
        const { name, value } = target

        console.log(name, value)
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />

                <div id="view-contact">

                    <h2>No dudes en contactarnos. Nuestro equipo de trabajo establecera tus dudas.</h2>

                    <div className="body-contact">
                        {/* Formulario */}
                        <div className="form">
                            <div className="row">
                                <span>Nombres</span>

                                <input onChange={this.onHandledChangeInput} type="text" name="name" className="text-input"/>
                            </div>

                            <div className="row">
                                <span>Apellidos</span>

                                <input onChange={this.onHandledChangeInput} type="text" name="lastName" className="text-input"/>
                            </div>

                            <div className="row">
                                <span>Pais</span>

                                <select onChange={this.onHandledChangeInput} name="country" defaultValue={this.state.dataSend.country}>
                                    <option disabled={true} value="default">-- Select option --</option>

                                    {
                                        countries.map(
                                            (country, index) => (
                                                <option value={country} key={index}>
                                                    {country}
                                                </option>
                                            )
                                        )
                                    }
                                </select>
                            </div>
                        </div>

                        {/* Preview del formulario */}
                        <div className="letter"></div>
                    </div>
                </div>

                <Footer />
            </React.Fragment>
        )
    }
}

export default Contacto