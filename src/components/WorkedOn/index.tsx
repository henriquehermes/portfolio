"use client"

import { Divider, Flex, Text } from "@chakra-ui/react"
import Container from "../Layout/Container"
import { Image } from "@chakra-ui/react"

const Company = ({
	image,
	name,
	url,
	country,
}: {
	image: string
	name: string
	url: string
	country: string
}) => {
	return (
		<Flex
			transition="all .2s ease-in-out"
			cursor={"pointer"}
			_hover={{
				transform: "scale(1.2)",
				textDecoration: "underline",
			}}
			align={"center"}
			flexDir={"column"}
			onClick={() =>
				window.open(`https://www.linkedin.com/company/${url}/`, "_blank")
			}
		>
			<Image
				filter={"grayscale(100%)"}
				_hover={{
					filter: "grayscale(0%)",
				}}
				borderRadius={"20px"}
				src={image}
				height={"auto"}
				width={"100px"}
				alt={name}
			/>

			<Text mt="10px" fontWeight={700}>
				{name}
			</Text>

			<Text mt="5px">{country}</Text>
		</Flex>
	)
}

const WorkedOn = () => {
	return (
		<Container>
			<Flex
				color="#fff"
				mt={{ base: "80px", md: "150px" }}
				flexDir={"column"}
			>
				<Divider />

				<Flex flexDir={"column"} my={{ base: "30px", md: "88px" }}>
					<Flex gap={15} fontWeight="700" fontSize={"20px"}>
						<Text color="#075fe4">/</Text>
						<Text>PREVIOUSLY WORKED ON</Text>
					</Flex>

					<Flex
						flexDir={"row"}
						mt="50px"
						w="full"
						flexWrap={"wrap"}
						justify={"space-evenly"}
						gap={{ base: 2, md: 5 }}
					>
						<Company
							image="/wevolt.jpeg"
							name="Wevolt"
							url="wevoltau"
							country="🇦🇺"
						/>
						<Company
							image="/darez.png"
							name="Darez"
							url="dolado"
							country="🇧🇷"
						/>
						<Company
							image="/4all.jpeg"
							name="4all"
							url="4all-tecnologia"
							country="🇧🇷"
						/>
						<Company
							image="/infrati.jpeg"
							name="InfraTI"
							url="infrati"
							country="🇧🇷"
						/>
						<Company
							image="/1app.jpeg"
							name="1App"
							url="1app-developer"
							country="🇧🇷"
						/>
					</Flex>
				</Flex>

				<Divider />
			</Flex>
		</Container>
	)
}

export default WorkedOn
