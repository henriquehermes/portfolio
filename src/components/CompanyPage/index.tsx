"use client"

import {
	Box,
	Button,
	Container,
	Flex,
	HStack,
	Heading,
	Icon,
	Image,
	SimpleGrid,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react"
import { PageData } from "@/interface/jobs"
import { FaCheckCircle } from "react-icons/fa"

export default function CompanyPage({ pageData }: { pageData: PageData }) {
	return (
		<Flex bgColor="#1b1f24" flexDir={"column"}>
			<Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
				<Flex p={8} flex={1} align={"center"} justify={"center"}>
					<Stack spacing={6} w={"full"} maxW={"lg"}>
						<Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
							<Image alt="logo" src={pageData.logo} mb="10px" />
							<Text color="#fff" as={"span"}>
								{pageData.company}
							</Text>
						</Heading>
						<Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
							{pageData.about}
						</Text>
						<Stack direction={{ base: "column", md: "row" }} spacing={4}>
							<Button
								as="a"
								href={pageData.website}
								rounded={"full"}
								bg={pageData.color}
								color={"white"}
							>
								Visit website
							</Button>
						</Stack>
					</Stack>
				</Flex>
				<Flex flex={1} justify={"center"} align={"center"}>
					<Flex h="270px" overflow={"hidden"} borderRadius={"28px"}>
						<Image
							h="auto"
							w="full"
							alt={"Login Image"}
							objectFit={"contain"}
							src={pageData.image}
						/>
					</Flex>
				</Flex>
			</Stack>

			<Box color="#fff" p={4}>
				<Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
					<Heading fontSize={{ base: "16px", md: "25px" }}>
						Duties and Responsibilities
					</Heading>
					<Text fontSize={{ base: "14px", md: "20px" }}>
						{pageData.dutiesAndResponsibilities}
					</Text>
				</Stack>

				<Flex w="full" mt={10}>
					<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
						{pageData.tasks.map((task) => (
							<HStack key={task} align={"top"}>
								<Box color={"green.400"} px={2}>
									<Icon as={FaCheckCircle} />
								</Box>
								<VStack align={"start"}>
									<Text fontSize={{ base: "14px", md: "17px" }}>
										{task}
									</Text>
								</VStack>
							</HStack>
						))}
					</SimpleGrid>
				</Flex>
			</Box>
		</Flex>
	)
}
