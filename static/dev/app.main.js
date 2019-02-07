import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import ScrollRevea from 'scrollreveal'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './styles.main.styl'
import Inicio from './inicio'
import Nosotros from './nosotros'

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
                </Switch>
            </HashRouter>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('main')) 