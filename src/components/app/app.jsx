import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from '../home/home'
import Login from '../login/login'
import './app.scss'
import AppRoved from '../approved/approved'
const App = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            navigate('/login')
        }
    }, [pathname])
    return (
        <div className={`app ${pathname !== '/login' && "max-w-[1440px] px-[80px] pt-[32px]"}  mx-auto w-full`}>
            <section className={`${pathname === '/login' && "hidden"} flex flex-col justify-start items-start gap-3`}>
                <h1 className='text-[24px] font-[500]'>Moderator</h1>
                <div className="w-full h-[1px] bg-[#EAECF0] my-[10px]"></div>
                <ul className="flex app-links text-[14px] font-[600]">
                    <li
                        onClick={() => navigate("/")}
                        className={`${pathname === "/" && "bg-[#F9FAFB]"
                            } cursor-pointer rounded-l-[8px] w-[130px] flex justify-center items-center hover:bg-[#F9FAFB] py-[8px] border-r-[1px] border-r-solid border-r-[#D0D5DD]`}
                    >
                        Yangi qo’shilgan
                    </li>
                    <li
                        onClick={() => navigate("/approved")}
                        className={`${pathname === "/approved" && "bg-[#F9FAFB]"
                            } cursor-pointer rounded-r-[8px] w-[130px] flex justify-center items-center hover:bg-[#F9FAFB] py-[8px]`}
                    >
                        Tasdiqlangan
                    </li>
                </ul>
            </section>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/approved' element={<AppRoved />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    )
}

export default App