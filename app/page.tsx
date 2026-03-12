import Image from "next/image";
import Link from "next/link";

function SplashPage() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#FEFEFF] px-10">
      <div className="w-full">
        <div className="w-full flex justify-center items-center pb-7">
          <Image alt="image splash screen" src={'/icon-image-ok-large.png'} width={268} height={273} />
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-2 text-center">
          <p className="text-[#090A0B] text-[16px]">MAHESA</p>
          <h1 className="text-[24px] font-bold">Turn Your Everyday Skills into Real Opportunities</h1>
          <h2 className="text-[#090A0B] text-[14px]">Discovers opportunities that match your skills and experience</h2>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-3 text-center pt-15.75">
          <button className="p-3 w-full max-w-100 bg-[#004868] text-white rounded-md">
            <Link href={"/tell-your-need"}>GET STARTED</Link>
          </button>
          <p className="text-[14px]">I ALREADY HAVE AN ACCOUNT</p>
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
