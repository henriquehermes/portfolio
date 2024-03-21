"use client"

import { PageData } from "@/interface/jobs"
import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react"
import Link from "next/link"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

export default function Hero({ pageData }: { pageData: PageData }) {
	return (
		<Flex flexDir={"column"}>
			<Stack
				my={{ base: "100px", md: "150px" }}
				direction={{ base: "column", md: "row" }}
			>
				<Flex
					p={{ base: 0, md: 8 }}
					flex={1}
					align={"center"}
					justify={{ base: "flex-start", md: "center" }}
				>
					<Stack spacing={6} w={"full"} maxW={"lg"}>
						<Heading>
							<Flex
								w="full"
								bgColor={pageData.color}
								h="8px"
								maxW={"148px"}
								marginBottom={"48px"}
							/>

							<Image
								maxH="100px"
								alt="logo"
								src={pageData.logo}
								mb="10px"
							/>
							<Text
								fontSize={{ base: "36px", md: "76px" }}
								color="#fff"
								as={"span"}
							>
								{pageData.company}
							</Text>
						</Heading>
						<Text
							fontWeight={400}
							lineHeight={"1.667em"}
							fontSize={{
								base: "16px",
								md: "20px",
							}}
							color={"#c3cad5"}
							whiteSpace="pre-line"
						>
							{pageData.about}
						</Text>
					</Stack>
				</Flex>
				<Flex
					mt={{ base: "25px", md: 0 }}
					flex={1}
					justify={{ base: "flex-start", md: "flex-end" }}
					align={"flex-end"}
				>
					<Link href={"#about-the-project"}>
						<Button
							justifyContent={"center"}
							alignItems={"center"}
							borderRadius={"full"}
							w={{ base: "66px", md: "88px" }}
							h={{ base: "66px", md: "88px" }}
							bgColor={pageData.color}
							transition="all 0.3s"
							_hover={{
								transform: "scale(0.9)",
							}}
							color="#fff"
							fontSize={"50px"}
						>
							<MdOutlineKeyboardArrowDown />
						</Button>
					</Link>
				</Flex>
			</Stack>
		</Flex>
	)
}
