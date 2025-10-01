export default function NavBar() {
    return (
<nav className="sticky bg-[#E9F1F7] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href="#" className="rounded-md px-3 py-2 text-lg font-medium text-black hover:bg-[#131b23] hover:text-white">Projects</a>
            <a href="#" className="rounded-md px-3 py-2 text-lg font-medium text-black hover:bg-[#131b23] hover:text-white">Academic Works</a>
            <a href="#" className="rounded-md px-3 py-2 text-lg font-medium text-black hover:bg-[#131b23] hover:text-white">About Me</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>


    )
}