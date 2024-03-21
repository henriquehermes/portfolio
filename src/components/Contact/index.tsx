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
	const apiEndpoint = "/api/email"

	const { register, handleSubmit } = useForm<FormData>()

	async function onSubmit(data: FormData) {
		await fetch(apiEndpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then(() => {
				alert("Success! Your message has been sent!")
			})
			.catch((err) => {
				console.log(err)
			})
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

					<Flex w="full" gap={5} flex={1} flexDir="column">
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

							<FormControl isRequired>
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
				</Flex>
			</Container>
		</Flex>
	)
}
