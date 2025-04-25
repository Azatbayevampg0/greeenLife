import React from 'react'

const Login = () => {
  return (
    <div class='container mx-auto px-4 pt-[100px] pb-8'>
  <div class='grid gap-8 md:grid-cols-3'>
   
    <div class='md:col-span-1 bg-white rounded-2xl shadow p-6 text-center'>
      <div class='flex flex-col items-center'>
        <div class='h-24 w-24 rounded-full overflow-hidden'>
          <img
            src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'
            alt='User profile'
            class='object-cover w-full h-full'
          />
        </div>
        <h2 class='mt-4 text-2xl font-bold'>Jane Doe</h2>
        <div class='text-gray-500 text-sm mt-1 flex items-center justify-center gap-1'>
          <svg class='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              d='M8 7V3M16 7V3M4 11H20M5 21H19C20.105 21 21 20.105 21 19V7C21 5.895 20.105 5 19 5H5C3.895 5 3 5.895 3 7V19C3 20.105 3.895 21 5 21Z'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
          <span>28 years old</span>
        </div>
        <p class='mt-3 text-sm text-gray-600 max-w-xs'>
          Full-stack developer with a passion for creating intuitive web experiences and solving real-world problems through code.
        </p>
        <div class='mt-4 flex flex-wrap justify-center gap-2'>
          <span class='bg-emerald-100 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-full'>React</span>
          <span class='bg-indigo-100 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full'>Tailwind CSS</span>
          <span class='bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-1 rounded-full'>Node.js</span>
        </div>
        <div class='mt-6 flex gap-4 justify-center text-gray-400 hover:text-black'>
          <a href='#'><svg class='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'><path d='...' /></svg></a>
          <a href='#'><svg class='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'><path d='...' /></svg></a>
          <a href='#'><svg class='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'><path d='...' /></svg></a>
        </div>
      </div>
    </div>

    
    <div class='md:col-span-2 bg-white rounded-2xl shadow p-6'>
      <h3 class='text-xl font-semibold'>Portfolio</h3>
      <p class='text-gray-500 mb-4'>Recent projects and work</p>
      <div class='grid gap-4 sm:grid-cols-2'>
        <div class='bg-gray-100 rounded overflow-hidden'>
          <div class='aspect-video'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZE9f_pFgYnG6V7FfnQXvVzOgk4osHDVR2hkK2lh3-XJ2juVqNp--BP5AsjwcAUi1DWck&usqp=CAU'
              alt='Project 1'
              class='w-full h-full object-cover'
            />
          </div>
          <div class='p-4'>
            <h4 class='text-lg font-medium'>Project 1</h4>
            <p class='text-sm text-gray-500'>A brief description of project 1 and the technologies used.</p>
          </div>
        </div>

        <div class='bg-gray-100 rounded overflow-hidden'>
          <div class='aspect-video'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZE9f_pFgYnG6V7FfnQXvVzOgk4osHDVR2hkK2lh3-XJ2juVqNp--BP5AsjwcAUi1DWck&usqp=CAU'
              alt='Project 2'
              class='w-full h-full object-cover'
            />
          </div>
          <div class='p-4'>
            <h4 class='text-lg font-medium'>Project 2</h4>
            <p class='text-sm text-gray-500'>A brief description of project 2 and the technologies used.</p>
          </div>
        </div>
      </div>
    </div>

    
    <div class='md:col-span-3 bg-white rounded-2xl shadow p-6'>
      <h3 class='text-xl font-semibold'>Activity Consistency</h3>
      <p class='text-gray-500 mb-4'>Your contribution history over time</p>
      <div class='grid grid-cols-7 gap-1 sm:grid-cols-14 md:grid-cols-28 lg:grid-cols-52'>
        <div class='h-3 w-3 rounded-sm bg-gray-100' title='0 contributions'></div>
        <div class='h-3 w-3 rounded-sm bg-emerald-100' title='1 contributions'></div>
        <div class='h-3 w-3 rounded-sm bg-emerald-200' title='2 contributions'></div>
      </div>
      <div class='mt-4 flex items-center justify-end gap-2 text-xs text-gray-400'>
        <span>Less</span>
        <div class='h-3 w-3 rounded-sm bg-gray-100'></div>
        <div class='h-3 w-3 rounded-sm bg-emerald-100'></div>
        <div class='h-3 w-3 rounded-sm bg-emerald-200'></div>
        <div class='h-3 w-3 rounded-sm bg-emerald-300'></div>
        <div class='h-3 w-3 rounded-sm bg-emerald-400'></div>
        <span>More</span>
      </div>
    </div>
  </div>
</div>

  )
}

export default Login
