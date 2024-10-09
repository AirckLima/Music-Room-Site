'use client';
import { Library as LibraryIcon, Square, Grid2X2, Grid3X3 } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
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
        <div className="flex flex-col w-full px-3">
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
            1: <Square className="size-7" key={ 1 } />,
            2: <Grid2X2 className="size-7" key={ 2 } />,
            3: <Grid3X3 className="size-7" key={ 3 } />
        };
    }, []);


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
                        <ToggleGroup orientation="horizontal" type="single"
                            defaultValue={ `${sizeOptions.MEDIUM}` } value={ `${itemsSize}` }
                            onValueChange={ (value: string) => setSize(parseInt(value)) }
                        >
                            {
                                Object.entries(icon).map(
                                    (opt) => {
                                        return (<li key={ opt[0] } className="list-none">
                                            <ToggleGroupItem className=" data-[state=on]:bg-slate-500" id={ `size-option-${opt[0]}` } value={ opt[0] }>
                                                { opt[1] }
                                            </ToggleGroupItem>
                                        </li>);
                                    }
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
    const { itemsSize } = useContext(LibraryContext);

    const sizeMapper = {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5
    };

    const a = `grid-cols-${itemsSize} sm:grid-cols-${itemsSize + sizeMapper.sm} md:grid-cols-${itemsSize + sizeMapper.md} lg:grid-cols-${itemsSize + sizeMapper.lg} xl:grid-cols-${itemsSize + sizeMapper.xl} `

    return (
        <div className={ `grid ${a} auto-cols-[1fr] gap-x-5 gap-y-3 items-center justify-items-center w-full h-fit` }>
            { children }
        </div>
    );
}




export function LibraryItem() {
    return (
        <div className="flex flex-col items-center justify-center h-fit">
            <Link href={ `/album/${1}` } className="block w-full aspect-square bg-teal-600 rounded-md "></Link>
            <div className="text-sm w-full">
                <p className="truncate text-base font-bold">album title</p>
                <p className="truncate">album band</p>
                <div className="flex flex-row gap-2 w-full overflow-hidden ">
                    <span className="whitespace-nowrap">album genre</span>
                    <span className="whitespace-nowrap">album genre</span>
                    <span className="whitespace-nowrap">album genre</span>
                    <span className="whitespace-nowrap">album genre</span>
                </div>
            </div>
        </div>
    );
}

