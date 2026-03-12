import { IoHomeOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import Link from "next/link";

export default function BottomNavigation() {
  return (
    <div className="w-full h-full px-5 grid grid-cols-5 border border-gray-300 rounded-t-2xl gap-8 p-4">
      <div className="w-full rounded-md flex flex-col justify-center items-center gap-2">
        <IoHomeOutline className="w-4.5 h-4.5" />
        <Link href={"/tell-your-need"} ><p className="text-[12px]">Home</p></Link>
      </div>
      <div className="w-full rounded-md flex flex-col justify-center items-center gap-2">
        <IoMdInformationCircleOutline className="w-4.5 h-4.5" />
        <Link href={"/opportunity"} ><p className="text-[12px]">Opportunity</p></Link>
      </div>
      <div className="w-full rounded-md flex flex-col justify-center items-center gap-2">
        <MdOutlineDocumentScanner className="w-4.5 h-4.5" />
        <Link href={"/growth-center"} ><p className="text-[12px]">Education</p></Link>
      </div>
      <div className="w-full rounded-md flex flex-col justify-center items-center gap-2">
        <FiEdit className="w-4.5 h-4.5" />
        <Link href={"/doc-complation"}><p className="text-[12px]">Recap</p></Link>
      </div>
      <div className="w-full rounded-md flex flex-col justify-center items-center gap-2">
        <FaRegUser className="w-4.5 h-4.5" />
        <Link href={"/"}><p className="text-[12px]">Profile</p></Link>
      </div>
    </div>
  );
}
