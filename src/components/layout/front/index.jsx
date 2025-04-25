import { Outlet } from 'react-router-dom'
import Footer from '../../Footer'
import Header from '../../Header'
import { Fragment } from 'react'

const FrontLayout = () => {
	return (
	<Fragment>
		<Header/>
		<Outlet/>
		<Footer/>
	</Fragment>
	)
}

export default FrontLayout
