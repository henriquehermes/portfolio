"use client"

import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react"
import Link from "next/link"

interface CardProps {
	company: string
	image1: string
	link: string
}

const Card = ({ company, image1, link }: CardProps) => {
	const [isLowerThan768] = useMediaQuery("(max-width: 768px)")

	return (
		<Box
			flexDir={{ base: "column", lg: "row" }}
			maxW={{ base: "200px", md: "275px" }}
			maxH={{ base: "200px", md: "auto" }}
			w={"full"}
			borderRadius="28px"
			overflow="hidden"
			bgColor="#2d343f"
			transition="all .2s ease-in-out"
			cursor={"pointer"}
			_hover={{
				transform: !isLowerThan768 ? "scale(1.1)" : "",
				bgColor: "rgba(7,95,228,0.75)",
				color: "#fff",
			}}
		>
			<Link href={link}>
				<Flex flexDir="column" padding={{ base: "15px", lg: "20px" }}>
					<Text
						lineHeight={"1.441em"}
						fontSize={{ base: "18px", lg: "25px" }}
						fontWeight={700}
					>
						{company}
					</Text>
				</Flex>

				<Image
					objectFit={"cover"}
					h="full"
					w="full"
					src={image1}
					alt="image1"
				/>
			</Link>
		</Box>
	)
}

export default function Carousel() {
	const jobs = [
		{
			company: "Wevolt",
			image1: "/webp/wevolt.webp",
			link: "/jobs/wevolt",
		},
		{
			company: "Darez",
			image1: "/webp/dolado.webp",
			link: "/jobs/darez",
		},
		{
			company: "4all",
			image1: "/webp/4all.webp",
			link: "/jobs/4all",
		},
		{
			company: "InfraTI",
			image1: "/webp/infrati.webp",
			link: "/jobs/infrati",
		},
		{
			company: "1App",
			image1: "/webp/1app.webp",
			link: "/jobs/1app",
		},
	]

	return (
		<Flex justify={"center"} align={"center"} height={"auto"} width={"full"}>
			<Flex
				mt="40px"
				maxW={"5xl"}
				flexWrap="wrap"
				gridGap={{ base: 7, md: 10 }}
				justify="center"
			>
				{jobs.map((job, index) => (
					<Card
						key={index}
						company={job.company}
						image1={job.image1}
						link={job.link}
					/>
				))}
			</Flex>
		</Flex>
	)
}
