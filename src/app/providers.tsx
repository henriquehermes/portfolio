"use client"

import Footer from "@/components/Footer"
import { ChakraProvider } from "@chakra-ui/react"

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ChakraProvider>
			{children}
			<Footer />
		</ChakraProvider>
	)
}
