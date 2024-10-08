"use client";
import { Library as LibraryIcon, Square, Grid2X2, Grid3X3, icons } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useState, useCallback, useContext, createContext, useMemo } from "react";
import { Separator } from "@/components/ui/separator";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import "@/app/globals.css";
export enum sizeOptions {
    SMALL = 3,
    MEDIUM = 2,
    LARGE = 1,
}

type LibraryContextProps = {
    itemsSize: sizeOptions;
    setSize: (size: number) => void;
};


export const LibraryContext = createContext<LibraryContextProps>({ itemsSize: sizeOptions.MEDIUM, setSize: () => { } });


export function Library({ children }: { children?: React.ReactNode; }) {

    const [itemsSize, setItemSize] = useState<sizeOptions>(sizeOptions.MEDIUM);

    const setSize = useCallback((size: sizeOptions) => {
        setItemSize(size);
    }, []);

    return (
        <div className="flex flex-col w-full">
            <LibraryContext.Provider value={ { itemsSize, setSize } }>
                <LibraryMenu />
                <Separator className="mt-1 mb-3" decorative={ true } />
                { children }
            </LibraryContext.Provider>
        </div>
    );
}


export function LibraryMenu() {
    const { itemsSize, setSize } = useContext(LibraryContext);

    const icon = useMemo(() => {
        return {
            1: <Square className="size-7" />,
            2: <Grid2X2 className="size-7" />,
            3: <Grid3X3 className="size-7" />
        };
    }, []);

    console.log(itemsSize);


    return (
        <div className="flex flex-row justify-center w-full h-7 bg-slate-200">
            <div>
                <Popover>
                    <PopoverTrigger asChild>
                        <button>
                            {
                                icon[itemsSize]
                            }
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-fit">
                        <ToggleGroup orientation="horizontal" type="single" defaultValue={`${sizeOptions.MEDIUM}`} value={ `${itemsSize}` } onValueChange={ (value: string) => { console.log(itemsSize); setSize(parseInt(value)); } }>
                            {
                                Object.entries(icon).map(
                                    (opt) => <>
                                        <ToggleGroupItem className=" data-[state=on]:bg-slate-500" key={ opt[0] } id={ `size-option-${opt[0]}` } value={ opt[0] }>
                                            { opt[1] }
                                        </ToggleGroupItem>
                                    </>
                                )
                            }
                        </ToggleGroup >
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}


export function LibraryContent({ children }: { children?: React.ReactNode; }) {
    const {itemsSize} = useContext(LibraryContext);

    const colSize = `grid-cols-${itemsSize}`;

    return (
        <div className={ `grid ${colSize} justify-items-center auto-cols-fr items-center gap-y-5 w-screen` } >
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

