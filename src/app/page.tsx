import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "HarmonyKeys Music Academy | Expert Music Lessons for All Ages",
  description: "Professional music lessons in piano, guitar, violin, voice, drums, and more. First trial lesson free! Serving Portland, OR.",
};

export default function HomePage() {
  return <HomeClient />;
}
