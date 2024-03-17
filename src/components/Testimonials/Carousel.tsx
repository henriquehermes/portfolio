"use client"

import React, { ReactElement } from "react"
import {
	Avatar,
	Box,
	Flex,
	Icon,
	IconButton,
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
	writer: string
	description: string
	icon: ReactElement
	position: string
}

const Card = ({ writer, description, icon, position }: CardProps) => {
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
				<Flex
					mb={{ base: "10px", lg: 0 }}
					align={"center"}
					justify={"center"}
					color={"white"}
					rounded={"full"}
					bgColor="#075FE4"
				>
					{icon}
				</Flex>
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
						fontSize={{ base: "18px", lg: "34px" }}
						fontWeight={700}
					>
						{description}
					</Text>

					<Flex
						fontWeight={700}
						fontSize={{ base: "14px", lg: "24px" }}
						gap={2}
					>
						<Text color="#075fe4">/</Text>
						<Text>{writer}</Text>
					</Flex>

					<Flex>
						<Text fontSize={{ base: "14px", lg: "20px" }} color="#c3cad5">
							{position}
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
	const cards = [1, 2, 3, 4]

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
				{cards.map((user, index) => (
					<Card
						key={index}
						writer={"Example " + index}
						icon={
							<Avatar
								h={{ base: 50, lg: 100 }}
								w={{ base: 50, lg: 100 }}
								src="https://bit.ly/broken-link"
							/>
						}
						description={
							"“We’ve never had come this far without Henrique’s great attention to detail and care for the final product”"
						}
						position="Manager"
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
