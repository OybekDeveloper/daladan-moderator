import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  openComplaintModal } from "../../reducer/event";
import { close } from "../imgs";
const ComplaintModal = () => {
    const { openComplaint } = useSelector(state => state.event);
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(openComplaintModal())
    }
    const handleComplaint = () => {
        dispatch(openComplaintModal())
    }
    const imgContainerStyle = {
        scrollbarWidth: "thin", // For Firefox
        scrollbarColor: "transparent transparent", // For Firefox

        "&::-webkit-scrollbar": {
            display: "none"
        },
    };
    return (
        <div>
            <Transition show={openComplaint} as={Fragment}>
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
                                <main style={imgContainerStyle} className="w-full px-[80px] py-[64px]">
                                    <div onClick={handleClose} className="cursor-pointer flex justify-end">
                                        <img src={close} alt="close" />
                                    </div>
                                    <section>
                                        <h1 className="mb-[6px] text-[14px] font-[500] text-[#344054]">O’chirish haqida izoh</h1>

                                        <p className="text-[16px] font-[400] text-[#667085] rounded-[8px] p-[10px] border-[1px] border-solid border-[#D0D5DD]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to</p>
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

export default ComplaintModal;
