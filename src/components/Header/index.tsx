import { Button, Flex, Text } from "@chakra-ui/react"
import Container from "../Layout/Container"

const Header = () => {
	return (
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

				<Flex gap={10}>
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
				</Flex>
			</Flex>
		</Container>
	)
}

export default Header
