"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { ChakraProvider } from "@chakra-ui/react"

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ChakraProvider>
			<Header />
			{children}
			<Footer />
		</ChakraProvider>
	)
}
