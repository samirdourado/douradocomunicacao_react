'use client'
import Header from "@/components/header";
import { useNavContext } from "@/contexts/navContext";
import HamburguerMenu from "@/components/hamburguerMenu";
import PageSize from "@/components/sizePage";
import Hero from "@/components/hero";
import Slogan from "@/components/slogan";
import AboutUs from "@/components/about";

export default function Home() {

  const { activateMenu }: any = useNavContext();

  return (
    <main>
      <PageSize/>
      <Hero/>
      <Header/>
      <Slogan/>
      <AboutUs/>

      { activateMenu && <HamburguerMenu/>}
    </main>
  );
}
