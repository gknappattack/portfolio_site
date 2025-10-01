"use client";

import { useState } from "react";
import Project from "./project";

export default function TabPage() {
    const [activeTab, setActiveTab] = useState("tab1")

    const tabs = [
      {id: "tab1", label:"Projects"},
      {id: "tab2", label:"Academic Work"},
      {id: "tab3", label:"About Me"}
    ];

    const tabContent = {
      tab1: (
        <div className="grid grid-cols-2 gap-x-5 p-5">
          <Project title="Project 1" icon="😊"/>
          <Project title="Project 2" icon="❤️"/>
          <Project title="Project 3" icon="🏃🏻"/>
        </div>
      ),
      tab2: (
        <div className="grid grid-cols-2 gap-x-5 p-5">
          <Project title="Project 1" icon="😊"/>
          <Project title="Project 2" icon="❤️"/>
          <Project title="Project 3" icon="🏃🏻"/>
        </div>
      ),
      tab3: (
        <div className="grid grid-cols-2 gap-x-5 p-5">
          <Project title="Project 1" icon="😊"/>
          <Project title="Project 2" icon="❤️"/>
          <Project title="Project 3" icon="🏃🏻"/>
        </div>
      )
    };


    return (
      <div className="justify-around bg-[#e9f1f7] mx-3 rounded-2xl">
        <div className="grid grid-cols-3 gap-5 p-5 mt-3">
          {tabs.map((tab) => (
            <button key={tab.id}
            className={`px-4 py-4 font-semibold shadow-s shadow-black ${
              activeTab == tab.id ? "text-white p-6 rounded bg-[#131b23] shadow-md"
              : "p-4 rounded bg-white text-[#131b23] shadow-md"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div>
          {tabContent[activeTab as keyof typeof tabContent]}
        </div>

      </div>
    );
}