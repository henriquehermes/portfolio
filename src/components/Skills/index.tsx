"use client"
import {
	Box,
	Button,
	Flex,
	Heading,
	Icon,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react"
import Container from "../Layout/Container"
import { Image } from "@chakra-ui/next-js"
import { ReactElement } from "react"
import { FaNodeJs, FaReact } from "react-icons/fa"

interface CardProps {
	heading: string
	description: string
	icon: ReactElement
}

const Card = ({ heading, description, icon }: CardProps) => {
	return (
		<Box
			maxW={{ base: "full", md: "275px" }}
			w={"full"}
			borderRadius="28px"
			overflow="hidden"
			p={5}
			bgColor="#2d343f"
		>
			<Stack align={"start"} spacing={2}>
				<Flex
					w={16}
					h={16}
					align={"center"}
					justify={"center"}
					color={"white"}
					rounded={"full"}
					bgColor="#075FE4"
				>
					{icon}
				</Flex>
				<Box mt={2}>
					<Text fontSize="38px" fontWeight={700}>
						{heading}
					</Text>
					<Text mt={1} fontSize={"20px"} color="#c3cad5">
						{description}
					</Text>
				</Box>
			</Stack>
		</Box>
	)
}

const Skills = () => {
	return (
		<Container backgroundColor="transparent">
			<Flex color="#fff" mt="100px" flexDir={"column"}>
				<Flex gap={15} fontWeight="700" fontSize={"20px"}>
					<Text color="#075fe4">/</Text>
					<Text>MY SKILLS</Text>
				</Flex>

				<Flex mt="30px" flexWrap="wrap" gridGap={6} justify="flex-start">
					<Card
						heading={"ReactJS"}
						icon={<Icon as={FaReact} w={10} h={10} />}
						description={
							"Lorem ipsum dolor sit amet catetur, adipisicing elit."
						}
					/>

					<Card
						heading={"React Native"}
						icon={<Icon as={FaReact} w={10} h={10} />}
						description={
							"Lorem ipsum dolor sit amet catetur, adipisicing elit."
						}
					/>
					<Card
						heading={"Node JS"}
						icon={<Icon as={FaNodeJs} w={10} h={10} />}
						description={
							"Lorem ipsum dolor sit amet catetur, adipisicing elit."
						}
					/>
				</Flex>
			</Flex>
		</Container>
	)
}

export default Skills
