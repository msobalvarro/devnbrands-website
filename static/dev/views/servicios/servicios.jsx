import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer'
import Data from './products.json'

class ServiceById extends Component {
    state = {
        dataService: {
            name: '',
            iconId: '',
            color: '',
            description: ''
        },
        return: false
    }

    componentWillMount() {
        const { params } = this.props.match
        if(params.id !== undefined) {
            
            Data.map(
                (dataService) => {
                    if(dataService.iconId === params.id) {
                        this.setState({ dataService })
                    }
                }
            )

        } else {
            this.setState({ return: true })
        }
    }

    render () {
        const { dataService } = this.state

        // Validate return to services
        if(this.state.return) {
            return <Redirect to="/servicios" />
        } else {
            return (
                <React.Fragment>
                    <NavBar />
                    
                    <div id="view-service-id">
                        <h2>{dataService.name}</h2>
                    </div>

                    <Footer />
                </React.Fragment>
            )
        }

    }
}

export default ServiceById