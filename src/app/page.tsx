import TopicSection from "@/components/TopicSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-1 min-h-screen flex-col items-center justify-between ">
      <div className="flex flex-col justify-center items-center w-full h-[10vh] bg-slate-400"></div>

      <TopicSection title="">
      </TopicSection>

        <div className="flex flex-col justify-center items-center w-full h-[10vh] bg-slate-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="size-2/5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

      <section className="relative flex flex-col h-[80vh] w-full px-12 py-6 ">
        <h1>1</h1>
      </section>

      <div className="flex flex-col justify-center items-center w-full h-[10vh] bg-slate-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

      <section className="relative flex flex-col h-[80vh] w-full px-12 py-6 ">
        <h1>1</h1>
      </section>

      <div className="flex flex-col justify-center items-center w-full h-[10vh] bg-slate-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

      <section className="relative flex flex-col h-[80vh] w-full px-12 py-6 ">
        <h1>1</h1>
      </section>

    </main>
  );
}
