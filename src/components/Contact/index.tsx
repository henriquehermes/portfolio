"use client"

import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
	Stack,
	Textarea,
	Tooltip,
	useClipboard,
	useColorModeValue,
	VStack,
	Divider,
} from "@chakra-ui/react"
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs"
import { MdEmail, MdOutlineEmail } from "react-icons/md"
import Container from "../Layout/Container"
import { FaArrowRight } from "react-icons/fa"

export default function Contact() {
	const { hasCopied, onCopy } = useClipboard("example@example.com")

	return (
		<Flex
			justify={"center"}
			align={"center"}
			minH={"100vh"}
			flexDir={"column"}
			bg={"rgba(45, 52, 63, .4)"}
		>
			<Container
				color="#fff"
				pb="0px"
				flexDir={"column"}
				bg={"transparent"}
				id="contact"
				h="full"
			>
				<Flex
					gridColumnGap="108px"
					gridRowGap="80px"
					w="full"
					justify="space-between"
				>
					<Flex
						fontSize={"52px"}
						fontWeight={700}
						lineHeight={"1.231em"}
						flexDir={"column"}
						flex={1}
					>
						<Text>Interested in working together?</Text>
						<Text mt="10px">
							Let’s talk <FaArrowRight color="#075fe4" />
						</Text>
					</Flex>

					<Flex gap={5} flex={1} flexDir="column">
						<FormControl isRequired>
							<FormLabel>Name</FormLabel>

							<InputGroup>
								<InputLeftElement>
									<BsPerson />
								</InputLeftElement>
								<Input
									type="text"
									name="name"
									placeholder="Your Name"
								/>
							</InputGroup>
						</FormControl>

						<FormControl isRequired>
							<FormLabel>Email</FormLabel>

							<InputGroup>
								<InputLeftElement>
									<MdOutlineEmail />
								</InputLeftElement>
								<Input
									type="email"
									name="email"
									placeholder="Your Email"
								/>
							</InputGroup>
						</FormControl>

						<FormControl isRequired>
							<FormLabel>Message</FormLabel>

							<Textarea
								name="message"
								placeholder="Your Message"
								rows={6}
								resize="none"
							/>
						</FormControl>

						<Button mt="15px" bg="#075fe4" color="white" width="full">
							Send Message
						</Button>
					</Flex>
				</Flex>
			</Container>
		</Flex>
	)
}
