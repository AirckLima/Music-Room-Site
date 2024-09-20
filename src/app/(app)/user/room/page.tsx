import Image from "next/image";
import { ChartLine, Grid2X2, LayoutList, Library, List, Plus } from "lucide-react";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export default function Search() {
    return (
        <main className="flex flex-col gap-5 my-4 min-h-screen ">

            {/* Collection component */ }
            <section>
                <div id="collection-header" className="flex flex-row w-full">
                    <div id="collection-vision-mode">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button size={ "sm" }>
                                    <Grid2X2 className="size-5" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="flex flex-row justify-center gap-3 w-fit">
                                <Grid2X2 className="size-5" />
                                <List className="size-5" />
                                <LayoutList className="size-5" />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div id="collection-">

                    </div>

                </div>
                <div className="grid grid-cols-2 justify-items-center items-center gap-y-5 w-screen">
                    <div className="">
                        <Link href={ `/album/${1}` } className="block size-40 bg-teal-600 rounded-md "></Link>
                        <div className="text-sm">
                            <p className="truncate text-base">album title</p>
                            <p className="truncate">album band</p>
                            <div className="flex flex-row gap-2 max-w-40 overflow-hidden ">
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link href={ `/album/${2}` } className="block size-40 bg-teal-600 rounded-md "></Link>
                        <div className="text-sm">
                            <p className="truncate text-base">album title</p>
                            <p className="truncate">album band</p>
                            <div className="flex flex-row gap-2 max-w-40 overflow-hidden ">
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link href={ `/album/${3}` } className="block size-40 bg-teal-600 rounded-md "></Link>
                        <div className="text-sm">
                            <p className="truncate text-base">album title</p>
                            <p className="truncate">album band</p>
                            <div className="flex flex-row gap-2 max-w-40 overflow-hidden ">
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link href={ `/album/${4}` } className="block size-40 bg-teal-600 rounded-md "></Link>
                        <div className="text-sm">
                            <p className="truncate text-base">album title</p>
                            <p className="truncate">album band</p>
                            <div className="flex flex-row gap-2 max-w-40 overflow-hidden ">
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link href={ `/album/${5}` } className="block size-40 bg-teal-600 rounded-md "></Link>
                        <div className="text-sm">
                            <p className="truncate text-base">album title</p>
                            <p className="truncate">album band</p>
                            <div className="flex flex-row gap-2 max-w-40 overflow-hidden ">
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link href={ `/album/${6}` } className="block size-40 bg-teal-600 rounded-md "></Link>
                        <div className="text-sm">
                            <p className="truncate text-base">album title</p>
                            <p className="truncate">album band</p>
                            <div className="flex flex-row gap-2 max-w-40 overflow-hidden ">
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link href={ `/album/${7}` } className="block size-40 bg-teal-600 rounded-md "></Link>
                        <div className="text-sm">
                            <p className="truncate text-base">album title</p>
                            <p className="truncate">album band</p>
                            <div className="flex flex-row gap-2 max-w-40 overflow-hidden ">
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link href={ `/album/${8}` } className="block size-40 bg-teal-600 rounded-md "></Link>
                        <div className="text-sm">
                            <p className="truncate text-base">album title</p>
                            <p className="truncate">album band</p>
                            <div className="flex flex-row gap-2 max-w-40 overflow-hidden ">
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                                <span className="whitespace-nowrap">album genre </span>
                            </div>
                        </div>
                    </div>

                    <div className=" odd:col-span-full even:self-start even:content-center  even:h-40  h-fit  odd:mt-5">
                        <Button className="flex flex-row justify-center items-center gap-2 h-full w-fit text-base underline mx-2 bg-slate-400">
                            Add
                            <Plus className="size-5" />
                        </Button>
                    </div>
                </div>
            </section>


        </main>
    );
}
