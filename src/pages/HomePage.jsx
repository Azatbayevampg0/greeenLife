import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import CardImage from '../assets/green.jpg'

function HomePage() {
	// Ikonkalar
	const leafIcon = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-12 w-12 text-green-600'
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
	)

	const alertIcon = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-12 w-12 text-amber-500'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
			/>
		</svg>
	)

	const usersIcon = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-12 w-12 text-blue-500'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
			/>
		</svg>
	)

	const chartIcon = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-12 w-12 text-purple-500'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
			/>
		</svg>
	)

	return (
		<div className='flex min-h-screen flex-col'>
			<main className='flex-1'>
				<section className='bg-gradient-to-b from-white to-green-50 py-20'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='grid gap-6 lg:grid-cols-2 lg:gap-12'>
							<div className='flex flex-col justify-center space-y-4'>
								<div className='space-y-2'>
									<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
										Atrof-muhitni raqamlashtirish
									</h1>
									<p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
										Yashil Hayot loyihasi orqali atrof-muhitni asrash, daraxt
										ekish va tabiatni toza saqlashga o'z hissangizni qo'shing.
									</p>
								</div>
								<div className='flex flex-col gap-2 min-[400px]:flex-row'>
									<Link to='/register'>
										<button className='inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950'>
											Ro'yxatdan o'tish
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='ml-2 h-4 w-4'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth={2}
													d='M14 5l7 7m0 0l-7 7m7-7H3'
												/>
											</svg>
										</button>
									</Link>
									<Link to='/about'>
										<button className='inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950'>
											Batafsil ma'lumot
										</button>
									</Link>
								</div>
							</div>
							<div className='flex items-center justify-center'>
								<img
									src={CardImage}
									alt='Yashil Hayot'
									className='aspect-square overflow-hidden rounded-xl object-cover'
                  width={440}
								/>
							</div>
						</div>
					</div>
				</section>
				<section className='py-12 md:py-16 lg:py-20'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
									Loyiha imkoniyatlari
								</h2>
								<p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									Yashil Hayot loyihasi orqali quyidagi imkoniyatlarga ega
									bo'lasiz
								</p>
							</div>
						</div>
						<div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4'>
							<Card
								icon={leafIcon}
								title='Daraxt ekish'
								description='Daraxt ekish va uni kuzatib borish imkoniyati'
							/>
							<Card
								icon={alertIcon}
								title='Muammolar'
								description='Atrof-muhit muammolari haqida xabar berish'
							/>
							<Card
								icon={usersIcon}
								title='Volontyorlik'
								description="Volontyor sifatida faoliyat ko'rsatish"
							/>
							<Card
								icon={chartIcon}
								title='Statistika'
								description='Faoliyatingiz statistikasini kuzatib borish'
							/>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

export default HomePage
