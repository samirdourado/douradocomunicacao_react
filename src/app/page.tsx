'use client'
import Header from "@/components/header";
import { useNavContext } from "@/contexts/navContext";
import HamburguerMenu from "@/components/hamburguerMenu";
import PageSize from "@/components/sizePage";
import Hero from "@/components/hero";
import Slogan from "@/components/slogan";
import AboutUs from "@/components/about";
import ServicesArea from "@/components/servicesArea";

export default function Home() {

  const { activateMenu }: any = useNavContext();

  return (
    <main>
      <PageSize/>
      <Header/>
      <Hero/>
      <Slogan/>
      <AboutUs/>
      <ServicesArea/>
      { activateMenu && <HamburguerMenu/>}
    </main>
  );
}
