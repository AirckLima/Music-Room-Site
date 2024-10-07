import Image from "next/image";
import { ChartLine } from "lucide-react";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { notFound } from "next/navigation";
import { fetchAlbum } from "@/utils/fetchAlbum";

export default async function Album({ params }: { params: { id: number; }; }) {
    let dataJSON: albumResponse | null = await fetchAlbum(params.id);

    if (!dataJSON) notFound();
    let cover = dataJSON.artworks?.[0];

    return (

        <main className="grid grid-cols-1 gap-5 auto-cols-min min-h-screen my-4 ">

            <div>
                <div className="flex w-full justify-center ">
                    <div className="overflow-clip rounded-md">
                        <img src={ cover?.url } className="size-[320px] object-cover object-bottom" />
                    </div>
                </div>
                <h1>{ dataJSON.name }</h1>
            </div>

        </main>
    );
}
