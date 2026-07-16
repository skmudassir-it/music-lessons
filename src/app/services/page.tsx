import type { Metadata } from "next";
import ServicesClient from "@/components/ServicesClient";
export const metadata: Metadata = { title: "Services", description: "Explore our music lessons — piano, guitar, voice, violin, drums, music theory, group classes, and online lessons." };
export default function ServicesPage() { return <ServicesClient />; }
