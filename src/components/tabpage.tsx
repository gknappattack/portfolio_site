"use client";

import Project from "./project";

interface TabPageProps {
    activeTab: string;
    setActiveTab: (tabId: string) => void;
}

export default function TabPage({ activeTab, setActiveTab }: TabPageProps) {

    const tabs = [
        {id: "tab1", label: "School and Work History"},
        {id: "tab2", label: "Projects"},
        {id: "tab3", label: "Academic Publications"},
        {id: "tab4", label: "About Me"}
    ];

    const tabContent = {
        tab1: (
            <div className="flex flex-col gap-5 p-4">
                <Project
                    title="Marathon Sports (Part-time: 2025 - Present)"
                    icon="🏃‍♂️"
                    description={[
                        "Sales associate at specialized running footwear store while in graduate school.",
                        "Use knowledge of running technology and bio-mechanics to recommend appropriate footwear and related products to customers.",
                        "Manage high-customer volume in a relaxed manner while in a premier location at the Boston Marathon finish line.",
                        "Participate in group runs and training programs to foster a positive running community in the area."
                    ]}
                    link="https://www.marathonsports.com/locations/boston/"/>
                <Project
                    title="Masters in Data Science (2025 - Present)"
                    icon="📚"
                    description={[
                        "Masters in Data Science student at Boston University. Expected graduation May 2026.",
                        "Coursework includes: data science tools and methods, classical statistical methods, cryptography, AI Ethics, plus " +
                        "additional chosen elective courses in electives in marketing analytics and supply chain analytics through the Questrom Business School."
                    ]}
                    link="https://www.bu.edu/cds-faculty/programs-admissions/ms-data-science/"/>
                <Project
                    title="Etogy (2023 - 2025)"
                    icon="💸"
                    description={[
                        "Software Engineer - Database and internal use AI tool development for payment processing system company.",
                        "Designed and implemented database schemas for sending and receiving ISO 8583 messages from all major card brands.",
                        "Participated actively in payment processing certification efforts with Visa, Mastercard, and Discover."
                    ]}
                    link="https://www.etogy.com/"/>
                <Project
                    title="DRAGN Lab Research Assistant (2022 - 2023)"
                    icon="🐲"
                    description={[
                        "Helped with LLM Application Research as part of the Brigham Young University DRAGN Lab.",
                        "Lab work culminated with a publication and presentation at the 2023 Computer-Human Interaction (CHI) conference in Hamburg, Germany."
                    ]}
                    link="https://dragn.ai/"/>
                <Project
                    title="Harold B. Lee Library Research Assistant (2020 - 2023)"
                    icon="📕"
                    description={[
                        "Assisted Psychology Librarian Emily Darowski with grant-funded research projects and self-guided machine learning projects for application within the library.",
                        "Work culimnated with presentation of a Virtual ML-powered Bookshelf at the 2022 American Library Association (ALA) conference in July 2022 in Washington, D.C."
                    ]}
                    link="https://lib.byu.edu/"/>

                <Project
                    title="BS in Computer Science (2016, 2019 - 2023)"
                    icon="💻"
                    description={["Bachelor of Science Degree in Computer Science with an emphasis in Data Science",
                    "3.93 overall GPA",
                    "Course work included: data structures, algorithms, operating systems, databases, software engineering tools, " +
                    "large language models, deep learning, machine learning, natural language processing, software testing, " +
                    "Python, C++, Java"]}
                    link="https://cs.byu.edu/"/>

                <Project
                    title="LDS Church Mission in Tokyo, Japan (2017 - 2019)"
                    icon="🎌"
                    description={[
                        "2-year break from college to serve as a missionary for the LDS Church in Tokyo, Japan, learning Japanese, leadership skills, and social skills."
                    ]}
                    link="https://jp.churchofjesuschrist.org/locations/missions?lang=jpn"/>
            </div>
        ),
        tab2: (
            <div className="flex flex-col gap-5 p-4">
                <Project
                    title="Sunny Accounting Micro-accounting web application"
                    icon="💵"
                    description={[
                        "Micro-accounting web application designed for Spanish speaking small businesses in Utah who primarily " +
                        "process transactions in cash that want a more streamlined experience than Quickbooks. Set for beta release in Feb 2026.",
                        "Allows users to record transactions processed, create a profit-loss statement, do yearly " +
                        "reconciliation, and create and send invoices to clients.",
                        "Learned free-lancing skills, PHP (Filament and Laravel), and web app hosting/deployment/maintenance " +
                        "with Heroku.",
                        "Code is private and property of Shameck Arroyo and Sunny Consulting.",
                    ]}
                    link=""/>
                <Project
                    title="Act on Mass Roll Call Voter Transparency Dashboard Project"
                    icon="🏛"
                    description={[
                        "Scraped, parsed, cleaned, and analyzed data from the Massachusetts state legislature website and " +
                        "PDF documents for roll call votes taken between 2002 and 2025 on behalf of local watchdog organization" +
                        "Act on Mass.",
                        "Created a Looker Studio dashboard (powered by Google BigQuery) that visualizes roll call votes " +
                        "allowing regular users to view voting trends and tendencies of their representatives.",
                        "Click to view our poster from Boston University SPARK Demo Day's presentation of group work on " +
                        "MA roll call vote dashboard (actual code and final dataset is private and has been given to Act on Mass)",
                    ]}
                    link="https://docs.google.com/presentation/d/1JpXzSUOVsZEY48pFNW5QUipjkDgvueRD-fvmI0o_-tM/edit?usp=sharing"/>
                <Project
                    title="DRAGN-Town Quests"
                    icon="🐉"
                    description={[
                        "Code associated with Personalized Quest and Dialogue Generation publication from the " +
                        "Computer-Human Interaction 2023 Conference.",
                        "Personal contributions focused on interfacing with the Neo4J graph database and pulling nodes " +
                        "and connections that were most relevant to the conversation based on sematic similarity (cosine similarity score)."
                    ]}
                    link="https://github.com/gknappattack/DRAGN-Town-Quests"/>
                <Project
                    title="Virtual Bookshelf Prototype"
                    icon="📚"
                    description={[
                        "Proof of concept of a Virtual Bookshelf webpage made during time working at the BYU " +
                        "Harold B. Lee Library as a research assistant.",
                        "Presented at the American Library Association conference in July 2022 during the poster session. " +
                        "Link to the poster itself can be found in the repository README.",
                    ]}
                    link="https://github.com/gknappattack/ALA2022Bookshelf"/>
                <Project
                    title="TBX Splitter"
                    icon="💻"
                    description={["Python application with GUI for splitting XML or TBX (proprietary file type used in " +
                    "Computer Assisted Translation (CAT) software) based on input parameters."]}
                    link="https://github.com/gknappattack/TBXSplitter"/>
            </div>
        ),
        tab3: (
            <div className="flex flex-col gap-5 p-4">
                <Project
                    title="Personalized Quest and Dialogue Generation in Role-Playing Games: A Knowledge Graph and Language Model-based Approach"
                    icon="🐉"
                    description={["Paper published and presented at the April 2023 Computer-Human Interaction (CHI) conference " +
                    "in Hamburg, Germany."]}
                    link="https://dl.acm.org/doi/pdf/10.1145/3544548.3581441"/>
                <Project
                    title="Poverty Among Utah Women: A 2022 Update"
                    icon="💰"
                    description={["Co-Author credit on publication by the Utah Women & Leadership Project about poverty " +
                    "statistics in 2022 for Utah"]}
                    link="https://www.usu.edu/uwlp/files/snapshot/33.pdf"/>
                <Project
                    title="Utah Gender Wage Gap: A 2021 Update"
                    icon="🙎‍♀️"
                    description={["Acknowledgement credit for help provided researching and compiling data for this " +
                    "publication"]}
                    link="https://www.usu.edu/uwlp/files/snapshot/31.pdf"/>
            </div>
        ),
        tab4: (
            <div className="flex flex-col gap-5 p-4">
                <Project
                    title="GitHub"
                    icon="💻"
                    description={[
                        "Public profile with code and projects (personal and school related from BYU and Boston University)."
                    ]}
                    link="https://github.com/gknappattack"/>
                <Project
                    title="Strava"
                    icon="🏃‍♂️"
                    description={[
                        "Check out my Strava with links to all my recent runs and workouts.",
                        "Next race will be the 2026 Kyoto Marathon in Kyoto, Japan on February 15, 2026, followed by the " +
                        "Utah Valley marathon in early June."
                    ]}
                    link="https://www.strava.com/athletes/152953032"/>
                <Project
                    title="Final Fantasy XIV Tomestone Character Profile"
                    icon="🧙‍♂️"
                    description={[
                        "Link to my main character profile for Final Fantasy 14.",
                        "Currently, I am the raid leader for a team called Makna Forest, with consistent top 150 world placements for Savage/Ultimate raids during the current Dawntrail expansion."
                    ]}
                    link="https://tomestone.gg/character/36335021/qzali-jihn"/>
                <Project
                    title="JLPT N1"
                    icon="‍🎌️"
                    description={[
                        "JLPT N1 certified as of January 2026! N1 is the highest level offered in Japanese language proficiency testing in the U.S.",
                        "9-years of Japanese speaking, reading and writing experience.",
                        "Light freelance work in English to Japanese website translation."
                    ]}
                    link="https://www.jlpt.jp/e/about/levelsummary.html"/>

                <Project
                    title="Euphonium Performer"
                    icon="🎵"
                    description={[
                        "Started band on trumpet then got converted to euphonium in 7th grade",
                        "Played with the California All-Southern/All-State bands during high school",
                        "Played all 5-years in the BYU Wind Symphony (the top wind ensemble in the school), including a 17-day tour" +
                        "in Spain and Portugal to finish my college performance career."
                    ]}
                    link="https://bands.byu.edu/photos/2023-spain-portugal"/>
            </div>
        )
    };


    return (
        <div className="justify-around bg-[#e9f1f7] mx-3 rounded-2xl sm:mx-6">
            <div className="grid grid-cols-1 gap-3 p-4 mt-3 sm:grid-cols-3 sm:gap-5 sm:p-5">
                {tabs.map((tab) => (
                    <button key={tab.id}
                            className={`flex min-h-12 items-center justify-center break-words rounded-md px-3 py-3 text-center text-sm font-semibold leading-snug shadow-md transition-colors sm:min-h-14 sm:px-4 sm:py-4 sm:text-base ${
                                activeTab == tab.id ? "bg-[#131b23] text-white"
                                    : "bg-white text-[#131b23]"
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
