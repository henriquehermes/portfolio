"use client"

import React from "react"
import {
	Avatar,
	Box,
	Flex,
	Icon,
	IconButton,
	Image,
	Stack,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react"
import Link from "next/link"

interface CardProps {
	company: string
	image1: string
	link: string
}

const Card = ({ company, image1, link }: CardProps) => {
	return (
		<Box
			flexDir={{ base: "column", lg: "row" }}
			maxW={{ base: "full", md: "275px" }}
			w={"full"}
			borderRadius="28px"
			overflow="hidden"
			bgColor="#2d343f"
			transition="all .2s ease-in-out"
			cursor={"pointer"}
			_hover={{
				transform: "scale(1.1)",
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
		<Box height={"auto"} width={"full"}>
			<Flex
				mt="40px"
				maxW={"5xl"}
				flexWrap="wrap"
				gridGap={10}
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
		</Box>
	)
}
