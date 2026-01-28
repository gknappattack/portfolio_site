export default function Cover() {
    return (
      <div className="mx-auto w-full max-w-4xl gap-y-2 px-4 text-[#e9f1f7] sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-10">
          <div className="flex justify-center">
            <span className="relative flex shrink-0 overflow-hidden rounded-[24px] w-40 h-52 sm:w-[200px] sm:h-[300px]">
              <img
                className="aspect-square h-full w-full"
                alt="Gregory Knapp headshot"
                src="./headshot.jpg"
              />
            </span>
          </div>
          <div className="flex flex-col gap-y-4 text-center sm:pt-10 sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <span className="inline-block text-4xl font-bold sm:text-6xl">
                Gregory Knapp
              </span>
            </div>
            <div className="flex justify-center sm:justify-start">
                <p className="inline-block w-full text-lg sm:text-2xl">
                    📊 Data Science Master&apos;s Student 🎓
              </p>
            </div>
            <div className="flex justify-center sm:justify-start">
                <p className="inline-block w-full text-lg sm:text-2xl">
                    🏃🏻 Distance Runner in Training 💨
              </p>
            </div>
            <div className="flex justify-center sm:justify-start">
                <p className="inline-block w-full text-lg sm:text-2xl">
                    🏻‍ Problem solver with code 💻
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
