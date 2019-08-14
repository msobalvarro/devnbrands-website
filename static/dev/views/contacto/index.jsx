import React, { Component } from 'react'
import './estilos-contacto.css'
import moment from 'moment'
import countries from './countries.json'
import Footer from '../../components/footer'
import NavBar from '../../components/navbar'
import logoLetter from '../../../img/logo@1x.png'

/**Componente que representa el preview del email a enviar */
const Letter = ({ data }) => (
    <div className="letter">
        <div className="row">
            <h3>
                <b>From:</b> <span>{data.email}</span>
            </h3>
        </div>

        <div className="row">
            { moment(new Date()).format('MMMM, Do YYYY') } { data.country !== 'default' && ', ' + data.country }
        </div>

        <hr/>

        <h5>Message:</h5>

        <p>
            {data.message}
        </p>

        <div className="content-logo">
            <img src={logoLetter} />
        </div>
    </div>
)

/**Componente que renderiza la vista Contacto */
class Contacto extends Component {
    state = {
        dataSend: {
            name: '',
            lastName: '',
            country: 'default',
            email: '',
            message: ''
        }
    }

    componentDidMount() {}

    /**Escucha todos los cambios de los inputs y actualiza el estado `dataSend` */
    onHandledChangeInput = ({ target }) => {
        const { name, value } = target

        this.setState({
            dataSend: {
                ...this.state.dataSend,
                [name]: value
            }
        })
    }

    /**Metodo que se ejecuta cuando enviamos el formulario, (click the button) */
    onHanldedSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />

                <div id="view-contact">

                    <h2>No dudes en contactarnos. Nuestro equipo de trabajo esclarecerá tus dudas.</h2>

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
                                <span>Correo Electronico</span>

                                <input onChange={this.onHandledChangeInput} type="text" name="email" className="text-input"/>
                            </div>

                            <div className="row">
                                <span>Pais</span>

                                <select onChange={this.onHandledChangeInput} name="country" defaultValue={this.state.dataSend.country} className="text-input">
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

                            <div className="row">
                                <span>Mensaje</span>

                                <textarea onChange={this.onHandledChangeInput} rows={10} type="text" name="message" className="text-input"></textarea>
                            </div>

                            <div className="row">
                                <button onClick={this.onHanldedSubmit} className="btn warning">Enviar</button>
                            </div>
                        </div>

                        {/* Preview del formulario */}
                        <Letter data={this.state.dataSend} />
                    </div>

                    <img src="static/img/banner-conctact.jpg" alt="baner not found" draggable={false} className="banner-image" />
                </div>

                <Footer />
            </React.Fragment>
        )
    }
}

export default Contacto