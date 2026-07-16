import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services | HarmonyKeys Music Academy",
  description: "Explore our music lessons — piano, guitar, violin, voice, drums, music theory, group classes, and recital preparation.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
