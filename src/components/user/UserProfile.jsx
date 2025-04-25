import React from 'react'
import ContributionGraph from './ContributionGraph'
import TabsSection from './TabsSection'

const UserProfile = () => {
	return (
		<div className='container mx-auto py-8 px-4'>
			<div className='grid gap-8 md:grid-cols-3'>
				{/* User Info Card */}
				<div className='md:col-span-1 border border-green-100 rounded-lg bg-white/80 backdrop-blur-sm'>
					<div className='p-6 pb-4'>
						<div className='flex flex-col items-center space-y-4'>
							<div className='h-24 w-24 rounded-full overflow-hidden border-4 border-green-100'>
								<img
									src='/placeholder.svg'
									alt='User Avatar'
									className='h-full w-full object-cover'
								/>
							</div>
							<div className='space-y-1 text-center'>
								<h2 className='text-2xl font-semibold'>Eco Enthusiast</h2>
								<p className='text-green-600 font-medium'>@green_warrior</p>
							</div>
						</div>
					</div>

					<div className='px-6 pb-6'>
						<div className='flex justify-around text-center'>
							<div>
								<p className='text-3xl font-bold text-green-600'>24</p>
								<p className='text-sm text-gray-500'>Contributions</p>
							</div>
							<div>
								<p className='text-3xl font-bold text-green-600'>18</p>
								<p className='text-sm text-gray-500'>Trees Planted</p>
							</div>
						</div>

						<div className='mt-6 space-y-2 text-sm'>
							<div className='flex items-center gap-2 text-gray-500'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'></path>
									<circle cx='12' cy='7' r='4'></circle>
								</svg>
								<span>Member since March 2023</span>
							</div>
						</div>
					</div>
				</div>

				{/* Main Content Area */}
				<div className='md:col-span-2 space-y-8'>
					<ContributionGraph />
					<TabsSection />
				</div>
			</div>
		</div>
	)
}

export default UserProfile
