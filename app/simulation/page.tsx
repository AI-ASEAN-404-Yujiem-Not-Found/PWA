export default function Page() {
    return (
        <div className="w-full min-h-screen hidden md:flex justify-center items-center">
            <div className="h-full w-full px-8 flex flex-col md:flex-row md:justify-center md:items-center gap-10">
                <div className="w-[60%] h-[85vh] bg-red-500">
                    {/* place your device here */}
                </div>
                <div className="w-[40%] h-[85vh] bg-red-500 overflow-auto thin-scrollbar">
                    {/* simulate how data flowed here */}
                </div>
            </div>
        </div>
    );
}
