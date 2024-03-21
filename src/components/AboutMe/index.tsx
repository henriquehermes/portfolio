import { Flex, Text } from "@chakra-ui/react"
import Container from "../Layout/Container"

const AboutMe = () => {
	return (
		<Container>
			<Flex
				mt={{ base: 0, md: "50px", lg: 0 }}
				id="about"
				color="#fff"
				flexDir={"column"}
			>
				<Flex gap={15} fontWeight="700" fontSize={"20px"}>
					<Text color="#075fe4">/</Text>
					<Text>ABOUT ME</Text>
				</Flex>

				<Flex
					flexDir={{ base: "column", lg: "row" }}
					gridColumnGap="108px"
					gridRowGap={{ base: "20px", md: "80px" }}
					justify={"space-between"}
					mt="20px"
				>
					<Flex flex={1} flexDir="column">
						<Text
							lineHeight="1.231em"
							fontSize={{ base: "20px", md: "35px", lg: "52px" }}
							fontWeight={"700"}
						>
							I’ve been developing Front End applications since 2018
						</Text>
						<Text
							fontSize={{ base: "15px", lg: "18px" }}
							mt="10px"
							color="#c3cad5"
						>
							I am a Senior Frontend Developer, a leader in the field of
							web and mobile development, where I collaborate closely
							with cross-functional teams to deliver scalable and
							performant applications that meet the unique demands of
							each project. With over six years of professional
							experience, I have developed a strong expertise in ReactJS
							and React Native frameworks, as well as other technologies
							such as TypeScript, GraphQL, NextJS, and Storybook.
							<br /> <br />
							My passion for technology drives me to constantly learn new
							skills and explore innovative solutions so that I can enhance
							user experience and satisfaction. I am also committed
							to following best practices of software development,
							such as Agile principles, documentation, testing, and code
							quality. I enjoy working in a dynamic and collaborative
							environment, where I can contribute to the growth and
							success of the company and its clients.
						</Text>
					</Flex>

					<Flex flex={1} flexDir="column">
						<Text
							mt="10px"
							lineHeight="1.231em"
							fontSize={{ base: "20px", md: "32px" }}
							fontWeight={"700"}
						>
							6 Years of experience
							<br />5 Successful projects
						</Text>
						<Text
							fontSize={{ base: "15px", lg: "18px" }}
							mt="10px"
							color="#c3cad5"
						>
							With a rich portfolio spanning finance, electrical
							vehicles, banking, and e-commerce, my projects stand as a
							testament to my versatility and expertise. From pioneering
							apps in financial management to revolutionizing e-commerce
							platforms, each endeavor reflects meticulous attention to
							detail and a passion for innovation.
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</Container>
	)
}

export default AboutMe
