import { Flex, Text } from "@chakra-ui/react"
import Container from "../Layout/Container"

const AboutMe = () => {
	return (
		<Container>
			<Flex color="#fff" mt="150px" flexDir={"column"}>
				<Flex gap={15} fontWeight="700" fontSize={"20px"}>
					<Text color="#075fe4">/</Text>
					<Text>ABOUT ME</Text>
				</Flex>

				<Flex
					gridColumnGap="108px"
					gridRowGap="80px"
					justify={"space-between"}
					mt="20px"
				>
					<Flex flex={1} flexDir="column">
						<Text lineHeight="1.231em" fontSize="52px" fontWeight={"700"}>
							I’ve been developing websites since 2010
						</Text>
						<Text mt="10px" color="#c3cad5">
							Excepteur sint occaecat cupidatat non proident, sunt in
							culpa qui officia deserunt mollit anim id est laborum aute
							irure dolor in reprehenderit in voluptate velit esse cillum
							dolore eu fugiat.
						</Text>
					</Flex>

					<Flex flex={1} flexDir="column">
						<Text
							mt="10px"
							lineHeight="1.231em"
							fontSize="32px"
							fontWeight={"700"}
						>
							12 Years of experience
							<br />
							150 Successful projects
						</Text>
						<Text mt="10px" color="#c3cad5">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua ut enim ad minim veniam, quis nostrud exercitation.
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</Container>
	)
}

export default AboutMe
