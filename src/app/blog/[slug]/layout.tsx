import { Onest } from "next/font/google";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  params: any;
}

const onest = Onest({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children, params }: Props) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>

      <body className={onest.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
