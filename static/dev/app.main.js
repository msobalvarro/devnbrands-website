import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import ScrollRevea from 'scrollreveal'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './styles.main.css'
import Inicio from './views/inicio'
import Nosotros from './views/nosotros'
import Contacto from './views/contacto'

class App extends PureComponent {
	componentDidMount() {
		ScrollRevea().reveal('.fadeIn')
	}

	render() {
		return (
			<HashRouter>
                <Switch>
                    <Route exact path="/" component={Inicio} />
                    <Route exact path="/nosotros" component={Nosotros} />
                    <Route exact path="/contacto" component={Contacto} />
                </Switch>
            </HashRouter>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('main')) 