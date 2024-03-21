"use client"

import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react"
import { useState } from "react"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import Slider from "react-slick"

import JSON from "./testimonials.json"

// Settings for the slider
const settings = {
	dots: false,
	arrows: false,
	fade: true,
	infinite: true,
	autoplay: true,
	speed: 500,
	autoplaySpeed: 7000,
	slidesToShow: 1,
	slidesToScroll: 1,
}

interface MessageProps {
	name: string
	linkedin: string
	photo: string
	message: string
}

const Message = ({ name, linkedin, photo, message }: MessageProps) => {
	return (
		<Box
			flexDir={{ base: "column", lg: "row" }}
			w={"full"}
			borderRadius="28px"
			overflow="hidden"
			p={2}
		>
			<Flex
				flexDir={{ base: "column", lg: "row" }}
				align={"start"}
				gap={{ base: 2, lg: 5 }}
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
						whiteSpace="pre-line"
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

export default function Messages() {
	const [slider, setSlider] = useState<Slider | null>(null)

	return (
		<Box height={"auto"} width={"full"} overflow={"hidden"}>
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

			<Flex
				mt="35px"
				mb="-15px"
				align={"center"}
				w="full"
				justify={"flex-end"}
				gap={4}
			>
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

			<Slider {...settings} ref={(slider) => setSlider(slider)}>
				{JSON.testimonials.map((user, index) => (
					<Message
						key={index}
						name={user.name}
						photo={user.photo}
						message={user.message}
						linkedin={user.linkedin}
					/>
				))}
			</Slider>
		</Box>
	)
}
