import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import ScrollRevea from 'scrollreveal'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './styles.main.css'
import Inicio from './views/inicio'
import Nosotros from './views/nosotros'
import Contacto from './views/contacto'
import Servicios from './views/servicios'
import ServiceById from './views/servicios/servicios'

class App extends PureComponent {
	componentDidMount() {
		ScrollRevea().reveal('.fadeIn')
	}

	render() {
		return (
			<HashRouter>
                <Switch>
                    <Route exact path="/" component={Inicio} />
                    <Route path="/nosotros" component={Nosotros} />
                    <Route path="/contacto" component={Contacto} />
                    <Route exact path="/servicios" component={Servicios} />
					<Route exact path="/servicios/:id" component={ServiceById} /> 
                </Switch>
            </HashRouter>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('main')) 