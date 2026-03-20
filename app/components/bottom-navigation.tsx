import { IoHomeOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import Link from "next/link";

export default function BottomNavigation() {
    return (
        <div className="w-full xl:w-[20%] xl:h-screen fixed bottom-0 xl:left-0 z-50">
            <div className="w-full xl:hidden px-5 py-2 grid grid-cols-5 gap-8 bg-white rounded-t-md border-t border-gray-300">
                <div className="w-full aspect-square">
                    <div className="w-full rounded-md flex flex-col justify-center items-center gap-2">
                        <IoHomeOutline className="w-4.5 h-4.5" />
                        <Link href={"/offline-stt"} ><p className="text-[12px]">Home</p></Link>
                    </div>
                </div>
                <div className="w-full aspect-square">
                    <div className="w-full rounded-md flex flex-col justify-center items-center gap-2">
                        <IoMdInformationCircleOutline className="w-4.5 h-4.5" />
                        <Link href={"/opportunity"} ><p className="text-[12px]">Opportunity</p></Link>
                    </div>
                </div>
                <div className="w-full aspect-square">
                    <div className="w-full rounded-md flex flex-col justify-center items-center gap-2">
                        <MdOutlineDocumentScanner className="w-4.5 h-4.5" />
                        <Link href={"/education"} ><p className="text-[12px]">Education</p></Link>
                    </div>
                </div>
                <div className="w-full aspect-square">
                    <div className="w-full rounded-md flex flex-col justify-center items-center gap-2">
                        <FiEdit className="w-4.5 h-4.5" />
                        <Link href={"/recap"}><p className="text-[12px]">Recap</p></Link>
                    </div>
                </div>
                <div className="w-full aspect-square">
                    <div className="w-full rounded-md flex flex-col justify-center items-center gap-2">
                        <FaRegUser className="w-4.5 h-4.5" />
                        <Link href={"/profile"}><p className="text-[12px]">Profile</p></Link>
                    </div>
                </div>
            </div>
            <div className="w-full h-full rounded-r-xl border-r border-gray-300 bg-white hidden xl:flex flex-col p-2 gap-8">
                <div className="text-white font-semibold text-sm text-center bg-[#004868] p-2 rounded-md">MAHESA AI</div>
                <div className="w-full flex flex-col gap-2">
                    <div className="w-full p-2 min-h-10 bg-white hover:border-[#00496861] duration-200 cursor-pointer rounded-md border-[0.1px] border-gray-100">
                        <div className="w-full rounded-md flex flex-row justify-start items-center gap-2">
                            <IoHomeOutline className="w-4.5 h-4.5" />
                            <Link href={"/offline-stt"} ><p className="text-[12px]">Home</p></Link>
                        </div>
                    </div>
                    <div className="w-full p-2 min-h-10 bg-white hover:border-[#00496861] duration-200 cursor-pointer rounded-md border-[0.1px] border-gray-100">
                        <div className="w-full rounded-md flex flex-row justify-start items-center gap-2">
                            <IoMdInformationCircleOutline className="w-4.5 h-4.5" />
                            <Link href={"/opportunity"} ><p className="text-[12px]">Opportunity</p></Link>
                        </div>
                    </div>
                    <div className="w-full p-2 min-h-10 bg-white hover:border-[#00496861] duration-200 cursor-pointer rounded-md border-[0.1px] border-gray-100">
                        <div className="w-full rounded-md flex flex-row justify-start items-center gap-2">
                            <MdOutlineDocumentScanner className="w-4.5 h-4.5" />
                            <Link href={"/education"} ><p className="text-[12px]">Education</p></Link>
                        </div>
                    </div>
                    <div className="w-full p-2 min-h-10 bg-white hover:border-[#00496861] duration-200 cursor-pointer rounded-md border-[0.1px] border-gray-100">
                        <div className="w-full rounded-md flex flex-row justify-start items-center gap-2">
                            <FiEdit className="w-4.5 h-4.5" />
                            <Link href={"/recap"}><p className="text-[12px]">Recap</p></Link>
                        </div>
                    </div>
                    <div className="w-full p-2 min-h-10 bg-white hover:border-[#00496861] duration-200 cursor-pointer rounded-md border-[0.1px] border-gray-100">
                        <div className="w-full rounded-md flex flex-row justify-start items-center gap-2">
                            <FaRegUser className="w-4.5 h-4.5" />
                            <Link href={"/profile"}><p className="text-[12px]">Profile</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


