import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './estilos-navbar.css'

class NavBar extends PureComponent {
	state = {
		items: [
			{
				text: 'Inicio',
				src: '/',
				active: (window.location.hash === '#/'),
			},
			{
				text: 'Nosotros',
				src: '/nosotros',
				active: (window.location.hash === '#/nosotros'),
			},
			{
				text: 'Contácto',
				src: '/contacto',
				active: (window.location.hash === '#/contacto'),
			},
			{
				text: 'Servicios',
				src: '/servicios',
				active: (window.location.hash === '#/servicios'),
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
								<Link className={`item ${ (item.active === true) ? ' active' : '' }`} to={item.src} key={index}>
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