import React, { PureComponent } from 'react'
import './estilos-banner.css'
import Image from 'react-lazy-image'

class Banner extends PureComponent {
	componentDidMount() {
		particlesJS("particles-js", {
			"particles": {
				"number": {
					"value": 150,
					"density": {
						"enable": true,
						"value_area": 1000
					}
				},
				"color": {
					"value": "#CCC"
				},
				"shape": {
					"type": "circle",
					"stroke": {
						"width": 0,
						"color": "#000000"
					},
					"polygon": {
						"nb_sides": 5
					}
				},
				"opacity": {
					"value": 1,
					"random": false,
					"anim": {
						"enable": false,
						"speed": 1,
						"opacity_min": 0.6,
						"sync": false
					}
				},
				"size": {
					"value": 3,
					"random": true,
					"anim": {
						"enable": false,
						"speed": 40,
						"size_min": 0.1,
						"sync": false
					}
				},
				"line_linked": {
					"enable": true,
					"distance": 120,
					"color": "#ffffff",
					"opacity": 0.5,
					"width": 1
				},
				"move": {
					"enable": true,
					"speed": 2,
					"direction": "random",
					"random": false,
					"straight": false,
					"out_mode": "out",
					"bounce": true,
					"attract": {
						"enable": true,
						"rotateX": 3600,
						"rotateY": 3600
					}
				}
			},
			"interactivity": {
				"detect_on": "canvas",
	
				"events": {
					"onhover": {
						"enable": false,
						"mode": "grab"
					},
	
					"onclick": {
						"enable": true,
						"mode": "remove"
					},
					"resize": true
				},
	
				"modes": {
					"grab": {
						"distance": 140,
						"line_linked": {
							"opacity": 0.5
						}
					},
					"bubble": {
						"distance": 1000,
						"size": 4,
						"duration": 50,
						"opacity": 1,
						"speed": 2
					},
	
					"repulse": {
						"distance": 2000,
						"duration": 100
					},
	
					"push": {
						"particles_nb": 10
					},
	
					"remove": {
						"particles_nb": 2
					}
				}
			},
			"retina_detect": true
		})
	}

	render() {
		return (
			<div className='banner-animation' id="particles-js">
				<Image source="./static/img/logo@2x.png" />
			</div>
		)
	}
}

export default Banner