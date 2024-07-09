"use client";

interface DividerInterface {
    icon?: boolean;
    id: string;
}

function scroll() {
    console.log("trigger scroll animation");
}


export default function Divider({ id, icon = true }: DividerInterface) {
    return (
        <button onClick={ () => scroll() } id={ id } className="el flex flex-col justify-center items-center w-full h-[10vh] bg-slate-400">
            { !icon || <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="size-2/5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg> }
        </button>
    );
}