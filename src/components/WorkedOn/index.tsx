import { Divider, Flex, Text } from "@chakra-ui/react"
import Container from "../Layout/Container"

const WorkedOn = () => {
	return (
		<Container>
			<Flex color="#fff" mt="150px" flexDir={"column"}>
				<Divider />

				<Flex my="88px">
					<Text lineHeight=".06em" fontSize="20px" fontWeight={"700"}>
						PREVIOUSLY WORKED ON
					</Text>
				</Flex>

				<Divider />
			</Flex>
		</Container>
	)
}

export default WorkedOn
