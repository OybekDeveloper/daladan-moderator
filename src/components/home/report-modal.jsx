import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReportModal } from "../../reducer/event";
import { close } from "../imgs";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from 'framer-motion'
const ProductReportModal = () => {
    const { report, reportId } = useSelector(state => state.event);
    const [fetchReport, setFetchReport] = useState()
    const [errorMessage, setErrorMessage] = useState("")
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(ReportModal())
    }
    const handleChange = (e) => {
        setFetchReport({
            ...fetchReport,
            message: e.target.value,
            productId: reportId
        })
        if (e.target.value === null) {
            setFetchReport('')
        }
    }
    const handleComplaint = () => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token")
                const res = await axios({
                    method: "POST",
                    url: `https://avtowatt.uz/api/v1/report/create`,
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    data: fetchReport
                })
                toast.error("Report sent successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                dispatch(ReportModal());
                setErrorMessage(null)
            } catch (err) {
                setErrorMessage(err)
                console.log(err)
            }
        }
        fetchData()
    }
    return (
        <div>
            <Transition show={report} as={Fragment}>
                <Dialog onClose={handleClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed opacity-[0.8] backdrop-blur-10 bg-[#0C111D] inset-0 " />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="fixed inset-0 flex justify-center items-center">
                            <Dialog.Panel className="relative w-[65%] bg-[#fff] shadow-modal">
                                <main className="w-full px-[80px] py-[64px]">
                                    <div onClick={handleClose} className="cursor-pointer flex justify-end">
                                        <img src={close} alt="close" />
                                    </div>
                                    <section>
                                        <div className="w-full flex flex-col justify-start items-start mt-[40px]">
                                            <label
                                                className="flex gap-2 mb-[6px] text-[14px] font-[500] text-[#344054]"
                                                htmlFor="text"
                                            >
                                                <h1>O’chirish haqida izoh</h1>
                                                {errorMessage && (
                                                    <motion.h1
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="text-[12px] bg-red-200 rounded-[12px] p-[5px]"
                                                    >
                                                        Izoh kiritmadingiz!!!
                                                    </motion.h1>
                                                )}
                                            </label>
                                            <textarea
                                                onChange={handleChange}
                                                className="text-[16px] font-[400] text-[#667085] w-full h-[100px] rounded-[8px] px-[14px] py-[10px] bg-[#FFF] border-[1px] border-solid border-[#D0D5DD] focus:outline-[1px]  focus:outline-solid focus:outline-[#84caff] focus:shadow-custom"
                                                type="text"
                                                placeholder="Izoh yozish..."
                                                name="message"
                                            />
                                        </div>
                                    </section>
                                    <div onClick={handleComplaint} className="flex gap-[32px] justify-end items-center mt-[40px] mb-[22px]">
                                        <button className="bg-[#17B26A] rounded-[8px] px-[16px] py-[10px] w-[120px] text-[#FFF] text-[16px] font-[600]">Yuborish</button>
                                    </div>
                                </main>
                            </Dialog.Panel>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </div>
    );
};

export default ProductReportModal;
