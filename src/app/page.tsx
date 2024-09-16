import Image from "next/image";
import { ImageUp } from "lucide-react";

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-5 min-h-screen mt-[10vh] px-3">
      {/* <h2 className="text-7xl"> text </h2> */ }

      { /* hero card */ }
      <section className="flex flex-col justify-center h-fit rounded-xl overflow-clip group">

        <div className="relative ">
          <img src={ "https://wallpaperswide.com/download/music_18-wallpaper-2048x2048.jpg" } className=" transition duration-75 delay-200 group-hover:blur-[1px] " />
          <div className="flex justify-center absolute top-0 h-full w-full text-center text-balance text-4xl text-slate-800 dark:text-slate-50 from-slate-200 from-30% bg-gradient-to-t via-30%  to-transparent  whitespace-pre-line  ">
            <p className="relative bottom-[5%] w-[80%]  content-end">
              Here you can <span className="text-indigo-700 dark:text-blue-500 uppercase text-3xl">organize</span> your <span className="text-rose-500 dark:text-emerald-500 uppercase text-4xl">passion</span> for music
            </p>
          </div>
        </div>

      </section>

      { /* guide cards */ }
      <section className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-3 h-fit group">
        <div className="flex flex-col justify-start items-center p-2 space-y-3 bg-slate-400 rounded-lg">

          <div className=" rounded-full bg-slate-500 ">
            <ImageUp className="size-9 m-5 stroke-slate-200" />
          </div>
          <h3 className="text-2xl text-center ">
            Card Title
          </h3>
          <p className=" h-full content-center mx-5 text-center text-balance">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores est quo quibusdam doloremque porro ea nostrum dolor, molestias voluptates? Possimus doloribus sequi ipsa, ullam dignissimos ea hic veritatis reiciendis id?</p>
        </div>

        <div className="flex flex-col justify-start items-center p-2 space-y-3 bg-slate-400 rounded-lg">

          <div className=" rounded-full bg-slate-500 ">
            <ImageUp className="size-9 m-5 stroke-slate-200" />
          </div>
          <h3 className="text-2xl text-center ">
            Card Title
          </h3>
          <p className=" h-full content-center mx-5 text-center text-balance"> Maiores est quo quibusdam doloremque porro ea nostrum dolor, molestias voluptates? Possimus doloribus sequi ipsa, ullam dignissimos ea hic veritatis reiciendis id?</p>
        </div>

        <div className="flex flex-col justify-start items-center p-2 space-y-3 bg-slate-400 rounded-lg">

          <div className=" rounded-full bg-slate-500 ">
            <ImageUp className="size-9 m-5 stroke-slate-200" />
          </div>
          <h3 className="text-2xl text-center ">
            Card Title
          </h3>
          <p className=" h-full content-center mx-5 text-center text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates mollitia deleniti aut, dolores itaque quisquam praesentium dolor hic suscipit, fugit quae illo.</p>
        </div>

      </section>

      <section className="flex flex-col items-center">
        <div className="h-[80vh] w-[80%] rounded-md bg-blue-200">

        </div>
      </section>

    </main>
  );
}
