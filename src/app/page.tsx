import { Flex } from "@chakra-ui/react"
import Introduction from "@/components/Introduction"
import AboutMe from "@/components/AboutMe"
import WorkedOn from "@/components/WorkedOn"
import Skills from "@/components/Skills"
import Portfolio from "@/components/Portfolio"
import Testimonials from "@/components/Testimonials"

export default function Home() {
	return (
		<Flex mx="auto" w="full" height="full" flexDir="column" bgColor="#1b1f24">
			<Flex flexDir={"column"}>
				<Introduction />
				<AboutMe />
				<WorkedOn />
				<Skills />
				<Portfolio />
				<Testimonials />
			</Flex>
		</Flex>
	)
}
