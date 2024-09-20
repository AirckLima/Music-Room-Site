import { Library as LibraryIcon } from "lucide-react";
import Link from "next/link";
import React from "react";


export function Library({ children }: { children?: React.ReactNode; }) {
    return (
        <div className="flex flex-col w-full">
            { children }
        </div>
    );
}


export function LibraryContent({ children }: { children?: React.ReactNode; }) {
    return (
        <div className="grid grid-cols-2 justify-items-center items-center gap-y-5 w-screen" >
            { children }
        </div>
    );
}


export function LibraryItem() {
    return (
        <div className="">
            <Link href={ `/album/${1}` } className="block size-40 bg-teal-600 rounded-md "></Link>
            <div className="text-sm">
                <p className="truncate text-base font-bold">album title</p>
                <p className="truncate">album band</p>
                <div className="flex flex-row gap-2 max-w-40 overflow-hidden ">
                    <span className="whitespace-nowrap">album genre </span>
                    <span className="whitespace-nowrap">album genre </span>
                    <span className="whitespace-nowrap">album genre </span>
                    <span className="whitespace-nowrap">album genre </span>
                </div>
            </div>
        </div>
    );
}