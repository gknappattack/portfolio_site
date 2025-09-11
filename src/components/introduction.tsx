import Image from "next/image";

export default function Introduction() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Image
        src="./headshot.jpg"
        alt="Head shot of Gregory Knapp, standing in front of a white background"
        width={150}
        height={150}
      />
      <ol className="list-disc">
        <li>Data Science projects</li>
        <li>Web Dev Projects</li>
        <li>AI/ML Work</li>
      </ol>
      <div className="flex flex-row gap-8 py-5">
        <button
          type="button"
          className="text-white bg-[#C8B6FF] hover:bg-[#FFD6FF] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#C8B6FF] dark:hover:bg-[#FFD6FF] dark:focus:ring-blue-800"
        >
          Current Projects
        </button>
        <button
          type="button"
          className="text-white bg-[#C8B6FF] hover:bg-[#FFD6FF] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#C8B6FF] dark:hover:bg-[#FFD6FF] dark:focus:ring-blue-800"
        >
          Completed Projects
        </button>
      </div>
    </div>
  );
}
