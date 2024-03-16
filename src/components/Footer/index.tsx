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
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { ReactNode } from "react"
import ContainerLayout from "../Layout/Container"
import { Image } from "@chakra-ui/next-js"

const SocialButton = ({
	children,
	label,
	href,
}: {
	children: ReactNode
	label: string
	href: string
}) => {
	return (
		<chakra.button
			bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
			rounded={"full"}
			w={8}
			h={8}
			cursor={"pointer"}
			as={"a"}
			href={href}
			display={"inline-flex"}
			alignItems={"center"}
			justifyContent={"center"}
			transition={"background 0.3s ease"}
			_hover={{
				bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	)
}

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
				<Container
					as={Stack}
					maxW={"6xl"}
					py={4}
					spacing={4}
					justify={"center"}
					align={"center"}
				>
					<Image
						alt="site-logo"
						width={50}
						height={50}
						src="/site-logo.svg"
					/>
					<Stack direction={"row"} spacing={6}>
						<Box as="a" href={"#"}>
							Home
						</Box>
						<Box as="a" href={"#"}>
							About
						</Box>
						<Box as="a" href={"#"}>
							Blog
						</Box>
						<Box as="a" href={"#"}>
							Contact
						</Box>
					</Stack>
				</Container>

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
						<Stack direction={"row"} spacing={6}>
							<SocialButton label={"Instagram"} href={"#"}>
								<FaInstagram />
							</SocialButton>
						</Stack>
					</Container>
				</Box>
			</Flex>
		</Box>
	)
}
