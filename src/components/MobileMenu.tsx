import {  Menu } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";


export default function MobileMenu() {
    return (
        <div className="w-fit h-fit flex items-center justify-center sticky bottom-5 left-full p-3 my-3 mr-3  lg:hidden bg-slate-800 dark:bg-slate-500 rounded-full pointer-events-auto">
            <Sheet>
                <SheetTrigger className="">
                    <Menu className="stroke-slate-200" />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="text-3xl">
                            Music Room
                        </SheetTitle>
                    </SheetHeader>

                    <div>
                        <div className="flex justify-center my-3 ">
                            <ThemeSwitcher />
                        </div>
                    </div>

                </SheetContent>
            </Sheet>
        </div>
    );
}
