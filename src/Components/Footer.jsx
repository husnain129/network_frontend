import React from 'react'
import Button from './Common/Button'
import SimpleInput from './Common/SimpleInput'
import Svgs from './Svgs'

const Footer = () => {
    return (
        <div className='bg-[#35424B]'>
            <div className='mx-auto container w-[90%]'>
                <div className='grid lg:grid-cols-7 gap-5 py-[2rem] text-white'>
                    <div className='lg:col-span-2 flex lg:items-center lg:justify-center'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex items-start gap-2'>
                                <Svgs.Location_pin />
                                <p className='text-sm'>Mehran Block, Allama Iqbal Town, <br className='lg:block hidden' /> Lahore</p>
                            </div>
                            <div className='flex items-start gap-2'>
                                <Svgs.Mail />
                                <p className='text-sm'><a href="mailto:info@network.com">info@network.com</a></p>
                            </div>
                            <div className='flex items-start gap-2'>
                                <Svgs.Phone />
                                <p className='text-sm'><a href="tel:+91 42-688-3295">+91 42-688-3295</a></p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='font-semibold text-[#02FCFC] text-lg'>Service</h2>
                        <p className='text-sm'><a href="#">UI/UX Design</a></p>
                        <p className='text-sm'><a href="#">Mobile Dev</a></p>
                        <p className='text-sm'><a href="#">IT Consultancy</a></p>
                        <p className='text-sm'><a href="#">Web Dev</a></p>
                        <p className='text-sm'><a href="#">Development</a></p>
                        <p className='text-sm'><a href="#">QA Testing</a></p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='font-semibold text-[#02FCFC] text-lg'>Service</h2>
                        <p className='text-sm'><a href="#">UI/UX Design</a></p>
                        <p className='text-sm'><a href="#">Mobile Dev</a></p>
                        <p className='text-sm'><a href="#">IT Consultancy</a></p>
                        <p className='text-sm'><a href="#">Web Dev</a></p>
                        <p className='text-sm'><a href="#">Development</a></p>
                        <p className='text-sm'><a href="#">QA Testing</a></p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='font-semibold text-[#02FCFC] text-lg'>Service</h2>
                        <p className='text-sm'><a href="#">UI/UX Design</a></p>
                        <p className='text-sm'><a href="#">Mobile Dev</a></p>
                        <p className='text-sm'><a href="#">IT Consultancy</a></p>
                        <p className='text-sm'><a href="#">Web Dev</a></p>
                        <p className='text-sm'><a href="#">Development</a></p>
                        <p className='text-sm'><a href="#">QA Testing</a></p>
                    </div>
                    <div className='flex flex-col gap-4 lg:col-span-2'>
                        <h2 className='font-semibold text-[#02FCFC] text-lg'>Join a Newsletter</h2>
                        <div className='flex flex-col gap-3 w-full'>
                            <div className='flex flex-col gap-2 w-full'>
                                <h2 className='font-semibold text-sm'>Your Email</h2>
                                <input className='w-full focus:border-[#248489] bg-[#F7F7F7] border border-transparent placeholder:text-[#999999] text-sm rounded-md outline-none px-4 py-2 transition-all' placeholder='Enter Your Email' />
                            </div>
                        </div>
                        <div>
                            <Button noHover={true} color='text-[#000]' text='Send' bg='bg-[#02FCFC]' />
                        </div>
                        <p className='text-sm'>Copyright Nework Website</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer