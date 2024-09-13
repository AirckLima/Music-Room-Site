import Image from "next/image";

export default function Home() {
  return (
    <main className="relative grid grid-cols-1 min-h-screen pt-16  ">
      {/* <h2 className="text-7xl"> text </h2> */ }

      <div className="grid grid-cols-1 justify-center gap-3 h-full ">

        <div className=" flex flex-col justify-end ">

          <div className="relative">
            <img src={ "https://wallpaperswide.com/download/music_18-wallpaper-2048x2048.jpg" } className=" " />
            <div className="absolute top-0 h-full w-full from-transparent bg-gradient-to-b to-blue-500 ">
            </div>
          </div>
          <p className="text-center text-balance text-5xl text-slate-800 dark:text-slate-50  whitespace-pre-line z-50 ">
            Here you can <span className="text-indigo-700 dark:text-blue-500 uppercase text-4xl">organize</span> your <span className="text-rose-500 dark:text-emerald-500 uppercase text-4xl">passion</span> for music
          </p>
        </div>

      </div>

    </main>
  );
}
