import { Divider, Flex, Text } from "@chakra-ui/react"
import Container from "../Layout/Container"

const Portfolio = () => {
	return (
		<Container>
			<Flex id="portfolio" color="#fff" mt="100px" flexDir={"column"}>
				<Flex gap={15} fontWeight="700" fontSize={"20px"}>
					<Text color="#075fe4">/</Text>
					<Text>MY PORTFOLIO</Text>
				</Flex>
			</Flex>
		</Container>
	)
}

export default Portfolio
