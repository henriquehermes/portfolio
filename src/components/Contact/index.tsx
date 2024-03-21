"use client"

import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
	Textarea,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { BsPerson } from "react-icons/bs"
import { FaArrowRight } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"

import Container from "../Layout/Container"

export type FormData = {
	name: string
	email: string
	message: string
}

export default function Contact() {
	const { register, handleSubmit } = useForm<FormData>()

	async function onSubmit(data: FormData) {
		const subject = encodeURIComponent(`${data.name} - ${data.email}`)
		const body = encodeURIComponent(data.message.replace(/\n/g, "%0D%0A"))
		window.location.assign(
			`mailto:henriquehermes97@gmail.com?subject=${subject}&body=${body}`
		)
	}

	return (
		<Flex
			id="contact"
			justify={"center"}
			align={"center"}
			minH={"100vh"}
			flexDir={"column"}
			bg={"rgba(45, 52, 63, .4)"}
		>
			<Container
				color="#fff"
				flexDir={{ base: "column", md: "row" }}
				bg={"transparent"}
				gridColumnGap="108px"
				gridRowGap={{ base: "30px", md: "50px", lg: "80px" }}
				w="full"
				h="full"
				justify="space-between"
			>
				<Flex
					fontSize={{ base: "25px", md: "35px", lg: "52px" }}
					fontWeight={700}
					lineHeight={{ base: "1em", md: "1.231em" }}
					flexDir={"column"}
					flex={1}
				>
					<Text>Interested in working together?</Text>
					<Text mt="10px">
						Let’s talk <FaArrowRight color="#075fe4" />
					</Text>
				</Flex>

				<Flex w="full" flex={1} flexDir="column">
					<form onSubmit={handleSubmit(onSubmit)}>
						<FormControl isRequired>
							<FormLabel>Name</FormLabel>

							<InputGroup>
								<InputLeftElement>
									<BsPerson />
								</InputLeftElement>
								<Input
									type="text"
									placeholder="Your Name"
									{...register("name", { required: true })}
								/>
							</InputGroup>
						</FormControl>

						<FormControl my="15px" isRequired>
							<FormLabel>Email</FormLabel>

							<InputGroup>
								<InputLeftElement>
									<MdOutlineEmail />
								</InputLeftElement>
								<Input
									type="email"
									placeholder="Your Email"
									{...register("email", { required: true })}
								/>
							</InputGroup>
						</FormControl>

						<FormControl isRequired>
							<FormLabel>Message</FormLabel>

							<Textarea
								placeholder="Your Message"
								rows={6}
								resize="none"
								{...register("message", { required: true })}
							/>
						</FormControl>

						<Button
							type="submit"
							mt="15px"
							bg="#075fe4"
							color="white"
							width="full"
						>
							Send Message
						</Button>
					</form>
				</Flex>
			</Container>
		</Flex>
	)
}
