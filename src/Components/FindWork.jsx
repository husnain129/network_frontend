import React from 'react'
import Button from './Common/Button'
import Dropwdown from './Common/Dropdown'
import Footer from './Footer'
import Header from './Header'
import JobCard from './Common/JobCard'
import Svgs from './Svgs'

const FindWork = () => {
    return (
        <>
            <Header />
            <div className='container pt-[2rem] flex flex-col gap-5'>
                <div className='text-center h-[20rem] rounded-lg bg-cover bg-find-work text-white w-full flex justify-center flex-col gap-4'>
                    <h1 className='font-extrabold text-[2.2rem]'>Search For Your Next Dream Job</h1>
                    <p className='text-[#CCCCCC]'>When you’re searching for a job, there are a few things you can <br className='hidden md:block' /> do to get the most out of your search</p>
                    <div className='pt-[1rem] w-[90%] lg:w-[80%] mx-auto'>
                        <div className='px-4 py-2 rounded-md bg-white flex items-center gap-4'>
                            <div className='flex-1 flex items-center gap-3'>
                                <div>
                                    <div className='flex items-center justify-center h-[2.8rem] w-[2.8rem] bg-[#248489] rounded-full'>
                                        <Svgs.Search />
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <input type="text" className='text-[#35424B] outline-none p-3 rounded-md border-transparent border focus:border-gray-200 w-full' placeholder='Find jobs by category, skill, title' />
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <Dropwdown placeholder={'By Category'} backgroundColor='#F2F2F2' />
                                <Dropwdown placeholder={'By Location'} backgroundColor='#F2F2F2' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-5 justify-between'>
                    <div>
                        <h1 className='font-semibold text-2xl'>1200 Jobs Found</h1>
                    </div>
                    <div>
                        <div className='flex items-center gap-3'>
                            <Button text='Full Time' disabled />
                            <Button text='Part-Time' disabled />
                            <Button text='Remote Only' disabled />
                            <Dropwdown placeholder={'Sort By'} backgroundColor='#F2F2F2' />
                        </div>
                    </div>
                </div>
                <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pb-[1rem]'>
                    <JobCard />
                </div>
                <div className='flex items-center justify-center mb-[2rem]'>
                    <Button text={
                        <div className='flex items-center gap-1'>
                            <Svgs.LoadMore />
                            <p>Load More</p>
                        </div>
                    } />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default FindWork