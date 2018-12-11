import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './styles.main.styl'
import Inicio from './inicio/index.jsx'
import Menu from './components/navbar/index.jsx'

class App extends PureComponent {
	render() {
		return (
			<HashRouter>
                <Switch>
					<Menu />
                    <Route exact path="/" component={Inicio} />
                </Switch>
            </HashRouter>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('main')) 