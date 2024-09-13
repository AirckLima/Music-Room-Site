import type { Metadata } from "next";
import { Monomaniac_One } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import MobileMenu from "@/components/MobileMenu";
import "./globals.css";
import Header from "@/components/Header";

const monomaniac = Monomaniac_One({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ ` ${monomaniac.className} bg-slate-50 dark:bg-slate-950 from-slate-50 dark:from-slate-950 bg-gradient-to-b to-slate-400 dark:to-slate-800 ` } suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="">
            { children }
          </div>
          <MobileMenu />
          <footer className="w-full h-[10vh]  bg-slate-50 dark:bg-slate-950 rounded-t-lg ">
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
