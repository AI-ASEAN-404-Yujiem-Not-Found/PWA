'use client'

import React from "react";
import useIsMobile from "../hook/isMobile";
import DesktopNoPreview from "../components/desktop-no-preview";
import BottomNavigation from "../components/bottom-navigation";

export default function ScreenLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  if (!isMobile) return <DesktopNoPreview />;

  return (
    <div className="w-full h-screen overflow-y-scroll hide-scrollbar">

      <div className="w-full pb-10 bg-[#FEFEFF]">
        {children}
      </div>

      {/* bottom navigation */}
      <div className="w-full fixed bottom-0 bg-white">
        <BottomNavigation />
      </div>
    </div>
  );
}
