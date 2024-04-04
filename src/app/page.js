import Image from "next/image";
import Navbar from "@/Components/Navbar/Navbar";
import Hero from "@/Components/Hero/Hero";
import Body from "@/Components/Body/Body";

export default function Home() {
  return (
    <main>
      <Hero />
      <Body />
    </main>
  );
}
