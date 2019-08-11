import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './estilos-navbar.css'

class NavBar extends PureComponent {
	state = {
		items: [
			{
				text: 'Inicio',
				src: '/'
			},
			{
				text: 'Nosotros',
				src: '/nosotros'
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
				<span className="name">Dev & Brands</span>
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