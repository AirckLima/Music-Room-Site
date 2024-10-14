import Image from "next/image";
import { ChartLine, ChartNoAxesCombined, ImageUp, Library as LibraryIcon } from "lucide-react";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Library, LibraryContent, LibraryItem } from "@/components/Library";
import { fetchAlbum } from "@/utils/fetchAlbum";



export default async function Home() {


  const items = [ await fetchAlbum(1), 2];
  const noData = (
    <div className="col-span-full flex flex-col w-full min-h-[320px] text-center">
        No data
    </div>
);


  return (
      <main className="grid grid-cols-1 gap-5 auto-cols-min min-h-screen   my-4 ">

        {/* dashboard component */ }
        <section className="mx-3">
          <p className="text-4xl text-center mb-5">Hello { "<USER>" }!</p>

          <div className="flex flex-col items-center gap-5 text-xl bg-slate-300 p-3 rounded-lg">
            <p className="text-center -m-1">Here is your progress</p>

            <div className="grid grid-rows-2 auto-cols-fr justify-around gap-5 w-full">
              <div className="flex flex-col items-center first:col-span-full">
                <p className="text-5xl">XXXX</p>
                <p>albums</p>
              </div>
              <div className="flex flex-row justify-around items-end gap-7 text-3xl w-full">
                <div className="flex flex-col items-center justify-end basis-1/2 h-full ">
                  <p className="text-5xl">YYY</p>
                  <p className="text-xl">bands</p>
                </div>
                <div className="flex flex-col items-center justify-end  basis-1/2 h-full ">
                  <p className="text-5xl">Z</p>
                  <p className="text-xl">genres</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row place-items-center bg-slate-400  px-3 rounded-md">
              <Link href="/" className=" w-fit text-sm underline block m-2">more details</Link>
              <ChartNoAxesCombined className="size-5" />
            </div>
          </div>
        </section>


        {/* album stack component */ }
        <section className="bg-slate-50">
          <div className=" mx-3">

            <p className="text-2xl  mb-3">What to listen next:</p>

            <div className="">
              <Carousel className="" opts={ { dragFree: true } } >
                <CarouselContent className="gap-4">
                  <CarouselItem key={ 1 } className="basis-auto">
                    <a href="user/album" className="size-48 flex flex-col h-full">
                      <div className="size-48 bg-teal-600 rounded-md "></div>
                      <p className="text-xl line-clamp-3">Album title</p>
                    </a>
                  </CarouselItem>
                  <CarouselItem key={ 2 } className="basis-auto">
                    <a href="user/album" className="size-48 flex flex-col h-full">
                      <div className="size-48 bg-teal-600 rounded-md "></div>
                      <p className="text-xl line-clamp-3">Album title</p>
                    </a>
                  </CarouselItem>
                  <CarouselItem key={ 3 } className="basis-auto">
                    <div className="w-48 flex flex-col h-full">
                      <div className="size-48 bg-teal-600 rounded-md "></div>
                      <p className="text-xl line-clamp-3">Album title</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem key={ 4 } className="basis-auto">
                    <a href="user/album" className="size-48 flex flex-col h-full">
                      <div className="size-48 bg-teal-600 rounded-md "></div>
                      <p className="text-xl line-clamp-3">Album title</p>
                    </a>
                  </CarouselItem>
                  <CarouselItem key={ 5 } className="basis-auto">
                    <a href="user/album" className="size-48 flex flex-col h-full">
                      <div className="size-48 bg-teal-600 rounded-md "></div>
                      <p className="text-xl line-clamp-3">Album title</p>
                    </a>
                  </CarouselItem>
                  <CarouselItem key={ 6 } className="flex flex-row justify-center basis-full">
                    <div className="size-auto flex flex-col text-center justify-center items-center">
                      <Link href="/" className=" w-fit text-sm underline block p-5">
                        see more
                      </Link>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hidden lg:inline-flex" />
                <CarouselNext className="hidden lg:inline-flex" />
              </Carousel>
            </div>
          </div>
        </section>


        {/* library section */ }
        <section>
          <Library>
            <LibraryContent>
              {
                items.map((item) => <li className="list-none w-full" key={ item }><LibraryItem data={ item } /></li>)
              }
              <div className={ ` col-auto even:self-start flex justify-center items-center even:h-40 odd:h-16 w-full odd:mt-5 group` }>
                <Link href={ "/user/room" } className="flex flex-row justify-center items-center gap-2  group-even:h-1/2 h-full w-[50%] text-base underline mx-2 bg-slate-400 rounded-md">
                  Add
                  <LibraryIcon className="size-5" />
                </Link>
              </div>
            </LibraryContent>
          </Library>
        </section>

        {/* recommendation component */ }

      </main>
  );
}
