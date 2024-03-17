"use client"

import React, { ReactElement } from "react"
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
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import Slider from "react-slick"

// Settings for the slider
const settings = {
	dots: false,
	arrows: false,
	fade: true,
	infinite: true,
	autoplay: true,
	speed: 500,
	autoplaySpeed: 5000,
	slidesToShow: 1,
	slidesToScroll: 1,
}

interface CardProps {
	company: string
	image1: string
	image2: string
	link: string
}

const Card = ({ company, image1, image2, link }: CardProps) => {
	return (
		<Box
			flexDir={{ base: "column", lg: "row" }}
			w={"full"}
			borderRadius="28px"
			overflow="hidden"
			p={5}
		>
			<Flex
				flexDirection={"column"}
				borderRadius={"28px"}
				w={"full"}
				bgColor="#2d343f"
				align={"start"}
				overflow="hidden"
			>
				<Flex flexDir="column" padding={{ base: "15px", lg: "28px" }}>
					<Text
						lineHeight={"1.441em"}
						fontSize={{ base: "18px", lg: "34px" }}
						fontWeight={700}
					>
						{company}
					</Text>

					<Text as="a" href={link} fontSize={{ base: "13px", lg: "17px" }}>
						{link}
					</Text>
				</Flex>

				<Flex flexDir={"column"}>
					<Image src={image1} alt="image1" />

					<Image src={image2} alt="image2" />
				</Flex>
			</Flex>
		</Box>
	)
}

export default function Carousel() {
	const [slider, setSlider] = React.useState<Slider | null>(null)

	const jobs = [
		{
			company: "Wevolt",
			image1: "/webp/wevolt.webp",
			image2: "/webp/wevolt-2.webp",
			link: "https://wevolt.com.au",
		},
		{
			company: "Darez",
			image1: "/webp/dolado.webp",
			image2: "/webp/dolado-2.webp",
			link: "https://www.dolado.com.br",
		},
		{
			company: "4all",
			image1: "/webp/4all.webp",
			image2: "/webp/4all-2.webp",
			link: "https://4all.com",
		},
		{
			company: "InfraTI",
			image1: "/webp/infrati.webp",
			image2: "/webp/infrati-2.webp",
			link: "https://infrati.com.br",
		},
		{
			company: "1App",
			image1: "/webp/1app.webp",
			image2: "/webp/1app-2.webp",
			link: "https://www.facebook.com/1appDigital",
		},
	]

	return (
		<Box
			position={"relative"}
			height={"auto"}
			width={"full"}
			overflow={"hidden"}
		>
			{/* CSS files for react-slick */}
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
			/>
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
			/>

			<Flex mt="50px" w="full" justify={"flex-end"} gap={4}>
				{/* Left Icon */}
				<IconButton
					aria-label="left-arrow"
					bgColor="#075fe4"
					color="#fff"
					borderRadius="full"
					h={"65px"}
					w={"65px"}
					transform={"translate(0%, -50%)"}
					zIndex={2}
					onClick={() => slider?.slickPrev()}
					fontSize={"40px"}
				>
					<BiLeftArrowAlt />
				</IconButton>
				{/* Right Icon */}
				<IconButton
					fontSize={"40px"}
					aria-label="right-arrow"
					bgColor="#075fe4"
					color="#fff"
					h={"65px"}
					w={"65px"}
					borderRadius="full"
					transform={"translate(0%, -50%)"}
					zIndex={2}
					onClick={() => slider?.slickNext()}
				>
					<BiRightArrowAlt />
				</IconButton>
			</Flex>

			{/* Slider */}
			<Slider {...settings} ref={(slider) => setSlider(slider)}>
				{jobs.map((job, index) => (
					<Card
						key={index}
						company={job.company}
						image1={job.image1}
						image2={job.image2}
						link={job.link}
					/>
				))}
			</Slider>
		</Box>
	)
}
