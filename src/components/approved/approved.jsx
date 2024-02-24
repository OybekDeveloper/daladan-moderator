import React, { useEffect, useState } from 'react'
import { location, pointgreen } from '../imgs';
import './approved.scss'
import axios from 'axios';
import Loader from '../loader/loader';
import AppRovedtModal from './approved-modal';
import { useDispatch, useSelector } from 'react-redux';
import { ProductModal } from '../../reducer/event';
import { ProductImg } from '../img-blurhash';
const AppRoved = () => {
    const { product } = useSelector(state => state.event)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const handleProduct = (id) => {
        dispatch(ProductModal(id))
    }
    useEffect(() => {
        const body = document.querySelector(".app")
        if (product) {
            body.classList.add("blur-effect")
        } else {
            body.classList.remove("blur-effect")
        }
        const token = localStorage.getItem("token");
        console.log(token);
        const fetchData = async () => {
            try {
                const response = await axios({
                    method: "GET",
                    url: "https://avtowatt.uz/api/v1/products/get-all-by-check/true",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },

                })
                setProducts(response.data)
                console.log(response.data)
            } catch (err) {
                console.log(err)
            } finally {
                setTimeout(() => {
                    setLoading(false)
                }, 1000);
            }

        }
        fetchData()

    }, [product])

    return (
        <main className='approved w-full mx-auto max-w-[1440px]'>
            {loading ? (
                <Loader />
            ) : (
                <section className='grid grid-cols-4 mt-[40px] gap-[32px] mb-[10px]'>
                    {products?.slice().reverse().map(item => (
                        <div onClick={() => handleProduct((item?.id))} className="card-container relative">
                            <div className='absolute confirm flex justify-center items-center px-[8px] py-[2px] gap-[6px] top-[20px] left-[20px]'>
                                <img src={pointgreen} alt="green" />
                                <h1 className='text-[#067647] text-[14px] font-[500]'>Tasdiqlangan</h1>
                            </div>
                            <ProductImg src={ item?.photoUrl ? item?.photoUrl : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"}/>
                            <div className="card-content h-full p-[20px] flex flex-col">
                                <div className="location flex justify-start items-center gap-[8px]">
                                    <img src={location} alt="location" />
                                    <h1 className='text-[#17B26A] font-[600] text-[14px]'>{`${item?.district} , ${item?.region}`}</h1>
                                </div>
                                <div className='h-[100px]'>
                                    <h1 className='text-[#101828] font-[600] text-[20px] pt-[12px]'>{item?.name}</h1>
                                    <p className='text-[#475467] font-[400] text-[16px] pt-[8px]'>{item?.description.slice(0, 30)}...</p>
                                </div>
                                <div className='flex justify-between items-center pt-[24px]'>
                                    <p className='text-[#17B26A] font-[600] text-[18px]'>{item?.price} so’m</p>
                                    <p className='text-[#000] font-[500] text-[18px]'>{item?.weight} tonna</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            )}
            <AppRovedtModal />
        </main>
    )
}

export default AppRoved