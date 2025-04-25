import { useState } from 'react'
import { Search, Play } from 'lucide-react'
import { categories, posts, videos } from '../data/fakeDb'
import { Link } from 'react-router-dom'

function MediaPage() {
	const [activeTab, setActiveTab] = useState('all')
	const [searchQuery, setSearchQuery] = useState('')

	const filteredPosts = posts.filter(
		post =>
			post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
	)

	const filteredContent =
		activeTab === 'all'
			? filteredPosts
			: filteredPosts.filter(
					post => post.category.toLowerCase() === activeTab.toLowerCase()
			  )

	return (
		<main className='flex-1 bg-gray-50'>
			{/* Hero section */}
			<section className='bg-gradient-to-b from-white to-green-50 py-12'>
				<div className='container mx-auto px-4'>
					<div className='text-center max-w-3xl mx-auto'>
						<h1 className='text-3xl md:text-4xl font-bold mb-4'>
							Yashil Hayot Media
						</h1>
						<p className='text-gray-600 mb-8'>
							Tabiat, ekologiya va atrof-muhit haqida eng so'nggi maqolalar,
							video materiallar va mutaxassislar fikrlari
						</p>
						<div className='flex flex-wrap justify-center gap-2'>
							<div className='relative w-full md:w-96'>
								<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
								<input
									type='text'
									placeholder='Qidirish...'
									value={searchQuery}
									onChange={e => setSearchQuery(e.target.value)}
									className='pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Categories */}
			<section className='py-8 border-b'>
				<div className='container mx-auto px-4'>
					<div className='flex flex-wrap items-center justify-center gap-3'>
						<button
							onClick={() => setActiveTab('all')}
							className={`px-4 py-1 text-sm rounded-full transition-colors ${
								activeTab === 'all'
									? 'bg-green-600 text-white'
									: 'bg-white border border-gray-200 hover:bg-gray-100'
							}`}
						>
							Barchasi
						</button>
						{categories.map(category => (
							<button
								key={category.id}
								onClick={() => setActiveTab(category.name.toLowerCase())}
								className={`px-4 py-1 text-sm rounded-full transition-colors ${
									activeTab === category.name.toLowerCase()
										? 'bg-green-600 text-white'
										: 'bg-white border border-gray-200 hover:bg-gray-100'
								}`}
							>
								{category.name}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Content Grid */}
			<section className='py-12'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{filteredContent.map(post => (
							<Link to={`/post/${post.id}`} key={post.id}>
								<div className='bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
									<img
										src={post.image}
										alt={post.title}
										className='w-full h-48 object-cover'
									/>
									<div className='p-5'>
										<span className='inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full mb-3'>
											{post.category}
										</span>
										<h3 className='text-lg font-bold mb-2 hover:text-green-600 transition-colors'>
											{post.title}
										</h3>
										<p className='text-gray-600 text-sm mb-4'>{post.excerpt}</p>
										<div className='flex items-center justify-between'>
											<div className='flex items-center'>
												<div className='w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 text-xs font-medium'>
													{post.author.charAt(0)}
												</div>
												<div className='ml-2'>
													<p className='text-xs font-medium'>{post.author}</p>
													<p className='text-xs text-gray-500'>{post.date}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Videos Section */}
			{activeTab === 'all' && (
				<section className='py-12 bg-gray-50'>
					<div className='container mx-auto px-4'>
						<h2 className='text-2xl font-bold mb-8'>Video materiallar</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
							{videos.map(video => (
								<div
									key={video.id}
									className='bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow'
								>
									<div className='relative'>
										<img
											src={video.thumbnail}
											alt={video.title}
											className='w-full h-48 object-cover'
										/>
										<div className='absolute inset-0 flex items-center justify-center'>
											<div className='w-14 h-14 bg-green-600 bg-opacity-80 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all'>
												<Play className='h-6 w-6 text-white' />
											</div>
										</div>
										<div className='absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded'>
											{video.duration}
										</div>
									</div>
									<div className='p-5'>
										<h3 className='text-lg font-bold mb-2 hover:text-green-600 transition-colors'>
											{video.title}
										</h3>
										<div className='flex items-center justify-between text-sm'>
											<p className='text-gray-600'>{video.author}</p>
											<div className='flex items-center text-gray-500 space-x-3'>
												<span>{video.views} ko'rishlar</span>
												<span>{video.date}</span>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			)}
		</main>
	)
}

export default MediaPage
