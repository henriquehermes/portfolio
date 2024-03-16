import { Divider, Flex, Text } from "@chakra-ui/react"
import Container from "../Layout/Container"

const Testimonials = () => {
	return (
		<Container>
			<Flex color="#fff" mt="100px" flexDir={"column"}>
				<Flex gap={15} fontWeight="700" fontSize={"20px"}>
					<Text color="#075fe4">/</Text>
					<Text>MY TESTIMONIALS</Text>
				</Flex>
			</Flex>
		</Container>
	)
}

export default Testimonials
