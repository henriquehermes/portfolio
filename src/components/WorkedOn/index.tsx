"use client"

import { Divider, Flex, Text } from "@chakra-ui/react"
import Container from "../Layout/Container"
import { Image } from "@chakra-ui/react"

const WorkedOn = () => {
	return (
		<Container>
			<Flex color="#fff" mt="150px" flexDir={"column"}>
				<Divider />

				<Flex flexDir={"column"} my="88px">
					<Text lineHeight=".06em" fontSize="20px" fontWeight={"700"}>
						PREVIOUSLY WORKED ON
					</Text>

					<Flex mt="50px" w="full" justify={"space-evenly"} gap={5}>
						<Flex align={"center"} flexDir={"column"}>
							<Image
								borderRadius={"20px"}
								src="/wevolt.jpeg"
								height={"auto"}
								width={"100px"}
								alt="wevolt"
							/>

							<Text mt="10px" fontWeight={700}>
								Wevolt
							</Text>
						</Flex>

						<Flex align={"center"} flexDir={"column"}>
							<Image
								borderRadius={"20px"}
								src="/darez.jpeg"
								height={"auto"}
								width={"100px"}
								alt="darez"
							/>

							<Text mt="10px" fontWeight={700}>
								Darez
							</Text>
						</Flex>

						<Flex align={"center"} flexDir={"column"}>
							<Image
								borderRadius={"20px"}
								src="/4all.jpeg"
								height={"auto"}
								width={"100px"}
								alt="4all"
							/>

							<Text mt="10px" fontWeight={700}>
								4all
							</Text>
						</Flex>

						<Flex align={"center"} flexDir={"column"}>
							<Image
								borderRadius={"20px"}
								src="/infrati.jpeg"
								height={"auto"}
								width={"100px"}
								alt="infrati"
							/>

							<Text mt="10px" fontWeight={700}>
								InfraTI
							</Text>
						</Flex>

						<Flex align={"center"} flexDir={"column"}>
							<Image
								borderRadius={"20px"}
								src="/1app.jpeg"
								height={"auto"}
								width={"100px"}
								alt="1app"
							/>

							<Text mt="10px" fontWeight={700}>
								1App
							</Text>
						</Flex>
					</Flex>
				</Flex>

				<Divider />
			</Flex>
		</Container>
	)
}

export default WorkedOn
