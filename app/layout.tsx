import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ConvexProvider from "@/components/providers/convex-provider";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Notion",
	description: "The connected workspace where better, faster work happens.",
    icons: {
        icon: [
            {
                url: "/logo.svg",
                href: "/logo.svg"
            }
        ]
    }
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ConvexProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                        storageKey="notion-theme"
                    >
                        {children}
                    </ThemeProvider>
                </ConvexProvider>
            </body>
		</html>
	);
}
