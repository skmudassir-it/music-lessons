import type { Metadata } from "next";
import ProjectsClient from "@/components/ProjectsClient";
export const metadata: Metadata = { title: "Performances & Events", description: "Student recitals, competition wins, and community performances from NoteWise Music Academy." };
export default function ProjectsPage() { return <ProjectsClient />; }
