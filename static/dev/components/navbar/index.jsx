import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './index.styl'

class NavBar extends PureComponent {
	state = {
		items: [
			{
				text: 'Inicio',
				src: '/'
			},
			{
				text: 'Nosotros',
				src: '/'
			},
			{
				text: 'Contácto',
				src: '/'
			},
			{
				text: 'Servicios',
				src: '/'
			},
		]
	}
 
	render() {
		return (
			<nav className='nav-bar'>
				{
					this.state.items.map(
						(item, index) => {
							return (
								<Link className='item' to={item.src} key={index}>
									{
										item.text
									}
								</Link>
							)
						}
					)
				}
			</nav>
		)
	}
}

export default NavBar