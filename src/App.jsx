import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import Login from './pages/LoginPage'
import Register from './pages/RegisterPage'
import MediaPage from './pages/MediaPage'
import PartnersPage from './pages/PartnersPage'
import DonationPage from './pages/DonationPage'
import DashboardPage from './pages/DashboardPage'
import StatistcsPage from './pages/StatistcsPage'
import VolonteersPage from './pages/VolonteersPage'
import ContactPage from './pages/ContactPage'
import SupportsPage from './pages/SupportsPage'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/media' element={<MediaPage />} />
				<Route path='/partners' element={<PartnersPage />} />
				<Route path='/dashboard' element={<DashboardPage />} />
				<Route path='/donation' element={<DonationPage />} />
				<Route path='/volonteer' element={<VolonteersPage />} />
				<Route path='/statistics' element={<StatistcsPage />} />
				<Route path='/contacts' element={<ContactPage />} />
				<Route path='/supports' element={<SupportsPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
