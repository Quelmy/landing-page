import { SectionHero } from "@/components/SectionHero";
import { SectionServices } from "@/components/SectionServices";

// Removido import Image, pois não estava sendo usado
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionServices />
    </>
  );
}
