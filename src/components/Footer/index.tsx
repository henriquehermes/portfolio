"use client"

import {
	Box,
	chakra,
	Container,
	Flex,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden,
} from "@chakra-ui/react"
import { Image } from "@chakra-ui/next-js"
import { FaArrowRight } from "react-icons/fa"

export default function Footer() {
	return (
		<Box bgColor="#1b1f24" w={"full"} color={"#fff"}>
			<Flex
				px="24px"
				py="30px"
				mx="auto"
				maxW={"1200px"}
				w="full"
				height="full"
				flexDir="column"
			>
				<Flex mb="40px" maxW={"6xl"} py={4} align={"center"}>
					<Image
						alt="site-logo"
						width={150}
						borderRadius={"full"}
						height={150}
						src="/myself.png"
					/>

					<Flex flex={1} flexDir={"column"} ml="25px">
						<Text fontWeight={700} fontSize={"38px"}>
							Henrique Hermes
						</Text>
						<Text color="#8895aa" fontWeight={700} fontSize={"24px"}>
							Senior Front End Developer
						</Text>
					</Flex>

					<Flex flex={1} flexDir={"column"}>
						<Flex
							gap={2}
							align={"center"}
							mb="15px"
							fontWeight={700}
							fontSize={"38px"}
						>
							<Text as={"span"}>Get in touch </Text>
							<FaArrowRight color="#075fe4" />
						</Flex>

						<Text fontWeight={700} color="#c3cad5" fontSize={"16px"}>
							Email
						</Text>

						<Text
							onClick={() => {
								window.location.href =
									"mailto:henriquehermes97@gmail.com"
							}}
							fontWeight={700}
							fontSize={"22px"}
							lineHeight={"1.273em"}
							cursor={"pointer"}
							_hover={{
								textDecoration: "underline",
							}}
						>
							henriquehermes97@gmail.com
						</Text>

						<Text
							mt="15px"
							fontWeight={700}
							color="#c3cad5"
							fontSize={"16px"}
						>
							Call me
						</Text>

						<Text
							onClick={() => {
								window.location.href = "tel:+61424155244"
							}}
							fontWeight={700}
							fontSize={"22px"}
							lineHeight={"1.273em"}
							cursor={"pointer"}
							_hover={{
								textDecoration: "underline",
							}}
						>
							+61 424155244
						</Text>
					</Flex>
				</Flex>

				<Box
					borderTopWidth={1}
					borderStyle={"solid"}
					borderColor={useColorModeValue("gray.200", "gray.700")}
				>
					<Container
						as={Stack}
						maxW={"6xl"}
						py={4}
						direction={{ base: "column", md: "row" }}
						spacing={4}
						justify={{ base: "center", md: "space-between" }}
						align={{ base: "center", md: "center" }}
					>
						<Text>
							© 2024 Henrique Hermes Portfolio. All rights reserved
						</Text>
					</Container>
				</Box>
			</Flex>
		</Box>
	)
}
