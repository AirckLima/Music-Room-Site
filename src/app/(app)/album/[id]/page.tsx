import Image from "next/image";
import { ChartLine } from "lucide-react";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { notFound } from "next/navigation";
import { fetchAlbum } from "@/utils/fetchAlbum";

export default async function Search({ params }: { params: { id: number; }; }) {
    let dataJSON: any = await fetchAlbum(params.id);
    
    if (!dataJSON) notFound();

    return (

        <main className="grid grid-cols-1 gap-5 auto-cols-min min-h-screen   my-4 ">

            <h1>{ dataJSON.name }</h1>

        </main>
    );
}
