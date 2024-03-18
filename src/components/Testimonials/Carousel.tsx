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
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
// And react-slick as our Carousel Lib
import Slider from "react-slick"
import { FaReact } from "react-icons/fa"

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
	name: string
	linkedin: string
	photo: string
	message: string
}

const Card = ({ name, linkedin, photo, message }: CardProps) => {
	return (
		<Box
			flexDir={{ base: "column", lg: "row" }}
			w={"full"}
			borderRadius="28px"
			overflow="hidden"
			p={5}
		>
			<Flex
				flexDir={{ base: "column", lg: "row" }}
				align={"start"}
				gap={{ base: 2, lg: 20 }}
			>
				<Image
					src={photo}
					alt={name}
					w={{ base: "60px", md: "100px" }}
					height={{ base: "60px", md: "100px" }}
					mb={{ base: "10px", lg: 0 }}
					rounded={"full"}
					bgColor="#075FE4"
				/>
				<Flex
					flexDirection={"column"}
					borderRadius={"28px"}
					padding={{ base: "15px", lg: "28px" }}
					w={"full"}
					bgColor="#2d343f"
				>
					<Text
						mb="15px"
						lineHeight={"1.441em"}
						fontSize={{ base: "18px", lg: "20px" }}
						fontWeight={700}
					>
						{message}
					</Text>

					<Flex
						fontWeight={700}
						fontSize={{ base: "14px", lg: "24px" }}
						gap={2}
					>
						<Text color="#075fe4">/</Text>
						<Text>{name}</Text>
					</Flex>

					<Flex>
						<Text
							as={"a"}
							href={linkedin}
							fontSize={{ base: "14px", lg: "16px" }}
							color="#c3cad5"
						>
							{linkedin}
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	)
}

export default function Carousel() {
	// As we have used custom buttons, we need a reference variable to
	// change the state
	const [slider, setSlider] = React.useState<Slider | null>(null)

	// These are the breakpoints which changes the position of the
	// buttons as the screen size changes
	const top = useBreakpointValue({ base: "90%", md: "55%" })

	// These are the images used in the slide
	const testimonials = [
		{
			name: "Diego Pereira dos Santos",
			photo: "/webp/diego.webp",
			linkedin:
				"https://www.linkedin.com/in/diego-pereira-dos-santos-b7790218a",
			message:
				"I am immensely grateful to have had Henrique as my mentor. His guidance and support were essential to my growth as a frontend developer. He demonstrates deep technical knowledge and a remarkable ability to solve complex problems. He was always available to offer guidance and support, helping me enhance my skills. It was a pleasure working with you at Wevolt. Thank you, my friend.",
		},
		{
			name: "Olavio Lacerda 🚀",
			photo: "/webp/olavio.webp",
			linkedin: "https://www.linkedin.com/in/olaviolacerda",
			message:
				"I had the pleasure of working closely with Henrique for approximately two years, and I can confidently say he is an outstanding colleague and a highly skilled developer. Henrique's focus and dedication to his work are truly commendable, and his expertise in React.js is exemplary. He consistently delivers high-quality results and demonstrates a deep understanding of complex technical concepts. I highly recommend Henrique for any project or team looking to excel in React.js development.",
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
			{/* Slider */}
			<Slider {...settings} ref={(slider) => setSlider(slider)}>
				{testimonials.map((user, index) => (
					<Card
						key={index}
						name={user.name}
						photo={user.photo}
						message={user.message}
						linkedin={user.linkedin}
					/>
				))}
			</Slider>

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
		</Box>
	)
}
