export default function TabPage() {
    return (
      <div className="p-20 justify-around">
        <div className="grid grid-cols-3 gap-5">
          <button className="text-white p-4 rounded bg-indigo-500 shadow-md">
            Projects
          </button>
          <button className="p-4 rounded bg-white text-indigo-500 shadow-md">
            Academic Work
          </button>
          <button className="p-4 rounded bg-white text-indigo-500 shadow-md">
            About Me
          </button>
        </div>
        <div className="shadow-xl border border-gray-100 font-light p-8 rounded text-gray-500 bg-white mt-6">
          Raw denim you probably havent heard of them jean shorts Austin.
          Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
          cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
          butcher retro keffiyeh dreamcatcher synth.
        </div>
      </div>
    );
}