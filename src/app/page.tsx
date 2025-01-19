import Image from "next/image";
import Hero from "../../components/Home/Hero";
import Body from "../../components/Home/Body";

export default function Home() {
  return (
    <div className="px-4">
      <Hero/>
      <Body/>
    </div>
  );
}
