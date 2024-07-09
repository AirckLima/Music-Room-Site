import { ReactElement } from "react";
import { Mohave } from "next/font/google";

interface TopicSectionInterface {
    title?: string;
    children?: ReactElement | ReactElement[];
}

const mohave = Mohave({ weight: "500", subsets: ["latin"] });


export default function TopicSection({ title, children }: TopicSectionInterface) {
    return (
        <section className="relative flex flex-col h-[80vh] w-full px-8 py-6 ">
            {
                !title ||
                <h2 className={ ` capitalize text-2xl  ${mohave.className}` }>
                    { title }
                </h2>
            }
            {
                !children ||
                <div>
                    { children }
                </div>
            }
        </section>
    );
}