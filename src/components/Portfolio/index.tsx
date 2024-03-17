import { Divider, Flex, Text } from "@chakra-ui/react"
import Container from "../Layout/Container"
import Carousel from "./Carousel"

const Portfolio = () => {
	return (
		<Container>
			<Flex id="portfolio" color="#fff" mt="100px" flexDir={"column"}>
				<Flex gap={15} fontWeight="700" fontSize={"20px"}>
					<Text color="#075fe4">/</Text>
					<Text>MY PORTFOLIO</Text>
				</Flex>

				<Flex mt="20px" flexDir={{ base: "column" }}>
					<Text
						lineHeight="1.231em"
						fontSize={{ base: "20px", md: "35px", lg: "52px" }}
						fontWeight={"700"}
					>
						Take a look at the latest projects I’ve done
					</Text>

					<Carousel />
				</Flex>
			</Flex>
		</Container>
	)
}

export default Portfolio
