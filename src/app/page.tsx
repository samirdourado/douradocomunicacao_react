'use client'
import Header from "@/components/header";
import { useNavContext } from "@/contexts/navContext";
import HamburguerMenu from "@/components/hamburguerMenu";
import PageSize from "@/components/sizePage";

export default function Home() {

  const { activateMenu }: any = useNavContext();

  return (
    <main>
      <PageSize/>      
      <Header/>
      { activateMenu && <HamburguerMenu/>}
    </main>
  );
}
