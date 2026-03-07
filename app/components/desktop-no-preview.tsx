import TypingEffectCommand from "./TypingEffectCommand";

export default function DesktopNoPreview() {
  return (
    <div className="w-full min-h-screen hidden md:flex justify-center items-center">
      <div className="h-full w-full px-8 flex flex-col md:flex-row md:justify-center md:items-center gap-10">
        <div className="w-[60%] h-[85vh] bg-red-500">
          {/* place your device here */}
        </div>
        <div className="w-[40%] h-[85vh] space-y-5">
          <div className="w-full h-[75vh] bg-black overflow-auto hide-scrollbar rounded-md">
            {/* simulate how data flowed here */}
            <div className="p-10 min-h-screen space-y-2">
              <TypingEffectCommand
                text="Laborum laboris reprehenderit ex eu ullamco velit anim culpa ad esse."
                speed={12}
              />
            </div>
          </div>
          <div className="w-full h-[5vh]">
            <button
              className="text-white p-2 rounded-md bg-blue-600 w-32 cursor-pointer hover:bg-blue-500"
            >
              Path
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
