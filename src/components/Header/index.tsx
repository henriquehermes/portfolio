"use client"

import {
	Box,
	Button,
	Flex,
	IconButton,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	keyframes,
	useMediaQuery,
} from "@chakra-ui/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { PiHamburger } from "react-icons/pi"

import Container from "../Layout/Container"


const Header = () => {
	const [isVisible, setIsVisible] = useState(false)

	const [isLargerThan900] = useMediaQuery("(min-width: 950px)")

	const shake = keyframes`
	  	0% { transform: rotate(0deg); }
		25% { transform: rotate(2deg); }
		50% { transform: rotate(0eg); }
		75% { transform: rotate(-2deg); }
		100% { transform: rotate(0deg); }
	`

	const handleScroll = () => {
		// Show the button when the user scrolls down
		if (window.scrollY > 300) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	useEffect(() => {
		// Add scroll event listener when the component mounts
		window.addEventListener("scroll", handleScroll)

		// Remove the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<Box
			pos={"fixed"}
			zIndex={9999}
			transition={"background 0.1s ease-in"}
			bgColor={!isVisible ? "#1b1f24" : "black"}
			w={"full"}
			color={"#fff"}
		>
			<Container
				transition={"background 0.1s ease-in"}
				bgColor={!isVisible ? "#1b1f24" : "black"}
				pb="0"
			>
				<Flex paddingY="14px" w="full" justifyContent="space-between">
					<Link href="/">
						<Flex h="full" width={"full"} align={"center"} gap="10px">
							<Image src="/site-logo.svg" alt="site-logo" />
							<Text
								color="white"
								fontWeight="bold"
								fontSize={{ base: "20px", md: "28px" }}
							>{`Henrique Hermes`}</Text>
						</Flex>
					</Link>

					{!isLargerThan900 ? (
						<Menu>
							<MenuButton
								as={IconButton}
								aria-label="Options"
								icon={<PiHamburger />}
								variant="outline"
								color="#fff"
								fontSize={"25px"}
								_active={{
									background: "white",
									color: "black",
								}}
							/>
							<MenuList fontSize={"20px"} color="black">
								<MenuItem
									onClick={() => {
										window.open(
											"https://drive.google.com/file/d/1hAYU0QfgqUs1XX2t-3n9-XBuQg_LqcSd/view?usp=sharing"
										)
									}}
								>
									Resume
								</MenuItem>

								<MenuItem>
									<Link href={"/#about"}>About</Link>
								</MenuItem>

								<MenuItem>
									<Link href={"/#skills"}>My Skills</Link>
								</MenuItem>

								<MenuItem>
									<Link href={"/#portfolio"}>My Portfolio</Link>
								</MenuItem>

								<MenuItem>
									<Link href={"#contact"}>Contact</Link>
								</MenuItem>
							</MenuList>
						</Menu>
					) : (
						<Flex gap={10}>
							<Button
								animation={`${shake} .2s ease infinite`}
								variant="unstyled"
								onClick={() => {
									window.open(
										"https://drive.google.com/file/d/1hAYU0QfgqUs1XX2t-3n9-XBuQg_LqcSd/view?usp=sharing"
									)
								}}
								_hover={{
									color: "#075fe4",
									textDecoration: "underline",
								}}
							>
								<Text
									fontSize={"20px"}
									color="#f0f2f4"
									_hover={{
										color: "#075fe4",
									}}
								>
									Resume
								</Text>
							</Button>

							<Link href={"/#about"}>
								<Button
									_hover={{
										color: "#075fe4",
										textDecoration: "underline",
									}}
									display="flex"
									variant="unstyled"
								>
									<Text fontSize={"20px"} color="#f0f2f4">
										About
									</Text>
								</Button>
							</Link>

							<Link href={"/#skills"}>
								<Button
									_hover={{
										color: "#075fe4",
										textDecoration: "underline",
									}}
									display="flex"
									variant="unstyled"
								>
									<Text fontSize={"20px"} color="#f0f2f4">
										My Skills
									</Text>
								</Button>
							</Link>

							<Link href={"/#portfolio"}>
								<Button
									_hover={{
										color: "#075fe4",
										textDecoration: "underline",
									}}
									display="flex"
									variant="unstyled"
								>
									<Text fontSize={"20px"} color="#f0f2f4">
										My Portfolio
									</Text>
								</Button>
							</Link>

							<Link href={"#contact"}>
								<Button
									_hover={{
										color: "#075fe4",
										textDecoration: "underline",
									}}
									display="flex"
									variant="unstyled"
								>
									<Text fontSize={"20px"} color="#f0f2f4">
										Contact
									</Text>
								</Button>
							</Link>
						</Flex>
					)}
				</Flex>
			</Container>
		</Box>
	)
}

export default Header
