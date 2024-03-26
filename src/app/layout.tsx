import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"

import "./globals.css"
import { Providers } from "./providers"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const font = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Henrique Hermes",
	description: "My Portfolio",
	keywords: ["Next.js", "React", "TypeScript"],
	authors: [
		{
			name: "Henrique Hermes",
			url: "https://www.linkedin.com/in/henrique-hermes-59703a121/",
		},
	],
	creator: "Henrique Hermes",
	publisher: "Henrique Hermes",
	openGraph: {
		title: "Henrique Hermes",
		description: "My Portfolio",
		type: "website",
		url: "https://henriquehermes.com.au",
		images: "https://www.henriquehermes.com.au/site-logo.svg",
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={font.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
