import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductModal, openComplaintModal } from "../../reducer/event";
import { close } from "../imgs";
import axios from "axios";
const ConfirmationModal = () => {
    const { product, productId } = useSelector((state) => state.event);
    const dispatch = useDispatch();
    const [products, setProducts] = useState();
    const handleClose = () => {
        dispatch(ProductModal());
    };
    const handleComplaint = () => {
        dispatch(ProductModal());
        dispatch(openComplaintModal());
    };
    const imgContainerStyle = {
        scrollbarWidth: "thin",
        scrollbarColor: "transparent transparent",
        "&::-webkit-scrollbar": {
            display: "none"
        },
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios({
                    method: "GET",
                    url: `https://avtowatt.uz/api/v1/products/get-by-id/${productId}`,
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                setProducts(response.data);
                console.log(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [productId]);
    return (
        <div>
            <Transition show={product} as={Fragment}>
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
                        <div className="fixed inset-0  flex justify-center items-center">
                            <Dialog.Panel className="relative h-[90%] w-[65%] bg-[#fff] shadow-modal">
                                <div
                                    onClick={handleClose}
                                    className="cursor-pointer bg-[#fff] pt-[20px] px-[80px] absolute w-full flex justify-end"
                                >
                                    <img src={close} alt="close" />
                                </div>
                                <main
                                    style={imgContainerStyle}
                                    className="mx-auto w-full pt-[40px] px-[80px] h-full whitespace-nowrap overflow-y-auto"
                                >
                                    <section className="flex justify-between mt-[28px]">
                                        <div className="w-[40%] flex flex-col justify-start items-start gap-[6px]">
                                            <label
                                                className="text-[14px] font-[500] text-[#344054]"
                                                htmlFor=""
                                            >
                                                Mahsulot nomi
                                            </label>
                                            <input
                                                className="w-full rounded-[8px] px-[14px] py-[10px] bg-[#FFF] border-[1px] border-solid border-[#D0D5DD]"
                                                type="text"
                                                placeholder={products?.name}
                                                disabled
                                            />
                                        </div>
                                        <div className="w-[40%] flex flex-col justify-start items-start gap-[6px]">
                                            <label
                                                className="text-[14px] font-[500] text-[#344054]"
                                                htmlFor=""
                                            >
                                                Kategoriya
                                            </label>
                                            <input
                                                className="w-full rounded-[8px] px-[14px] py-[10px] bg-[#FFF] border-[1px] border-solid border-[#D0D5DD]"
                                                type="text"
                                                placeholder={products?.category?.category?.name}
                                                disabled
                                            />
                                        </div>
                                    </section>
                                    <section className="w-full mt-[40px]">
                                        <h1>Mahsulot rasmlari</h1>
                                        <div
                                            style={imgContainerStyle}
                                            className="mt-[16px] img-container w-full whitespace-nowrap overflow-x-auto overflow-hidden"
                                        >
                                            {products?.imageList.map(item => (
                                                <img
                                                    className="mr-[34px] inline-flex rounded-[8px] w-[120px] h-[120px] object-cover"
                                                    src={item}
                                                    alt=""
                                                />
                                            ))}

                                        </div>
                                    </section>
                                    <section className="flex justify-between mt-[40px]">
                                        <div className="w-[40%] flex flex-col justify-start items-start gap-[6px]">
                                            <label
                                                className="text-[14px] font-[500] text-[#344054]"
                                                htmlFor=""
                                            >
                                                Narx
                                            </label>
                                            <input
                                                className="w-full rounded-[8px] px-[14px] py-[10px] bg-[#FFF] border-[1px] border-solid border-[#D0D5DD]"
                                                type="text"
                                                placeholder={`${products?.price} so’m`}
                                                disabled
                                            />
                                        </div>
                                        <div className="w-[40%] flex flex-col justify-start items-start gap-[6px]">
                                            <label
                                                className="text-[14px] font-[500] text-[#344054]"
                                                htmlFor=""
                                            >
                                                Miqdori
                                            </label>
                                            <input
                                                className="w-full rounded-[8px] px-[14px] py-[10px] bg-[#FFF] border-[1px] border-solid border-[#D0D5DD]"
                                                type="text"
                                                placeholder={`${products?.weight / 1000} tonna`}
                                                disabled
                                            />
                                        </div>
                                    </section>
                                    <div className="w-full flex flex-col justify-start items-start mt-[40px]">
                                        <label
                                            className="text-[14px] font-[500] text-[#344054]"
                                            htmlFor=""
                                        >
                                            Izoh
                                        </label>
                                        <textarea
                                            className="w-full h-[150px] rounded-[8px] px-[14px] py-[10px] bg-[#FFF] border-[1px] border-solid border-[#D0D5DD]"
                                            type="text"
                                            placeholder={products?.description}
                                            disabled
                                        />
                                    </div>
                                    <section className="flex justify-between mt-[40px]">
                                        <div className="w-[40%] flex flex-col justify-start items-start gap-[6px]">
                                            <label
                                                className="text-[14px] font-[500] text-[#344054]"
                                                htmlFor=""
                                            >
                                                Viloyat
                                            </label>
                                            <input
                                                className="w-full rounded-[8px] px-[14px] py-[10px] bg-[#FFF] border-[1px] border-solid border-[#D0D5DD]"
                                                type="text"
                                                placeholder={products?.region}
                                                disabled
                                            />
                                        </div>
                                        <div className="w-[40%] flex flex-col justify-start items-start gap-[6px]">
                                            <label
                                                className="text-[14px] font-[500] text-[#344054]"
                                                htmlFor=""
                                            >
                                                Tuman
                                            </label>
                                            <input
                                                className="w-full rounded-[8px] px-[14px] py-[10px] bg-[#FFF] border-[1px] border-solid border-[#D0D5DD]"
                                                type="text"
                                                placeholder={products?.district}
                                                disabled
                                            />
                                        </div>
                                    </section>
                                    <section className="flex justify-between mt-[20px]">
                                        <div className="w-[40%] flex flex-col justify-start items-start gap-[6px]">
                                            <label
                                                className="text-[14px] font-[500] text-[#344054]"
                                                htmlFor=""
                                            >
                                                Qishloq
                                            </label>
                                            <input
                                                className="w-full rounded-[8px] px-[14px] py-[10px] bg-[#FFF] border-[1px] border-solid border-[#D0D5DD]"
                                                type="text"
                                                placeholder={products?.address}
                                                disabled
                                            />
                                        </div>
                                        <div className="w-[40%] flex flex-col justify-start items-start gap-[6px]">
                                            <label
                                                className="text-[14px] font-[500] text-[#344054]"
                                                htmlFor=""
                                            >
                                                Aloqa uchun telefon raqam
                                            </label>
                                            <input
                                                className="w-full rounded-[8px] px-[14px] py-[10px] bg-[#FFF] border-[1px] border-solid border-[#D0D5DD]"
                                                type="text"
                                                placeholder={products?.phone}
                                                disabled
                                            />
                                        </div>
                                    </section>
                                    <div className="flex gap-[32px] justify-end items-center mt-[40px] mb-[22px]">
                                        <button
                                            onClick={handleComplaint}
                                            className="border-[1px] border-solid border-[#D0D5DD] rounded-[8px] px-[16px] py-[10px] w-[120px] text-[16px] font-[600]"
                                        >
                                            Shikoyat
                                        </button>
                                        <button className="bg-[#17B26A] rounded-[8px] px-[16px] py-[10px] w-[120px] text-[#FFF] text-[16px] font-[600]">
                                            Tasdiqlash
                                        </button>
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

export default ConfirmationModal;
