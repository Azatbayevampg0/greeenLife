import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authStore } from '../../store/auth.store'
import $axios from '../server'
import { toast } from 'react-toastify'
import headerLogo from '../assets/images/logo-icon.svg'
function Header() {
	const { user } = authStore()
	console.log(user)

	const { setIsAuth, setUser, setAccessToken } = authStore()
	const navigate = useNavigate()

	const logout = async () => {
		try {
			await $axios.post('auth/logout')
			setAccessToken('')
			setIsAuth(false)
			setUser({})
			navigate('/login')
		} catch (error) {
			toast.error(error.response?.data?.message)
		}
	}

	return (
		<header className='sticky top-0 z-10 border-b bg-white'>
			<div className='container mx-auto flex h-16 items-center justify-between px-4'>
				<div className='flex items-center gap-2'>
				<img src={headerLogo} alt="headerLogo" width={120} height="auto" />
				<Link to='/' className='text-sm font-medium'>
						Bosh sahifa
					</Link>
				</div>
				<nav className='hidden md:flex items-center gap-6'>
					
					<Link to='/problems' className='text-sm font-medium'>
						Muammolar
					</Link>
					<Link to='/statistics' className='text-sm font-medium'>
						Statistika
					</Link>
					<Link to='/media' className='text-sm font-medium'>
						Media
					</Link>
					<Link to='/about' className='text-sm font-medium'>
						Biz haqimizda
					</Link>
					<Link to='/about' className='text-sm font-medium'>
						{user.firstName}
					</Link>
				</nav>
				<div className='flex items-center gap-4'>
					<Link to='/login'>
						<button className='inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950'>
							Kirish
						</button>
					</Link>
					<Link to='/register'>
						<button className='inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950'>
							Ro'yxatdan o'tish
						</button>
					</Link>
					<Link>
						<button
							className='inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950'
							onClick={logout}
						>
							Chiqish
						</button>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
