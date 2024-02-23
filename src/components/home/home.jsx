import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './home.scss'
import { location, pointred } from '../imgs';
const Home = () => {

    return (
        <main className='w-full home mx-auto max-w-[1440px]'>
            <section className='grid grid-cols-4 mt-[40px] gap-[32px] mb-[10px]'>
                {/* {fetchData?.map(item => ( */}
                <div className="card-container relative">
                    <div className='absolute not-confirm flex justify-center items-center px-[8px] py-[2px] gap-[6px] top-[20px] left-[20px]'>
                        <img src={pointred} alt="red" />
                        <h1 className='text-[#B42318] text-[14px] font-[500]'>Tasdiqlanmagan</h1>
                    </div>
                    <img className='h-[240px] object-cover' src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="img" />
                    <div className="card-content p-[20px]">
                        <div className="location flex justify-start items-center gap-[8px]">
                            <img src={location} alt="location" />
                            <h1 className='text-[#17B26A] font-[600] text-[14px]'>G’ijduvon, Buxoro</h1>
                        </div>
                        <h1 className='text-[#101828] font-[600] text-[20px] pt-[12px]'>Piyoz</h1>
                        <p className='text-[#475467] font-[400] text-[16px] pt-[8px]'>How do you create compelling presentations that wow your colle</p>
                        <div className='flex justify-between items-center pt-[24px]'>
                            <p className='text-[#17B26A] font-[600] text-[18px]'>2,500 so’m</p>
                            <p className='text-[#000] font-[500] text-[18px]'>2 tonna</p>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <img className='h-[240px] object-cover' src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="img" />
                    <div className="card-content p-[20px]">
                        <div className="location flex justify-start items-center gap-[8px]">
                            <img src={location} alt="location" />
                            <h1 className='text-[#17B26A] font-[600] text-[14px]'>G’ijduvon, Buxoro</h1>
                        </div>
                        <h1 className='text-[#101828] font-[600] text-[20px] pt-[12px]'>Piyoz</h1>
                        <p className='text-[#475467] font-[400] text-[16px] pt-[8px]'>How do you create compelling presentations that wow your colle</p>
                        <div className='flex justify-between items-center pt-[24px]'>
                            <p className='text-[#17B26A] font-[600] text-[18px]'>2,500 so’m</p>
                            <p className='text-[#000] font-[500] text-[18px]'>2 tonna</p>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <img className='h-[240px] object-cover' src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="img" />
                    <div className="card-content p-[20px]">
                        <div className="location flex justify-start items-center gap-[8px]">
                            <img src={location} alt="location" />
                            <h1 className='text-[#17B26A] font-[600] text-[14px]'>G’ijduvon, Buxoro</h1>
                        </div>
                        <h1 className='text-[#101828] font-[600] text-[20px] pt-[12px]'>Piyoz</h1>
                        <p className='text-[#475467] font-[400] text-[16px] pt-[8px]'>How do you create compelling presentations that wow your colle</p>
                        <div className='flex justify-between items-center pt-[24px]'>
                            <p className='text-[#17B26A] font-[600] text-[18px]'>2,500 so’m</p>
                            <p className='text-[#000] font-[500] text-[18px]'>2 tonna</p>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <img className='h-[240px] object-cover' src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="img" />
                    <div className="card-content p-[20px]">
                        <div className="location flex justify-start items-center gap-[8px]">
                            <img src={location} alt="location" />
                            <h1 className='text-[#17B26A] font-[600] text-[14px]'>G’ijduvon, Buxoro</h1>
                        </div>
                        <h1 className='text-[#101828] font-[600] text-[20px] pt-[12px]'>Piyoz</h1>
                        <p className='text-[#475467] font-[400] text-[16px] pt-[8px]'>How do you create compelling presentations that wow your colle</p>
                        <div className='flex justify-between items-center pt-[24px]'>
                            <p className='text-[#17B26A] font-[600] text-[18px]'>2,500 so’m</p>
                            <p className='text-[#000] font-[500] text-[18px]'>2 tonna</p>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <img className='h-[240px] object-cover' src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="img" />
                    <div className="card-content p-[20px]">
                        <div className="location flex justify-start items-center gap-[8px]">
                            <img src={location} alt="location" />
                            <h1 className='text-[#17B26A] font-[600] text-[14px]'>G’ijduvon, Buxoro</h1>
                        </div>
                        <h1 className='text-[#101828] font-[600] text-[20px] pt-[12px]'>Piyoz</h1>
                        <p className='text-[#475467] font-[400] text-[16px] pt-[8px]'>How do you create compelling presentations that wow your colle</p>
                        <div className='flex justify-between items-center pt-[24px]'>
                            <p className='text-[#17B26A] font-[600] text-[18px]'>2,500 so’m</p>
                            <p className='text-[#000] font-[500] text-[18px]'>2 tonna</p>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <img className='h-[240px] object-cover' src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="img" />
                    <div className="card-content p-[20px]">
                        <div className="location flex justify-start items-center gap-[8px]">
                            <img src={location} alt="location" />
                            <h1 className='text-[#17B26A] font-[600] text-[14px]'>G’ijduvon, Buxoro</h1>
                        </div>
                        <h1 className='text-[#101828] font-[600] text-[20px] pt-[12px]'>Piyoz</h1>
                        <p className='text-[#475467] font-[400] text-[16px] pt-[8px]'>How do you create compelling presentations that wow your colle</p>
                        <div className='flex justify-between items-center pt-[24px]'>
                            <p className='text-[#17B26A] font-[600] text-[18px]'>2,500 so’m</p>
                            <p className='text-[#000] font-[500] text-[18px]'>2 tonna</p>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <img className='h-[240px] object-cover' src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="img" />
                    <div className="card-content p-[20px]">
                        <div className="location flex justify-start items-center gap-[8px]">
                            <img src={location} alt="location" />
                            <h1 className='text-[#17B26A] font-[600] text-[14px]'>G’ijduvon, Buxoro</h1>
                        </div>
                        <h1 className='text-[#101828] font-[600] text-[20px] pt-[12px]'>Piyoz</h1>
                        <p className='text-[#475467] font-[400] text-[16px] pt-[8px]'>How do you create compelling presentations that wow your colle</p>
                        <div className='flex justify-between items-center pt-[24px]'>
                            <p className='text-[#17B26A] font-[600] text-[18px]'>2,500 so’m</p>
                            <p className='text-[#000] font-[500] text-[18px]'>2 tonna</p>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <img className='h-[240px] object-cover' src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="img" />
                    <div className="card-content p-[20px]">
                        <div className="location flex justify-start items-center gap-[8px]">
                            <img src={location} alt="location" />
                            <h1 className='text-[#17B26A] font-[600] text-[14px]'>G’ijduvon, Buxoro</h1>
                        </div>
                        <h1 className='text-[#101828] font-[600] text-[20px] pt-[12px]'>Piyoz</h1>
                        <p className='text-[#475467] font-[400] text-[16px] pt-[8px]'>How do you create compelling presentations that wow your colle</p>
                        <div className='flex justify-between items-center pt-[24px]'>
                            <p className='text-[#17B26A] font-[600] text-[18px]'>2,500 so’m</p>
                            <p className='text-[#000] font-[500] text-[18px]'>2 tonna</p>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <img className='h-[240px] object-cover' src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="img" />
                    <div className="card-content p-[20px]">
                        <div className="location flex justify-start items-center gap-[8px]">
                            <img src={location} alt="location" />
                            <h1 className='text-[#17B26A] font-[600] text-[14px]'>G’ijduvon, Buxoro</h1>
                        </div>
                        <h1 className='text-[#101828] font-[600] text-[20px] pt-[12px]'>Piyoz</h1>
                        <p className='text-[#475467] font-[400] text-[16px] pt-[8px]'>How do you create compelling presentations that wow your colle</p>
                        <div className='flex justify-between items-center pt-[24px]'>
                            <p className='text-[#17B26A] font-[600] text-[18px]'>2,500 so’m</p>
                            <p className='text-[#000] font-[500] text-[18px]'>2 tonna</p>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <img className='h-[240px] object-cover' src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="img" />
                    <div className="card-content p-[20px]">
                        <div className="location flex justify-start items-center gap-[8px]">
                            <img src={location} alt="location" />
                            <h1 className='text-[#17B26A] font-[600] text-[14px]'>G’ijduvon, Buxoro</h1>
                        </div>
                        <h1 className='text-[#101828] font-[600] text-[20px] pt-[12px]'>Piyoz</h1>
                        <p className='text-[#475467] font-[400] text-[16px] pt-[8px]'>How do you create compelling presentations that wow your colle</p>
                        <div className='flex justify-between items-center pt-[24px]'>
                            <p className='text-[#17B26A] font-[600] text-[18px]'>2,500 so’m</p>
                            <p className='text-[#000] font-[500] text-[18px]'>2 tonna</p>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <img className='h-[240px] object-cover' src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="img" />
                    <div className="card-content p-[20px]">
                        <div className="location flex justify-start items-center gap-[8px]">
                            <img src={location} alt="location" />
                            <h1 className='text-[#17B26A] font-[600] text-[14px]'>G’ijduvon, Buxoro</h1>
                        </div>
                        <h1 className='text-[#101828] font-[600] text-[20px] pt-[12px]'>Piyoz</h1>
                        <p className='text-[#475467] font-[400] text-[16px] pt-[8px]'>How do you create compelling presentations that wow your colle</p>
                        <div className='flex justify-between items-center pt-[24px]'>
                            <p className='text-[#17B26A] font-[600] text-[18px]'>2,500 so’m</p>
                            <p className='text-[#000] font-[500] text-[18px]'>2 tonna</p>
                        </div>
                    </div>
                </div>
                {/* ))} */}
            </section>
        </main>
    )
}

export default Home