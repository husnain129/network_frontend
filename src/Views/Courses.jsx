import React from 'react'
import Button from '../Components/Button'
import Header from '../Components/Header'
import Svgs from '../Components/Svgs'
import CoursesSpecs from '../Components/Courses/CoursesSpecs';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import HomeCard from '../Components/HomeCard';



const Courses = () => {
    return (
        <>
            <Header />
            <div className='h-[24rem] bg-gray-300 course-bg'>
                <div className='container mx-auto h-full w-[90%] flex items-center'>
                    <Swiper
                        spaceBetween={30}
                        navigation={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        speed={600}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="courses-slider"
                    >
                        <SwiperSlide>
                            <div className='flex flex-col gap-4 text-[#248489]'>
                                <h1 className='text-[2.5rem] font-extrabold'>Learn Web Development
                                    <br className='hidden md:block' />
                                    from Experts</h1>
                                <p>Learn how to build web  applications from
                                    <br className='hidden md:block' />
                                    Scratch Level to Master Level</p>
                                <div>
                                    <Button bg='bg-[#248489]' className='!text-[white] hover:!text-white hover:!bg-[#248489] border-white' text={
                                        <div className='flex items-center gap-2'>
                                            <h2 >View Course</h2>
                                            <Svgs.Next fill='#fff' />
                                        </div>
                                    } />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col gap-4 text-[#248489]'>
                                <h1 className='text-[2.5rem] font-extrabold'>
                                    Learn Android App Development
                                    <br className='hidden md:block' />
                                    from Experts</h1>
                                <p>Learn how to build Android  applications from
                                    <br className='hidden md:block' />
                                    Scratch Level to Master Level</p>
                                <div>
                                    <Button bg='bg-[#248489]' className='!text-[white] hover:!text-white hover:!bg-[#248489] border-white' text={
                                        <div className='flex items-center gap-2'>
                                            <h2 >View Course</h2>
                                            <Svgs.Next fill='#fff' />
                                        </div>
                                    } />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col gap-4 text-[#248489]'>
                                <h1 className='text-[2.5rem] font-extrabold'>
                                    Learn Android App Development
                                    <br className='hidden md:block' />
                                    from Experts</h1>
                                <p>Learn how to build Android  applications from
                                    <br className='hidden md:block' />
                                    Scratch Level to Master Level</p>
                                <div>
                                    <Button bg='bg-[#248489]' className='!text-[white] hover:!text-white hover:!bg-[#248489] border-white' text={
                                        <div className='flex items-center gap-2'>
                                            <h2 >View Course</h2>
                                            <Svgs.Next fill='#fff' />
                                        </div>
                                    } />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='bg-[#FAFAFA] py-[2rem]'>
                <div className='container flex items-center justify-around gap-5'>
                    <CoursesSpecs icon={<Svgs.Anytime />} title='Learn Anytime' desc='Learn and Repeat anytime you want' />
                    <CoursesSpecs icon={<Svgs.Improve />} title='Improve Skills' desc='Online Courses to Improve Your Technical Skills ' />
                    <CoursesSpecs icon={<Svgs.Experience />} title='Experienced Instructo' desc='Learn from top Experienced Instructor' />
                </div>
            </div>
            <div className='container py-[3rem]'>
                <h1 className='text-3xl font-extrabold'>Trending Courses</h1>
                <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-[3rem]'>
                    <HomeCard trending={true} />
                </div>
                <div className='text-center'>
                    <Button bg='bg-[#248489]' className='!text-[white] hover:!text-white hover:!bg-[#248489] border-white' text={
                        <div className='flex items-center gap-2'>
                            <h2 >View All</h2>
                            <Svgs.Next fill='#fff' />
                        </div>
                    } />
                </div>
            </div>
            <div className='container'>
                <div className='bg-[#35424b] bg-started started-bg bg-no-repeat'>
                    <div className='flex gap-6 justify-between h-full relative z-[2]'>
                        <div className='flex flex-col gap-3 p-[2rem] justify-center'>
                            <h1 className='text-white text-[2.4rem]'>Join World's Leading Web & App Dev Community</h1>
                            <p className='text-white/70'>Millions of Web and App developers around the world showcase their portfolio work on Nework</p>
                        </div>
                        <div className='w-[24rem] flex justify-center items-center'>
                            <Button text={
                                <div className='flex items-center gap-2'>
                                    <h2 className='text-base'>Get Started</h2>
                                    <Svgs.Next fill='#000' />
                                </div>
                            } bg='bg-white' className='text-black hover:!text-black hover:!bg-white' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses