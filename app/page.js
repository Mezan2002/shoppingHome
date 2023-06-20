import Navbar from "@/components/Navbar/Navbar";
import Slider from "@/components/Slider/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div>
        <Navbar></Navbar>
        <Slider />
      </div>
    </section>
  );
}
