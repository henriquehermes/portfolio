import { Box, Button, Flex, Text } from "@chakra-ui/react"
import Container from "../Layout/Container"

const Header = () => {
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

					<Flex display={{ base: "none", md: "flex" }} gap={10}>
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

						<Button variant="unstyled">
							<Text fontSize={"20px"} color="#f0f2f4">
								About
							</Text>
						</Button>

						<Button variant="unstyled">
							<Text fontSize={"20px"} color="#f0f2f4">
								My Skills
							</Text>
						</Button>

						<Button variant="unstyled">
							<Text fontSize={"20px"} color="#f0f2f4">
								My Portfolio
							</Text>
						</Button>

						<Button variant="unstyled">
							<Text fontSize={"20px"} color="#f0f2f4">
								Contact
							</Text>
						</Button>
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

export default Header
