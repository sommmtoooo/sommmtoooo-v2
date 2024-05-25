import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: "300", subsets: ["latin"] });
const dm_sans = DM_Sans({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Somtochukwu",
  description: "Software Developer",
  creator: "Somtochukwu N Leroy",
  robots: {
    nocache: true,
  },
  keywords: [
    "somtochukwu",
    "somtochukwu nnalue",
    "somtodev",
    "leroy nnalue",
    "padawan",
    "software developer",
    "somtodev blog",
    "somtochukwu blog",
    "alienxr",
    "alienxroy",
  ],
  twitter: {
    title: "Somtochukwu",
    description: "Software Developer",
    creator: "Sommmtoooo",
    creatorId: "sommmtoooo",
  },
  openGraph: {
    type: "website",
    url: "https://sommmtoooo.vercel.app",
    title: "Somtochukwu",
    description: "Software Developer",
    siteName: "Somtochukwu",
    images: [
      {
        url: "https://sommmtoooo.vercel.app/images/card/card.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={dm_sans.className}>
        <main className="w-5/6 mx-auto my-5">{children}</main>
      </body>
    </html>
  );
}
