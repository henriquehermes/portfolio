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

export default function Contact() {
	const { hasCopied, onCopy } = useClipboard("example@example.com")

	return (
		<Flex
			minH={"100vh"}
			flexDir="column"
			color="#fff"
			bg={"rgba(45, 52, 63, .4)"}
			align="center"
			justify="center"
			id="contact"
		>
			<Box
				borderRadius="lg"
				m={{ base: 5, md: 16, lg: 10 }}
				p={{ base: 5, lg: 16 }}
			>
				<Box>
					<VStack spacing={{ base: 4, md: 8, lg: 10 }}>
						<Heading
							fontSize={{
								base: "4xl",
								md: "5xl",
							}}
						>
							Get in Touch
						</Heading>

						<Stack direction={{ base: "column" }}>
							<Stack
								mb="50px"
								mt="20px"
								align="center"
								justify="space-around"
								direction={{ base: "row" }}
							>
								<Tooltip
									label={hasCopied ? "Email Copied!" : "Copy Email"}
									closeOnClick={false}
									hasArrow
								>
									<IconButton
										aria-label="email"
										variant="ghost"
										size="lg"
										fontSize="3xl"
										icon={<MdEmail />}
										bgColor="#fff"
										_hover={{
											bg: "#075fe4",
											color: useColorModeValue("white", "gray.700"),
										}}
										onClick={onCopy}
										isRound
									/>
								</Tooltip>

								<Box as="a" href="#">
									<IconButton
										bgColor="#fff"
										aria-label="github"
										variant="ghost"
										size="lg"
										fontSize="3xl"
										icon={<BsGithub />}
										_hover={{
											bg: "#075fe4",
											color: useColorModeValue("white", "gray.700"),
										}}
										isRound
									/>
								</Box>

								<Box as="a" href="#">
									<IconButton
										bgColor="#fff"
										aria-label="linkedin"
										variant="ghost"
										size="lg"
										icon={<BsLinkedin size="28px" />}
										_hover={{
											bg: "#075fe4",
											color: useColorModeValue("white", "gray.700"),
										}}
										isRound
									/>
								</Box>
							</Stack>

							<Box
								bg={useColorModeValue("white", "gray.700")}
								borderRadius="lg"
								p={8}
								minW={{ base: "100%", md: "500px" }}
								color={useColorModeValue("gray.700", "whiteAlpha.900")}
								shadow="base"
							>
								<VStack spacing={5}>
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

									<Button
										bg="#075fe4"
										color="white"
										_hover={{
											bg: "blue.900",
										}}
										width="full"
									>
										Send Message
									</Button>
								</VStack>
							</Box>
						</Stack>
					</VStack>
				</Box>
			</Box>

			<Divider />
		</Flex>
	)
}
