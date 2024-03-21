"use client"

import { Box, Image, Container, Flex, Stack, Text } from "@chakra-ui/react"
import { FaArrowRight } from "react-icons/fa"

export default function Footer() {
	return (
		<Box
			borderTopColor={"#5d6c83"}
			borderTopWidth={1}
			borderTopStyle={"solid"}
			bgColor="#1b1f24"
			w={"full"}
			color={"#fff"}
			id="contact"
		>
			<Flex
				px={{ base: "12px", lg: "24px" }}
				py={{ base: "10px", lg: "30px" }}
				mx="auto"
				maxW={"1200px"}
				w="full"
				height="full"
				flexDir="column"
			>
				<Flex
					flexDir={{ base: "column", md: "row" }}
					mb={{ base: "10px", lg: "40px" }}
					maxW={"6xl"}
					py={4}
					align={"center"}
					justify={{ base: "center", md: "flex-start" }}
				>
					<Image
						alt="site-logo"
						width={{ base: 70, lg: 150 }}
						borderRadius={"full"}
						height={{ base: 70, lg: 150 }}
						src="/myself.png"
					/>

					<Flex
						mt={{ base: "10px", md: 0 }}
						textAlign={{ base: "center", md: "left" }}
						flex={1}
						flexDir={"column"}
						ml={{ base: 0, md: "25px" }}
					>
						<Text
							fontWeight={700}
							fontSize={{ base: "18px", lg: "38px" }}
						>
							Henrique Hermes
						</Text>
						<Text
							color="#8895aa"
							fontWeight={700}
							fontSize={{ base: "16px", lg: "24px" }}
						>
							Senior Front End Developer
						</Text>
					</Flex>

					<Flex
						textAlign={{ base: "center", lg: "left" }}
						mt={{ base: "15px", md: 0 }}
						flex={1}
						flexDir={"column"}
					>
						<Flex
							justify={{ base: "center", lg: "flex-start" }}
							gap={2}
							align={"center"}
							mb="15px"
							fontWeight={700}
							fontSize={{ base: "18px", lg: "38px" }}
						>
							<Text as={"span"}>Get in touch </Text>
							<FaArrowRight color="#075fe4" />
						</Flex>

						<Text
							fontWeight={700}
							color="#c3cad5"
							fontSize={{ base: "14px", lg: "16px" }}
						>
							Email
						</Text>

						<Text
							onClick={() => {
								window.location.href =
									"mailto:henriquehermes97@gmail.com"
							}}
							fontWeight={700}
							fontSize={{ base: "18px", lg: "22px" }}
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
							fontSize={{ base: "14px", lg: "16px" }}
						>
							Call me
						</Text>

						<Text
							onClick={() => {
								window.location.href = "tel:+61424155244"
							}}
							fontWeight={700}
							fontSize={{ base: "18px", lg: "22px" }}
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

				<Box borderTopWidth={1} borderStyle={"solid"}>
					<Container
						as={Stack}
						maxW={"6xl"}
						py={4}
						direction={{ base: "column", lg: "row" }}
						spacing={4}
						justify={{ base: "center", lg: "space-between" }}
						align={{ base: "center", lg: "center" }}
					>
						<Text fontSize={{ base: "14px", lg: "16px" }}>
							© 2024 Henrique Hermes Portfolio. All rights reserved
						</Text>
					</Container>
				</Box>
			</Flex>
		</Box>
	)
}
