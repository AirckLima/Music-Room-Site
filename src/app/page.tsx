import Divider from "@/components/Divider";
import TopicSection from "@/components/TopicSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-1 min-h-screen flex-col items-center justify-between ">

      <Divider id="" icon={ false } />

      <TopicSection>
      </TopicSection>

      <Divider id="" />

      <TopicSection title="about me">
      </TopicSection>

      <Divider id="" />

      <TopicSection title="my portfolio">
      </TopicSection>

      <Divider id="" />

      <TopicSection title="my hobbies">
      </TopicSection>

    </main>
  );
}
