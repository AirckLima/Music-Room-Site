import { CassetteTape, Disc3, Menu, LogIn } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";
import React from "react";

export function Logo() {
    return (
        <div className="flex items-center">
            <h1 className="text-slate-700 dark:text-white text-3xl  leading-4">
                <Link href="/">
                    Music Room
                    <CassetteTape className=" inline-block stroke-slate-700 dark:stroke-slate-200 size-8 lg:size-9 mx-2 align-sub" />
                    {/* <Disc3 className=" inline-block stroke-slate-700 size-7 mx-2 align-sub" /> */ }
                </Link>
            </h1>
        </div>
    );
}


export function Navbar() {
    return (

        <div className="justify-self-end">
            <Link href={""} className="mr-1 block">
                <LogIn className="size-7 stroke-slate-800 dark:stroke-slate-300 from-transparent bg-gradient-to-r to-slate-300 dark:to-slate-800 rounded"/>
            </Link>
            <div className="hidden lg:block">

            </div>
        </div>
    );
}




export default function Header() {
    return (
        <header className="fixed top-0 flex flex-row justify-between items-center w-full px-5 py-3 bg-slate-50 dark:bg-slate-950 border-b-2 border-slate-200 dark:border-slate-700 rounded z-50">

            <div>
                <Logo />
            </div>

            <Navbar />

        </header>
    );
}