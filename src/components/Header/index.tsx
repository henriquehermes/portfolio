import {
	Box,
	Button,
	Flex,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useMediaQuery,
} from "@chakra-ui/react"
import Container from "../Layout/Container"
import { PiHamburger } from "react-icons/pi"

const Header = () => {
	const [isLargerThan900] = useMediaQuery("(min-width: 950px)")

	return (
		<Box bgColor="#1b1f24" w={"full"} color={"#fff"}>
			<Container>
				<Flex paddingY="36px" w="full" justifyContent="space-between">
					<Flex gap="10px">
						<Text
							color="#075fe4"
							fontWeight="bold"
							fontSize="28px"
						>{`</>`}</Text>
						<Text
							color="white"
							fontWeight="bold"
							fontSize="28px"
						>{`Henrique Hermes`}</Text>
					</Flex>

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
											"https://drive.google.com/file/d/1G5uPxvGYrfrClmnWqMQ-e4m5_zi0Xkbq/view"
										)
									}}
								>
									Resume
								</MenuItem>

								<MenuItem as="a" href="#about">
									About
								</MenuItem>

								<MenuItem as="a" href="#skills">
									My Skills
								</MenuItem>

								<MenuItem as="a" href="#portfolio">
									My Portfolio
								</MenuItem>

								<MenuItem as="a" href="#contact">
									Contact
								</MenuItem>
							</MenuList>
						</Menu>
					) : (
						<Flex gap={10}>
							<Button
								variant="unstyled"
								onClick={() => {
									window.open(
										"https://drive.google.com/file/d/1G5uPxvGYrfrClmnWqMQ-e4m5_zi0Xkbq/view"
									)
								}}
							>
								<Text fontSize={"20px"} color="#f0f2f4">
									Resume
								</Text>
							</Button>

							<Button
								display="flex"
								as={"a"}
								href={"#about"}
								variant="unstyled"
							>
								<Text fontSize={"20px"} color="#f0f2f4">
									About
								</Text>
							</Button>

							<Button
								display="flex"
								as={"a"}
								href={"#skills"}
								variant="unstyled"
							>
								<Text fontSize={"20px"} color="#f0f2f4">
									My Skills
								</Text>
							</Button>

							<Button
								display="flex"
								as={"a"}
								href={"#portfolio"}
								variant="unstyled"
							>
								<Text fontSize={"20px"} color="#f0f2f4">
									My Portfolio
								</Text>
							</Button>

							<Button
								display="flex"
								as={"a"}
								href={"#contact"}
								variant="unstyled"
							>
								<Text fontSize={"20px"} color="#f0f2f4">
									Contact
								</Text>
							</Button>
						</Flex>
					)}
				</Flex>
			</Container>
		</Box>
	)
}

export default Header
