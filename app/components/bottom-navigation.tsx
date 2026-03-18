export default function BottomNavigation() {
    return (
        <div className="w-full xl:w-[20%] xl:h-screen fixed bottom-0 xl:left-0 z-50">
            <div className="w-full xl:hidden px-5 py-2 grid grid-cols-5 gap-8 bg-white rounded-t-md border-t border-gray-300">
                <div className="w-full aspect-square bg-green-500"></div>
                <div className="w-full aspect-square bg-green-500"></div>
                <div className="w-full aspect-square bg-green-500"></div>
                <div className="w-full aspect-square bg-green-500"></div>
                <div className="w-full aspect-square bg-green-500"></div>
            </div>
            <div className="w-full h-full rounded-r-xl border-r border-gray-300 bg-white hidden xl:flex flex-col p-2 gap-8">
                <div className="text-white font-semibold text-sm text-center bg-[#004868] p-2 rounded-md">MAHESA AI</div>
                <div className="w-full flex flex-col gap-2">
                    <div className="w-full p-2 min-h-10 bg-white hover:border-[#00496861] duration-200 cursor-pointer rounded-md border-[0.1px] border-gray-100"></div>
                    <div className="w-full p-2 min-h-10 bg-white hover:border-[#00496861] duration-200 cursor-pointer rounded-md border-[0.1px] border-gray-100"></div>
                    <div className="w-full p-2 min-h-10 bg-white hover:border-[#00496861] duration-200 cursor-pointer rounded-md border-[0.1px] border-gray-100"></div>
                    <div className="w-full p-2 min-h-10 bg-white hover:border-[#00496861] duration-200 cursor-pointer rounded-md border-[0.1px] border-gray-100"></div>
                    <div className="w-full p-2 min-h-10 bg-white hover:border-[#00496861] duration-200 cursor-pointer rounded-md border-[0.1px] border-gray-100"></div>
                </div>
            </div>
        </div>
    )
}
