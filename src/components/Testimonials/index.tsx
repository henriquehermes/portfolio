"use client"
import { Box, Flex, Text } from "@chakra-ui/react"
import Container from "../Layout/Container"
import { ReactElement } from "react"
import Carousel from "./Carousel"

interface CardProps {
	heading: string
	description: string
	icon: ReactElement
}

const Card = ({ heading, description, icon }: CardProps) => {
	return (
		<Flex align={"start"} gap={2}>
			<Flex
				w={50}
				h={50}
				align={"center"}
				justify={"center"}
				color={"white"}
				rounded={"full"}
				bgColor="#075FE4"
			>
				{icon}
			</Flex>
			<Box ml={2}>
				<Text lineHeight={"1.231em"} fontSize="38px" fontWeight={700}>
					{heading}
				</Text>
				<Text mt={1} fontSize={"20px"} color="#c3cad5">
					{description}
				</Text>
			</Box>
		</Flex>
	)
}

const Testimonials = () => {
	return (
		<Container>
			<Flex color="#fff" mt="100px" flexDir={"column"}>
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
