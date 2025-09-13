export default function Cover() {
    return (
      <div className="mx-auto w-full max-w-3xl gap-y-2">
        <div className=" flex justify-start gap-x-10">
          <div>
            <span className="relative flex shrink-0 overflow-hidden w-[200px] h-[300px] rounded-[24px]">
              <img
                className="aspect-square h-full w-full"
                alt="Gregory Knapp headshot"
                src="./headshot.jpg"
              />
            </span>
          </div>
          <div className="pt-10 flex flex-col gap-y-4 text-center">
            <div className="flex">
              <span className="inline-block text-6xl font-bold">
                Gregory Knapp
              </span>
            </div>
            <div className="flex">
                <p className="inline-block text-2xl w-[100%]">
                📊 Data Science Masters Student 🎓
              </p>
            </div>
            <div className="flex">
                <p className="inline-block text-2xl w-[100%]">
                 🏃🏻 Distance Runner in Training 💨
              </p>
            </div>
            <div className="flex">
                <p className="inline-block text-2xl w-[100%]">
                👨🏻‍💻 Problem solver with code 💻
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}