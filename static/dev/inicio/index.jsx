import React, { PureComponent } from 'react'
import Banner from '../components/banner/'
import NavBar from '../components/navbar/'
class Index extends PureComponent {
	render() {
		return (
			<div className='container inicio'>
				<NavBar />
				<Banner />

			</div>
		)
	}
}

export default Index