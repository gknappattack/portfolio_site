interface ProjectProps {
    title: string
    icon: string,
    description: string | string[],
    link: string
}

export default function Project({title, icon, description,link}:ProjectProps) {

    const hasLink = link && link.trim() !== "";

    const content = (
        <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:gap-5">
            <div className="relative flex items-center justify-center text-2xl sm:justify-start">
                {icon}
            </div>
            <div className="flex h-full w-full min-w-0 flex-col items-center sm:items-start">
                <div className="break-words text-center sm:text-left">
                    <h2 className="text-lg font-semibold sm:text-xl">{hasLink ? <u>{title}</u> : title}</h2>
                </div>
                <div className="mt-2 break-words text-center sm:text-left">
                    {Array.isArray(description) ? (
                        <ul className="list-disc list-outside ml-4 text-sm sm:text-base">
                            {description.map((item, index) => (
                                <li key={index} className="mb-1">{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <h3 className="text-sm sm:text-base">{description}</h3>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full rounded-md bg-[#131b23] p-4 text-[#e9f1f7]">
            {hasLink ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {content}
                </a>
            ) : (
                content
            )}
        </div>
    )
}
