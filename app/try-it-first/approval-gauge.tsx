import { BsFillLightningChargeFill } from "react-icons/bs";

interface GaugeProps {
    value: number;
}

export default function ApprovalGauge({ value }: GaugeProps) {
    const percentage = Math.max(0, Math.min(1, value));

    const radius = 100;
    const circumference = Math.PI * radius;
    const offset = circumference * (1 - percentage);

    return (
        <div className="flex flex-col items-center gap-3">
            <h1 className="text-[20px] font-semibold">
                Likely to be approved:{" "}
                <span className="text-blue-600">High</span>
            </h1>

            <div className="relative">
                <svg width="240" height="140" viewBox="0 0 240 140">
                    
                    <path
                        d="M 20 120 A 100 100 0 0 1 220 120"
                        fill="none"
                        stroke="#bfdbfe"
                        strokeWidth="20"
                        strokeLinecap="round"
                    />

                    <path
                        d="M 20 120 A 100 100 0 0 1 220 120"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="20"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        style={{
                            transition: "stroke-dashoffset 0.6s ease"
                        }}
                    />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-end pb-4">
                    <BsFillLightningChargeFill className="w-5 h-5 fill-purple-800" />
                    <p className="text-[28px] font-semibold">
                        {(percentage * 100).toFixed(1)}%
                    </p>
                </div>
            </div>
        </div>
    );
}