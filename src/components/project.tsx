interface ProjectProps {
    title: string
    icon: string,
    description: string,
    link: string
}

export default function Project({title, icon, description,link}:ProjectProps) {

    return (
    
        <div className="p-4 m-4 bg-[#131b23] text-[#e9f1f7] rounded-md inline-block">
            <a href={link} target="_blank">
            <div className="flex gap-5">
                <div className="relative flex items-center">
                    {icon}
                </div>
                <div className="flex flex-col w-full h-full items-center">
                    <div className="text-center">
                        <h2><b><u>{title}</u></b></h2>
                    </div>
                    <div className="justify-start mt-2">
                        <h3>{description}</h3>
                    </div>
                </div>
            </div>
            </a>
        </div>
        

    )
}