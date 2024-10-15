'use client';
import { Library as LibraryIcon, Square, Grid2X2, Grid3X3, Filter, ArrowDownNarrowWide, ArrowUpWideNarrow, Plus, Search, EllipsisVertical } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState, useCallback, useContext, createContext, useMemo } from "react";
import { Separator } from "@/components/ui/separator";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { RadioGroup, RadioGroupItem } from "@/components/ui/library-radio-group";
import { WindowContext, getWindowTag, windowTags } from "@/utils/getWindowMeasure";
import "@/app/globals.css";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

export enum sizeOptions {
    SMALL = 1,
    MEDIUM = 2,
    LARGE = 3,
}


type LibraryContextProps = {
    itemsSize: sizeOptions;
    setSize: (size: number) => void;
};

type FilterObject = {
    targetParam: any;
    filterRule: (val: any) => boolean;
};

type typeParam = 'band' | 'title' | 'date' | 'type';

type SortObject = {
    targetParam: typeParam;
    direction: 'asc' | 'desc';
    activeTargetParams: typeParam[] | null;
};

const defaultSort: SortObject[] = [{
    targetParam: 'band',
    direction: 'asc',
    activeTargetParams: null,
}, {
    targetParam: 'date',
    direction: 'asc',
    activeTargetParams: ['band'],
}];


export const LibraryContext = createContext<LibraryContextProps>({ itemsSize: sizeOptions.MEDIUM, setSize: () => { } });


export default function Library({ data }: { data: any[]; }) {
    const test = window.outerWidth;

    const [windowTag, setterWindowTag] = useState<windowTags>(getWindowTag(test));

    const [itemsSize, setItemSize] = useState<sizeOptions>(sizeOptions.MEDIUM);

    const [filters, setFilters] = useState<FilterObject[]>([]);

    const [sorts, setSorts] = useState<SortObject[]>(defaultSort);

    const setSize = useCallback((size: sizeOptions) => {
        setItemSize(size);
    }, []);

    return (
        <div className="flex flex-col w-full px-3">
            <WindowContext.Provider value={ { windowWidth: test, windowTag, setWindowTag: setterWindowTag } }>
                <LibraryContext.Provider value={ { itemsSize, setSize } }>

                    <LibraryMenu />

                    <Separator className="mt-1 mb-3" decorative={ true } />

                    <LibraryContent data={ data }>
                        <div className="col-auto even:self-start flex flex-col justify-center items-center min-h-[80px] w-full  group">
                            <Link href={ "/user/room" } className="flex flex-row justify-center items-center gap-2 w-[75%] min-h-[40px] text-base underline mx-2 bg-slate-400 rounded-md">
                                Add
                                <LibraryIcon className="size-5" />
                            </Link>
                            <Link href={ "/user/room" } className="flex flex-row justify-center items-center gap-2 w-[75%] min-h-[40px] text-base underline mx-2 bg-slate-400 rounded-md">
                                Add
                                <LibraryIcon className="size-5" />
                            </Link>
                        </div>
                    </LibraryContent>

                </LibraryContext.Provider>
            </WindowContext.Provider>
        </div>
    );
}


export function LibraryMenu() {
    const { itemsSize, setSize } = useContext(LibraryContext);
    const { windowWidth, windowTag, setWindowTag } = useContext(WindowContext);


    const icon = useMemo(() => {
        return {
            3: <Square className="size-5 stroke-slate-700 group-data-[state=checked]:stroke-slate-900 transition duration-200 group-data-[state=checked]:scale-110  " key={ 1 } />,
            2: <Grid2X2 className="size-5 stroke-slate-700 group-data-[state=checked]:stroke-slate-900 transition duration-200 group-data-[state=checked]:scale-110  " key={ 2 } />,
            1: <Grid3X3 className="size-5 stroke-slate-700 group-data-[state=checked]:stroke-slate-900 transition duration-200 group-data-[state=checked]:scale-110  " key={ 3 } />
        };
    }, []);


    return (
        <div className="flex flex-row justify-center gap-5 w-full h-7 ">
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
                        <RadioGroup orientation="horizontal"
                            defaultValue={ `${sizeOptions.MEDIUM}` } value={ `${itemsSize}` }
                            onValueChange={ (value: string) => { setSize(parseInt(value)); console.log(windowTag); } }
                        >
                            {
                                Object.entries(icon).map(
                                    (opt) => {
                                        return (
                                            <li key={ opt[0] } className="list-none">
                                                <RadioGroupItem className="group data-[state=checked]:bg-slate-200 p-1" id={ `size-option-${opt[0]}` } value={ opt[0] }>
                                                    { opt[1] }
                                                </RadioGroupItem>
                                            </li>
                                        );
                                    }
                                )
                            }
                        </RadioGroup >
                    </PopoverContent>
                </Popover>
            </div>

            <div>
                <Popover>
                    <PopoverTrigger asChild>
                        <button>
                            <Filter className="size-5 stroke-slate-700 " />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-fit">
                        <Button className="flex flex-row justify-center items-center gap-2 w-[75%] min-h-[40px] text-base underline mx-2 bg-slate-400 rounded-md">
                            Add
                            <Plus className="size-5 shrink-0" />
                        </Button>
                    </PopoverContent>
                </Popover>
            </div>

            <div>
                <Popover>
                    <PopoverTrigger asChild>
                        <button>
                            <ArrowDownNarrowWide className="size-5 stroke-slate-700 " />
                            {/* <ArrowUpWideNarrow /> */ }
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-fit">
                        <Button className="flex flex-row justify-center items-center gap-2 w-[75%] min-h-[40px] text-base underline mx-2 bg-slate-400 rounded-md">
                            Add
                            <Plus className="size-5 shrink-0" />
                        </Button>
                    </PopoverContent>
                </Popover>
            </div>

            <div>
                <Popover>
                    <PopoverTrigger asChild>
                        <button className=" transition duration-200 data-[state=open]:border data-[state=open]:scale-125 data-[state-open]:bg-slate-300  rounded-full">
                            <Search className="size-5 stroke-slate-700 " />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-fit">
                        <Input className="" />
                    </PopoverContent>
                </Popover>
            </div>

            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger className=" transition duration-200 data-[state=open]:border data-[state=open]:scale-125 data-[state-open]:bg-slate-300  rounded-full ">
                        <EllipsisVertical className="size-5 stroke-slate-700 " />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Preferences</DropdownMenuLabel>
                        <DropdownMenuSeparator></DropdownMenuSeparator>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

        </div>
    );
}


export function LibraryContent({ children, data }: { children?: React.ReactNode, data: any[]; }) {

    const sizeMapper = {
        xs: 80,
        sm: 80,
        md: 90,
        lg: 100,
        xl: 100
    };


    const { itemsSize } = useContext(LibraryContext);
    const { windowWidth, windowTag, setWindowTag } = useContext(WindowContext);


    useEffect(() => {
        setWindowTag(getWindowTag(window.innerWidth));

        const handleResize = () => { setWindowTag(getWindowTag(window.innerWidth)); };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    });


    return (
        <div className={ `grid gap-x-3 gap-y-3 items-center justify-items-center w-full h-fit` } style={ { gridTemplateColumns: `repeat(auto-fill,minmax(${sizeMapper[windowTag] * itemsSize}px, 1fr))` } }>
            {
                data.map((item) => <li className="list-none w-full" key={ item }><LibraryItem data={ item } options={ { bandInfo: { isVisible: windowTag != 'xs' || itemsSize != sizeOptions.SMALL }, genreInfo: { isVisible: windowTag != 'xs' && itemsSize != sizeOptions.SMALL }, dateInfo: { isVisible: windowTag == 'xl' && itemsSize == sizeOptions.LARGE } } } /></li>)
            }
            { children }
        </div>
    );
}


// export function LibraryItem({ data }: { data: albumResponse; }) {
export function LibraryItem({ data, options }: { data: any, options: any; }) {

    return (
        <div className="flex flex-col items-center justify-center h-fit">
            <Link href={ `/album/${data.id}` } className="block w-full aspect-square bg-teal-600 rounded-md "></Link>
            <div className="text-sm w-full">
                <p className="truncate text-base font-bold">{ data.name || 'title' }</p>
                {
                    options?.bandInfo.isVisible && <p className="truncate">{ data.bands?.map((band: bandResponse) => (<span key={ band.id }>{ band.name }</span>)) || 'Band' }</p>
                }
                <div className="flex flex-row gap-2 w-full overflow-hidden">
                    {
                        options?.genreInfo.isVisible && (
                            <>
                                <span className="whitespace-nowrap">album genre</span>
                                <span className="whitespace-nowrap">album genre</span>
                                <span className="whitespace-nowrap">album genre</span>
                                <span className="whitespace-nowrap">album genre</span>
                            </>
                        )
                    }
                </div>
                <div className="flex flex-row gap-2 w-full overflow-hidden justify-end">
                    {
                        options?.dateInfo.isVisible && (
                            <>
                                <span className="whitespace-nowrap mr-5">dd/mm/yyyy</span>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

