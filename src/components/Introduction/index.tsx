import { Flex, Text } from "@chakra-ui/react"
import Container from "../Layout/Container"

const Introduction = () => {
	return (
		<Container>
			<Flex
				paddingTop="100px"
				gridColumnGap="108px"
				gridRowGap="80px"
				color="#c3cad5"
			>
				<Flex flexDir="column">
					<Text
						fontSize={{ base: "76px" }}
						fontWeight={700}
						lineHeight={"1.132em"}
						color="#fff"
						marginBottom="12px"
					>
						I’m Henrique, a<br />
						Senior Front End Developer
					</Text>

					<Text lineHeight="1.667em" fontSize="18px">
						Lorem ipsum dolor sit amet consectetur adipiscing elit leo
						quis ullamcorper quis id elementum convallis lacus gravida.
					</Text>
				</Flex>

				<Flex flexDir="column">
					<Text color="#fff" fontWeight={700}>
						ABOUT ME
					</Text>
					<Text>
						Lorem ipsum dolor sit amet consectetur adipiscing elit leo
						quis ullamcorper quis id elementum convallis lacus gravida.
					</Text>

					<Flex flexDir="column" my="50px">
						<Text color="#fff" fontWeight={700}>
							MY WORK
						</Text>
						<Text>
							Lorem ipsum dolor sit amet consectetur adipiscing elit leo
							quis ullamcorper quis id elementum convallis lacus gravida.
						</Text>
					</Flex>

					<Text color="#fff" fontWeight={700}>
						FOLLOW ME
					</Text>
				</Flex>
			</Flex>
		</Container>
	)
}

export default Introduction
