"use client";

import { useState } from "react";
import Project from "./project";

export default function TabPage() {
    const [activeTab, setActiveTab] = useState("tab1")

    const tabs = [
      {id: "tab1", label:"Projects"},
      {id: "tab2", label:"Academic Publications"},
      {id: "tab3", label:"About Me"}
    ];

    const tabContent = {
      tab1: (
        <div className="flex flex-col gap-x-5 p-4">
          <Project
          title="DRAGN-Town Quests"
          icon="🐉"
          description="Code associated with Personalized Quest and Dialogue Generaiton publication from the Computer-Human Interaction 2023 Conference."
          link="https://github.com/gknappattack/DRAGN-Town-Quests"/>
          <Project
          title="Data Science Job Market Analysis"
          icon="🧑‍💻"
          description="Contributions made to extracurricular data science job market research project led by Professor Tom Gardos of Boston University"
          link="https://github.com/trgardos/data-science-job-market-analysis"/>
          <Project
          title="Virtual Bookshelf Prototype"
          icon="📚"
          description="Proof of concept of a Virtual Bookshelf webpage that was presented at tha American Library Association conference in July 2022."
          link="https://github.com/gknappattack/ALA2022Bookshelf"/>
          <Project
          title="TBX Splitter"
          icon="💻"
          description="Python application with GUI for splitting XML or TBX (proprietary file type used in Computer Assisted Translation (CAT) software) based on input parameters."
          link="https://github.com/gknappattack/TBXSplitter"/>
        </div>
      ),
      tab2: (
        <div className="flex flex-col gap-x-5 p-4">
          <Project
          title="Personalized Quest and Dialogue Generation in Role-Playing Games: A Knowledge Graph and Language Model-based Approach"
          icon="🐉"
          description="Paper published and presented at the April 2023 Computer-Human Interaction (CHI) conference in Hamburg, Germany."
          link="https://dragn.ai/wp-content/uploads/2023/03/Personalized_Quest_and_Dialogue_Generation_in_Role_Playing_Games.pdf"/>
          <Project
          title="Poverty Among Utah Women: A 2022 Update"
          icon="💰"
          description="Co-Author credit on publication by the Utah Women & Leadership Project about poverty statistics in 2022 for Utah"
          link="https://www.usu.edu/uwlp/files/snapshot/33.pdf"/>
          <Project
          title="Utah Gender Wage Gap: A 2021 Update"
          icon="🙎‍♀️"
          description="Acknowledgement credit for help provided researching and compiling data for this publication"
          link="https://www.usu.edu/uwlp/files/snapshot/31.pdf"/>
        </div>
      ),
      tab3: (
        <div className="flex flex-col gap-x-5 p-4">
          <Project
          title="Coming soon!"
          icon="😊"
          description="Will be updated soon with information about me! For now, click here to view my full GitHub!"
          link="https://github.com/gknappattack"/>
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
        <div className="flex flex-col w-full h-full">
          {tabContent[activeTab as keyof typeof tabContent]}
        </div>

      </div>
    );
}