import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { BookmarkProvider } from "@/context/BookmarkContext";
import { ActionProvider } from "@/context/ActionContext";
import { SearchProvider } from "@/context/SearchContext";
import Header from "@/components/Header";
import { CortexSearch } from "@/components/CortexSearch";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Mastery Manual | Build, Deploy, Monetize",
  description: "The definitive interactive manual for building AI agents, apps, and consulting businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <ThemeProvider defaultTheme="dark" storageKey="ai-mastery-theme">
          <BookmarkProvider>
            <ActionProvider>
              <SearchProvider>
                <Header />
                {children}
                <CortexSearch />
              </SearchProvider>
            </ActionProvider>
          </BookmarkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
