"use client"
import { Flex, Text } from "@chakra-ui/react"

import Container from "../Layout/Container"
import Carousel from "./Carousel"

const Testimonials = () => {
	return (
		<Container>
			<Flex color="#fff" flexDir={"column"}>
				<Flex gap={15} fontWeight="700" fontSize={"20px"}>
					<Text color="#075fe4">/</Text>
					<Text>MY TESTIMONIALS</Text>
				</Flex>

				<Flex mt="30px">
					<Carousel />
				</Flex>
			</Flex>
		</Container>
	)
}

export default Testimonials
