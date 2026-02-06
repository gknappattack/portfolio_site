"use client";

import { useState } from 'react';
import NavBar from '@/components/navbar';
import Cover from "@/components/cover"
import TabPage from '@/components/tabpage';

export default function Home() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="relative flex min-h-screen flex-col gap-16 overflow-y-auto bg-[#131b23] sm:gap-48">
      <NavBar setActiveTab={setActiveTab} />
      <div className="flex flex-col gap-12 sm:gap-20">
        <Cover />
        <div id="tab-page">
          <TabPage activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </div>
  );
}
