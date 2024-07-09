import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Skyline Photography Club",
	description: "Website for SHS Photography Club by Alpine Dev!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<title>{String(metadata.title)}</title>
				<meta name="description" content={metadata.description ?? ""} />
				<img rel="icon" src="./imgs/camera.png" />
			</Head>
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
