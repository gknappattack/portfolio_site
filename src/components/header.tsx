

export default function Header() {
  return (
    <div className="p-4">
      <header className="py-4">
        <div className="mx-auto max-w-7xl bg-[#FFD6FF] px-4 py-3 sm:px-6 lg:px-8">
          <nav className="relative z-50 flex justify-between">
            <div className="flex items-center md:gap-x-12">
              <div className="hidden md:flex md:gap-x- font-normal">
                <a
                  className="inline-block px-2 py-1 text-sm text-black underline hover:underline-offset-2 hover:bg-[#C8B6FF] hover:rounded-full"
                  href="#features"
                >
                  Projects
                </a>
                <a
                  className="inline-block px-2 py-1 text-sm text-black underline hover:underline-offset-2 hover:bg-[#C8B6FF] hover:rounded-full"
                  href="#testimonials"
                >
                  Academic Work
                </a>
                <a
                  className="inline-block px-2 py-1 text-sm text-black underline hover:underline-offset-2 hover:bg-[#C8B6FF] hover:rounded-full"
                  href="#pricing"
                >
                  Blog
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
