import { BsFillLightningChargeFill } from "react-icons/bs";

interface GaugeProps {
    value: number;
}

export default function ApprovalGauge({ value }: GaugeProps) {
    const percentage = Math.max(0, Math.min(1, value));
    const width = percentage * 100;

    return (
        <div className='w-full flex flex-col justify-center items-center gap-3'>
            <h1 className='text-[20px] font-semibold'>Likely to be approved: <span className='text-blue-600'>High</span></h1>
            <div className="w-full flex justify-center items-center">
                <div className="relative w-[80vw] aspect-2/1 rounded-t-full overflow-hidden">

                    <div className="absolute inset-0 bg-blue-200 rounded-t-full" />

                    <div
                        className="absolute bottom-0 left-0 h-full bg-blue-500 rounded-t-full transition-all duration-500"
                        style={{ width: `${width}%` }}
                    />

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] aspect-2/1 bg-white rounded-t-full flex justify-center items-end">
                        <div className="w-full h-full px-[10%] flex flex-col justify-end items-center gap-3 pb-6">
                            <BsFillLightningChargeFill className="w-5 h-5 fill-purple-800" />
                            <p className="text-[32px] font-semibold">
                                {(percentage * 100).toFixed(1)}%
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}