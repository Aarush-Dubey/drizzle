import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Outside — Weather demo", description: "Deterministic weather application for the owned engineering demonstration." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
