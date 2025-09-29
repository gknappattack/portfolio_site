"use client";

import { useState } from "react";

export default function TabPage() {
    const [activeTab, setActiveTab] = useState("tab1")

    const tabs = [
      {id: "tab1", label:"Projects"},
      {id: "tab2", label:"Academic Work"},
      {id: "tab3", label:"About Me"}
    ];

    const tabContent = {
      tab1: (
        <div>
          <h2 className="mb-4 text-2xl font-bold">Projects Tab</h2>
        </div>
      ),
      tab2: (
        <div>
          <h2 className="mb-4 text-2xl font-bold">Academic Work Tab</h2>
        </div>
      ),
      tab3: (
        <div>
          <h2 className="mb-4 text-2xl font-bold">About Me Tab</h2>
        </div>
      )
    };


    return (
      <div className="p-20 justify-around">
        <div className="grid grid-cols-3 gap-5">
          {tabs.map((tab) => (
            <button key={tab.id}
            className={`px-4 py-2 font-semibold ${
              activeTab == tab.id ? "text-white p-4 rounded bg-indigo-500 shadow-md"
              : "p-4 rounded bg-white text-indigo-500 shadow-md"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div>{tabContent[activeTab as keyof typeof tabContent]}</div>

      </div>
    );
}