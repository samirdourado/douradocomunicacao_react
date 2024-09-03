'use client'
import Header from "@/components/header";
import { useNavContext } from "@/contexts/navContext";
import HamburguerMenu from "@/components/hamburguerMenu";
import PageSize from "@/components/sizePage";
import Hero from "@/components/hero";
import Slogan from "@/components/slogan";

export default function Home() {

  const { activateMenu }: any = useNavContext();

  return (
    <main>
      <PageSize/>
      <Hero/>
      <Header/>
      <Slogan/>

      { activateMenu && <HamburguerMenu/>}
    </main>
  );
}
