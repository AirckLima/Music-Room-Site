import { ReactElement } from "react";

interface TopicSectionInterface {
    title?: string;
    children?: ReactElement | ReactElement[];
}

export default function TopicSection({ title, children }: TopicSectionInterface) {
    return (
        <section className="relative flex flex-col h-[80vh] w-full px-9 py-6 ">
            { !title || <h2>{ title }</h2> }
            <div>
                { children }
            </div>
        </section>
    );
}