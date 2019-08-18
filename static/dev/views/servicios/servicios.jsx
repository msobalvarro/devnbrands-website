import React, { Component } from 'react'

class ServiceById extends Component {
    state = {
        idService: '',
        
    }

    componentWillMount() {
        console.log(this.props.match)
    }

    render () {
        return (
            <h1>Servicio</h1>
        )
    }
}

export default ServiceById