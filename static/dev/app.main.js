import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import ScrollRevea from 'scrollreveal'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './styles.main.styl'
import Inicio from './inicio/index.jsx'

class App extends PureComponent {
	componentDidMount() {
		ScrollRevea().reveal('.fadeIn')
	}

	render() {
		return (
			<HashRouter>
                <Switch>
                    <Route exact path="/" component={Inicio} />
                </Switch>
            </HashRouter>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('main')) 