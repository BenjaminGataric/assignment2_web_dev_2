/**
 * File: app/layout.tsx
 * Author: Noah Urbano
 * Date: October 27, 2026
 * This file defines the main layout for the student portal.
 * It receives the page content through the children prop.
 * It imports the global styling and Navbar component.
 * It displays the Navbar above the page content.
 * The layout provides a consistent structure for the website.
 */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import NavBar from "@/components/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "New Generation High School | Student Portal",
  description: "Student portal for New Generation High School",
};

// Shared page shell
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
        <NavBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
