import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authStore } from '../../store/auth.store'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import loginSchema from '../yup/loginSchema'
import { useMutation } from '@tanstack/react-query'
import $axios from '../server'
import { toast } from 'react-toastify'

function Login() {
	const { setIsAuth, setUser, setAccessToken, accessToken } = authStore()
	const navigate = useNavigate()

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(loginSchema),
	})

	const { mutate } = useMutation({
		mutationKey: ['login'],
		mutationFn: async values => {
			const { data } = await $axios.post(`auth/login`, values)
			return data
		},
		onSuccess: data => {
			setUser(data.user)
			setIsAuth(true)
			setAccessToken(data.accessToken)
			toast.success('Successfully logged in!')
			navigate('/')
		},
		onError: error => {
			toast.error(error.response?.data?.message)
		},
	})

	function onSubmit(values) {
		mutate(values)
	}

	useEffect(() => {
		if (accessToken !== '') {
			navigate('/')
		}
		// handleLoader()
	}, [])

	return (
		<div className='flex min-h-screen flex-col bg-gradient-to-b from-white to-green-50'>
			<div className='container mx-auto flex flex-1 items-center justify-center py-12 px-4'>
				<div className='mx-auto w-full max-w-md rounded-lg border bg-white shadow-sm'>
					<div className='p-6 space-y-1 text-center'>
						<div className='flex justify-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-10 w-10 text-green-600'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
								/>
							</svg>
						</div>
						<h2 className='text-2xl font-bold'>Kirish</h2>
						<p className='text-sm text-gray-500'>
							Yashil Hayot loyihasiga kirish uchun ma'lumotlaringizni kiriting
						</p>
					</div>
					<div className='p-6'>
						<form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
							<div className='space-y-2'>
								<label htmlFor='username' className='text-sm font-medium'>
									username
								</label>
								<div className='relative'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='absolute left-3 top-3 h-4 w-4 text-gray-400'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
										/>
									</svg>
									<input
										{...register('username')}
										id='username'
										name='username'
										type='text'
										placeholder='username'
										className='w-full rounded-md border border-gray-200 pl-10 py-2 text-sm'
									/>
								</div>
							</div>
							<div className='space-y-2'>
								<div className='flex items-center justify-between'>
									<label htmlFor='password' className='text-sm font-medium'>
										Parol
									</label>
									<Link
										to='/forgot-password'
										className='text-sm font-medium text-green-600 hover:text-green-700'
									>
										Parolni unutdingizmi?
									</Link>
								</div>
								<div className='relative'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='absolute left-3 top-3 h-4 w-4 text-gray-400'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
										/>
									</svg>
									<input
										{...register('password')}
										id='password'
										name='password'
										type='password'
										placeholder='Parolingizni kiriting'
										className='w-full rounded-md border border-gray-200 pl-10 py-2 text-sm'
									/>
								</div>
							</div>
							<div className='flex items-center space-x-2'>
								<input
									id='remember'
									name='remember'
									type='checkbox'
									className='h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500'
								/>
								<label
									htmlFor='remember'
									className='text-sm font-medium text-gray-700'
								>
									Meni eslab qolish
								</label>
							</div>
							<button
								type='submit'
								className='w-full rounded-md bg-green-600 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
							>
								Kirish
							</button>
						</form>
						<div className='relative my-6'>
							<div className='absolute inset-0 flex items-center'>
								<div className='w-full border-t'></div>
							</div>
							<div className='relative flex justify-center text-xs uppercase'>
								<span className='bg-white px-2 text-gray-500'>Yoki</span>
							</div>
						</div>
						<button className='w-full rounded-md border border-gray-200 bg-white py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'>
							Google orqali kirish
						</button>
					</div>
					<div className='p-6 border-t'>
						<div className='text-center text-sm'>
							Hisobingiz yo'qmi?{' '}
							<Link
								to='/register'
								className='font-medium text-green-600 hover:text-green-700'
							>
								Ro'yxatdan o'tish
							</Link>
						</div>
						<Link
							to='/'
							className='mt-4 flex items-center justify-center text-sm text-gray-500 hover:text-gray-900'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='mr-2 h-4 w-4'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M10 19l-7-7m0 0l7-7m-7 7h18'
								/>
							</svg>
							Bosh sahifaga qaytish
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
