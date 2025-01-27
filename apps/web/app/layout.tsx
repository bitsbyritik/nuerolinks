import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { aeonik, cn, inter } from "@workspace/ui/lib";

import { generateMetadata } from "@/utlis";

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased !font-default overflow-x-hidden",
          aeonik.variable,
          inter.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
