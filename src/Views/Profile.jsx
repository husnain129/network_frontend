import React, { useState } from 'react'
import Button from '../Components/Common/Button'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import HomeCard from '../Components/Common/HomeCard'
import Svgs from '../Components/Svgs'

const Profile = () => {
    const [HomeSection, setHomeSection] = useState('All')
    const Home_Card_Data = [
        { 'img': '/assets/images/card-img-1.jpg' },
        { 'img': '/assets/images/card-img-2.jpg' },
        { 'img': '/assets/images/card-img-3.jpg' },
        { 'img': '/assets/images/card-img-4.jpg' },
        { 'img': '/assets/images/card-img-5.jpg' },
        { 'img': '/assets/images/card-img-6.jpg' },
        { 'img': '/assets/images/card-img-7.jpg' },
        { 'img': '/assets/images/card-img-8.jpg' },
        { 'img': '/assets/images/card-img-9.jpg' },
        { 'img': '/assets/images/card-img-10.jpg' },
        { 'img': '/assets/images/card-img-12.jpg' },
        { 'img': '/assets/images/card-img-13.jpg' },
        { 'img': '/assets/images/card-img-14.jpg' },
        { 'img': '/assets/images/card-img-15.jpg' },
        { 'img': '/assets/images/card-img-16.jpg' },
    ]
    return (
        <>
            <Header />
            <div>
                <div className='h-[24rem] bg-gray-100'>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/profile-bg.png`} className="w-full h-full object-cover" />
                </div>
                <div className='container relative'>
                    <div className='absolute left-0 top-100 -translate-y-1/2'>
                        <div className='h-[8rem] w-[8rem] rounded-full border-[4px] border-white overflow-hidden'>
                            <img src="https://loremflickr.com/400/400" className="h-full w-full object-cover" />
                        </div>
                    </div>
                    <div className='pt-[4rem]'>
                        <div className='flex items-center justify-end gap-3'>
                            <Button text='Hire Me' />
                            <Button text='Follow' outline />
                            <div className='h-[2.5rem] w-[2.5rem] rounded-full border border-[#7B7B7B] flex items-center justify-center'>
                                <Svgs.ThreeDots />
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center gap-[1.5rem]'>
                                <h1 className='font-extrabold text-[2rem] flex items-center gap-2'>Anas Shafi
                                    <span>
                                        <Svgs.Verified />
                                    </span>
                                </h1>
                                <Button text='Follow' disabled />
                            </div>
                            <div className='flex items-center gap-4 text-[#7B7B7B]'>
                                <h1 className='font-semibold text-sm'>@anasshafi23</h1>
                                <h1 className='font-semibold text-sm flex items-center gap-1'>
                                    <Svgs.Location_pin2 />
                                    Lahore, Pakistan
                                </h1>
                                <h1 className='font-semibold text-sm flex items-center gap-1'>
                                    <Svgs.Calendar />
                                    Member Since Jan, 2021
                                </h1>
                            </div>
                            <div className='flex items-center gap-4 text-[#7B7B7B]'>
                                <div className='flex items-center gap-2'>
                                    <span className='font-semibold text-black'>130 </span> Projects
                                </div>
                                <Svgs.SmallDot />
                                <div className='flex items-center gap-2'>
                                    <span className='font-semibold text-black'>130 </span> Likes
                                </div>
                                <Svgs.SmallDot />
                                <div className='flex items-center gap-2'>
                                    <span className='font-semibold text-black'>130 </span> Followers
                                </div>
                            </div>
                            <div className='flex items-center gap-3 flex-wrap'>
                                <div className='rounded-full px-5 py-2 flex items-center gap-2 border text-sm'>
                                    <Svgs.Flutter fill='#00B5F8' />
                                    Flutter
                                </div>
                            </div>
                            <div className='p-5 flex gap-3 flex-col border rounded-lg'>
                                <h1 className='font-semibold text-xl'>About</h1>
                                <p className='text-sm'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in nulla, rem nobis veritatis, dolores nam eum ut assumenda fuga deserunt iure, cupiditate consequatur pariatur illo reprehenderit beatae nostrum unde repellendus tempora. Officiis inventore iure illum incidunt optio tempore placeat doloremque consequuntur, adipisci quasi laboriosam id totam rerum sint eveniet ipsum, nesciunt sed voluptates enim. Asperiores enim iste aperiam nulla adipisci iure totam nesciunt beatae rem animi minus doloremque repudiandae distinctio, iusto possimus quaerat esse, eaque sapiente laborum tenetur reprehenderit dolores excepturi optio? Aperiam corporis ut vitae a voluptates quibusdam ipsam. Laboriosam laudantium deserunt nihil quos fuga quia deleniti repudiandae amet eius vero magni ipsa, inventore est maiores ut, doloremque modi quisquam!
                                </p>
                                <div className='flex items-center gap-2'>
                                    <Svgs.Linkedin />
                                    <Svgs.FaceBook />
                                    <Svgs.Twitter />
                                    <Svgs.Github />
                                </div>
                            </div>
                        </div>
                    </div>
                    <section>
                        <div className='container py-[2rem] pt-[5rem]'>
                            <div className='border-[#8E8E8E] border w-fit mx-auto px-[2rem] py-[0.5rem] rounded-md flex items-center gap-6 text-lg text-[#35424B] lg:justify-center overflow-auto whitespace-nowrap'>
                                <p className={`cursor-pointer ${HomeSection == "All" && "text-[#248489]"}`} onClick={() => { setHomeSection('All') }}>All</p>
                                <p className={`cursor-pointer ${HomeSection == "Mobile" && "text-[#248489]"}`} onClick={() => { setHomeSection('Mobile') }}>Mobile App Projects</p>
                                <p className={`cursor-pointer ${HomeSection == "Website" && "text-[#248489]"}`} onClick={() => { setHomeSection('Website') }}>Website Projects</p>
                                <p className={`cursor-pointer ${HomeSection == "Wordpress" && "text-[#248489]"}`} onClick={() => { setHomeSection('Wordpress') }}>Wordpress Projects</p>
                            </div>
                            {
                                HomeSection == 'All' && <div className='relative slide-in-bottom grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-[3rem]'>
                                    {
                                        Home_Card_Data.map(data => {
                                            return <HomeCard img={data.img} />
                                        })
                                    }
                                </div>
                            }
                            {
                                HomeSection == 'Mobile' && <div className='relative slide-in-bottom grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-[3rem]'>
                                    {
                                        Home_Card_Data.map(data => {
                                            return <HomeCard img={data.img} />
                                        })
                                    }
                                </div>
                            }
                            {
                                HomeSection == 'Website' && <div className='relative slide-in-bottom grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-[3rem]'>
                                    {
                                        Home_Card_Data.map(data => {
                                            return <HomeCard img={data.img} />
                                        })
                                    }
                                </div>
                            }
                            {
                                HomeSection == 'Wordpress' && <div className=''>
                                    <div className='mx-auto w-fit py-[2rem]'>
                                        <Svgs.NotFound />
                                    </div>
                                </div>
                            }
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Profile