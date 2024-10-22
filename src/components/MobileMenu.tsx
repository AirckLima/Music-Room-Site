import { BellRing, ChartArea, CircleUser, Home, LibraryBig, Menu, Plus, Settings, Telescope } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import Link from "next/link";
import { Button } from "./ui/button";


export default function MobileMenu() {
    return (
        <div className="w-fit h-fit flex items-center justify-center sticky bottom-5 left-full p-3 my-3 mr-3  lg:hidden bg-slate-800 dark:bg-slate-500 rounded-full pointer-events-auto">
            <Sheet>
                <SheetTrigger className="">
                    <Menu className="stroke-slate-200" />
                </SheetTrigger>
                <SheetContent side={ "left" }>
                    <SheetHeader>
                        <SheetTitle className="text-3xl">
                            Music Room
                        </SheetTitle>
                    </SheetHeader>
                    <div className="relative h-full">
                        <div className="flex flex-col gap-3 py-3">
                            <div className="flex justify-center my-3 ">
                                <ThemeSwitcher />
                            </div>

                            <div className="flex flex-col gap-5 w-fit text-lg">
                                <Link href={ '' } className="flex flex-row gap-3">
                                    <Home />
                                    Home
                                </Link>

                                <Link href={ '' } className="flex flex-row gap-3">
                                    <BellRing />
                                    Notifications
                                </Link>

                                <Link href={ '' } className="flex flex-row gap-3">
                                    <LibraryBig />
                                    Library Room
                                </Link>

                                <Link href={ '' } className="flex flex-row gap-3">
                                    <Telescope />
                                    Explore
                                </Link>

                                <Link href={ '' } className="flex flex-row gap-3">
                                    <ChartArea />
                                    Statistics
                                </Link>

                                <Link href={ '' } className="flex flex-row gap-3">
                                    <Settings />
                                    Preferences
                                </Link>
                            </div>
                        </div>

                        {/* <div className="absolute bottom-7 w-full p-4 bg-slate-300 rounded">
                            <Popover>
                                <PopoverTrigger className="flex flex-row gap-3" asChild>
                                    <button className="w-full">
                                        <CircleUser className="size-auto" />
                                        USER
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[var(--radix-popover-trigger-width)]" sideOffset={ 20 }>
                                    <div className="flex flex-col">
                                        <Button className="flex flex-row justify-center items-center gap-2 w-full min-h-[25px] text-sm underline bg-slate-400 rounded-md">
                                            <CircleUser className="size-auto" />
                                            USER
                                        </Button>
                                        <Button className="flex flex-row justify-center items-center gap-2 w-full min-h-[25px] text-sm underline bg-slate-400 rounded-md">
                                            Add
                                            <Plus className="size-3 shrink-0" />
                                        </Button>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div> */}
                    </div>

                </SheetContent>
            </Sheet>
        </div>
    );
}
