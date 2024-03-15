'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header";
import { useNavContext } from "@/contexts/navContext";
import HamburguerMenu from "@/components/hamburguerMenu";

export default function Home() {

  const { activateMenu }: any = useNavContext();

  return (
    <main>
      <Header/>
      { activateMenu && <HamburguerMenu/>}
    </main>
  );
}
