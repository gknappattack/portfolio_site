interface ProjectProps {
    title: string
    icon: string
}

export default function Project({title, icon}:ProjectProps) {

    return (
      <div className="p-4 m-4 bg-indigo-400 rounded-md">
        <div className="grid grid-cols-2 gap-3">
            <div>{icon}</div>
            <div>{title}</div>
        </div>
    </div>
    )
}