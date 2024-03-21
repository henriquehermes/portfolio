"use client"

import { PageData } from "@/interface/jobs"
import { Divider, Flex, Text } from "@chakra-ui/react"

export default function Reference({ pageData }: { pageData: PageData }) {
	return (
		<Flex flexDir={"column"}>
			<Divider my="40px" />

			<Text
				mb="24px"
				fontWeight={700}
				fontSize={{ base: "26px", md: "38px" }}
			>
				Reference
			</Text>

			<Text
				fontSize={{ base: "16px", md: "18px" }}
				fontWeight={500}
				letterSpacing={".1em"}
				color="#c3cad5"
			>
				Name
			</Text>

			<Text
				mb="20px"
				fontSize={{ base: "20px", md: "24px" }}
				fontWeight={700}
				letterSpacing={".1em"}
				lineHeight={"1.083em"}
				color="#fff"
			>
				{pageData.reference.name}
			</Text>

			<Text
				fontSize={{ base: "16px", md: "18px" }}
				fontWeight={500}
				letterSpacing={".1em"}
				color="#c3cad5"
			>
				Phone
			</Text>

			<Text
				cursor={"pointer"}
				onClick={() => {
					window.location.href = `tel:${pageData.reference.number}`
				}}
				mb="20px"
				fontSize={{ base: "20px", md: "24px" }}
				fontWeight={700}
				letterSpacing={".1em"}
				lineHeight={"1.083em"}
				color="#fff"
				_hover={{
					textDecoration: "underline",
				}}
			>
				{pageData.reference.number}
			</Text>

			<Text
				fontSize={{ base: "16px", md: "18px" }}
				fontWeight={500}
				letterSpacing={".1em"}
				color="#c3cad5"
			>
				Email
			</Text>

			<Text
				cursor={"pointer"}
				onClick={() => {
					window.location.href = `mailto:${pageData.reference.email}`
				}}
				mb="20px"
				fontSize={{ base: "20px", md: "24px" }}
				fontWeight={700}
				letterSpacing={".1em"}
				lineHeight={"1.083em"}
				color="#fff"
				_hover={{
					textDecoration: "underline",
				}}
			>
				{pageData.reference.email}
			</Text>
		</Flex>
	)
}
