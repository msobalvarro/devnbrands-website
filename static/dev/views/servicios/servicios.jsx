import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer'
import imgServives from './services.svg'
import Data from './products.json'

class ServiceById extends Component {
    state = {
        dataService: {
            name: '',
            iconId: '',
            color: '',
            description: ''
        },
        return: false,
        urlStaticImage: 'static/img/icons-services',
        dataForm: {
            email: '',
            phone: '',
        },
    }

    componentWillMount() {
        const { params } = this.props.match
        if (params.id !== undefined) {

            Data.map(
                (dataService) => {
                    if (dataService.iconId === params.id) {
                        this.setState({ dataService })
                    }
                }
            )

        } else {
            this.setState({ return: true })
        }
    }

    onHanldedInput = ({ currentTarget }) => {
        const { value, name } = currentTarget

        this.setState({
            dataForm: {
                ...this.state.dataForm,
                [name]: value
            }
        })
    }

    render() {
        const { dataService, urlStaticImage } = this.state

        // Validate return to services
        if (this.state.return) {
            return <Redirect to="/servicios" />
        } else {
            return (
                <React.Fragment>
                    <NavBar />

                    <div id="view-service-id">
                        <div className="content-img">
                            <img src={imgServives} />
                        </div>

                        <form action="#">
                            <figure>
                                <img src={`${urlStaticImage}/${dataService.iconId}.svg`} alt={dataService.iconId} />
                                <figcaption>
                                    <h2 style={{ color: dataService.color }}>{dataService.name}</h2>
                                </figcaption>
                            </figure>

                            <p>{dataService.description}</p>

                            <div className="row">
                                <input name="email" className="text-input" onChange={this.onHanldedInput} type="email" placeholder="Correo Electronico" />
                            </div>

                            <div className="row">
                                <input name="phone" className="text-input" onChange={this.onHanldedInput} type="tel" placeholder="Telefono" />
                            </div>

                            <div className="row button">
                                <button type="submit" className="btn warning">Enviar</button>
                            </div>
                        </form>
                    </div>

                    <Footer />
                </React.Fragment>
            )
        }

    }
}

export default ServiceById