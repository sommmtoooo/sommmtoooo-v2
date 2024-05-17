import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: '300', subsets: ['latin']})

export const metadata: Metadata = {
  title: "Somtochukwu N Leroy",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="w-5/6 mx-auto my-5">
          {children}
        </main>
      </body>
    </html>
  );
}
