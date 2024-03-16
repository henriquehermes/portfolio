import { Flex } from "@chakra-ui/react"
import Header from "@/components/Header"
import Introduction from "@/components/Introduction"
import AboutMe from "@/components/AboutMe"
import WorkedOn from "@/components/WorkedOn"
import Skills from "@/components/Skills"
import Portfolio from "@/components/Portifolio"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"

export default function Home() {
	return (
		<Flex mx="auto" w="full" height="full" flexDir="column" bgColor="#1b1f24">
			<Flex flexDir={"column"}>
				<Header />

				<Introduction />

				<AboutMe />

				<WorkedOn />

				<Skills />

				<Portfolio />

				<Testimonials />

				<Contact />
			</Flex>
		</Flex>
	)
}
