import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Student Work | HarmonyKeys Music Academy",
  description: "See our students in action — recital highlights, competition winners, and musical achievements at HarmonyKeys.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
