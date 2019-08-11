import React, { PureComponent } from 'react'
import Banner from '../../components/banner/'
import NavBar from '../../components/navbar/'
import Footer from '../../components/footer'
import Typed from 'typed.js'
import Image from 'react-lazy-image'
import { Link } from 'react-router-dom'
import './estilos-inicio.css'

/**Componente que se compone de dos columnas */
const Marketing = () => (
	<div className="marketing">
		<div className="item">
			<Image source="./static/img/marketing/marca.png" />
			<span className="title-item">DISEÑAMOS TU MARCA</span>
			<p>
				Te ayudamos a hacer realidad tus ambiciones. 
				No hay mejor manera de emprender en un nuevo negocio que con una imagen 
				de marca elegante y competente con las exigencias del mercado actual.

			</p>
		</div>
		<div className="item">
			<Image source="./static/img/marketing/solucion.png" />
			<span className="title-item">SOLUCIONES INFORMÁTICAS </span>
			<p>
				Ofrecemos a todo tipo de empresas y administraciones Soluciones 
				Informáticas adaptadas a sus necesidades. Nos preocupamos de todo lo 
				referente a la informática de su negocio y organización, para que no tenga 
				que preocuparse de nada más.
			</p>
		</div>
	</div>
)

/**Componente principal, vista index (inicio) */
class Index extends PureComponent {
	componentDidMount() {
		// Agregamos el efecto de typed
		const optionsTyped = {
			strings: ["www.yoursite.com", "www.devnbrands.com"],
			loop: true,
            cursorChar: '',
            backSpeed: 50,
            typeSpeed: 50,
            backDelay: 3000,
		}

		new Typed("#typed-simulation", optionsTyped)
	}

	render() {
		return (
			<React.Fragment>
				<NavBar />
				<Banner />

				<div id="view-index">
					<div className="content-main fadeIn">
						<p className="descripcion">
							Bienvenido a DEV & BRANDS, somos mucho más que una empresa informática...
							En D&B encontrarás la solución a tus problemas empresariales, 
							desde la imagen de tu producto o emprendimiento, hasta soluciones 
							informáticas completas y adaptadas a tus necesidades.
						</p>

						<Marketing />
					</div>

					<div className="gestion-hosting fadeIn">
						<div className="search-simulation" id="typed-simulation">
							www.yoursite.com
						</div>

						<p>
							<b>NOSOTROS GESTIONAMOS TU DOMINIO</b>
						</p>

						<p>
							Con D&B  no tienes que preocuparte por nada, nosotros nos encargamos
							de todo el proceso de formulación, desarrollo y puesta en marcha de tu página web.
						</p>

						<Link className="btn-getStart" to="#">Empecemos</Link>
					</div>					
				</div>

				<Footer />
			</React.Fragment>
		)
	}
}

export default Index