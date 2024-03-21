"use client"

import { PageData } from "@/interface/jobs"
import {
	Box,
	Button,
	Divider,
	Flex,
	HStack,
	Heading,
	Icon,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	SimpleGrid,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react"
import Link from "next/link"
import { useState } from "react"
import { FaCheckCircle } from "react-icons/fa"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

export default function CompanyPage({ pageData }: { pageData: PageData }) {
	const [fullPhoto, setFullPhoto] = useState<string | undefined>()

	return (
		<Flex bgColor="#1b1f24" flexDir={"column"}>
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

			<Flex flexDir={{ base: "column", md: "row" }} w="full" color={"#fff"}>
				<Flex
					gridColumnGap={"20px"}
					gridRowGap={"20px"}
					flexDir={"column"}
					flex={0.3}
				>
					<Text
						fontSize={{ base: "16px", md: "18px" }}
						fontWeight={500}
						letterSpacing={".1em"}
						color="#c3cad5"
					>
						CLIENT
					</Text>

					<Text
						mb="20px"
						fontSize={{ base: "20px", md: "24px" }}
						fontWeight={700}
						letterSpacing={".1em"}
						lineHeight={"1.083em"}
						color="#fff"
					>
						{pageData.client}
					</Text>

					<Text
						fontSize={{ base: "16px", md: "18px" }}
						fontWeight={500}
						letterSpacing={".1em"}
						color="#c3cad5"
					>
						DURATION
					</Text>

					<Text
						mb="20px"
						fontSize={{ base: "20px", md: "24px" }}
						fontWeight={700}
						letterSpacing={".1em"}
						lineHeight={"1.083em"}
						color="#fff"
					>
						{pageData.duration}
					</Text>

					<Text
						fontSize={{ base: "16px", md: "18px" }}
						fontWeight={500}
						letterSpacing={".1em"}
						color="#c3cad5"
					>
						WEBSITE
					</Text>

					<Text
						cursor={"pointer"}
						onClick={() => {
							window.open(pageData.website, "_blank")
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
						Click here
					</Text>
				</Flex>

				<Flex
					id="about-the-project"
					mt={{ base: "30px", md: 0 }}
					flexDir={"column"}
					flex={0.7}
				>
					<Text
						mb="24px"
						fontWeight={700}
						fontSize={{ base: "26px", md: "38px" }}
					>
						About the project
					</Text>

					<Text
						color="#c3cad5"
						mb="24px"
						lineHeight={"1.667em"}
						fontWeight={400}
						fontSize={{ base: "15px", md: "18px" }}
						whiteSpace={"pre-line"}
					>
						{pageData.dutiesAndResponsibilities}
					</Text>

					<Text
						my="24px"
						fontWeight={700}
						fontSize={{ base: "26px", md: "38px" }}
					>
						Duties and Responsibilities
					</Text>

					<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
						{pageData.tasks.map((task) => (
							<HStack key={task} align={"top"}>
								<Box color={"green.400"} px={2}>
									<Icon as={FaCheckCircle} />
								</Box>
								<VStack align={"start"}>
									<Text
										color="#c3cad5"
										fontSize={{ base: "14px", md: "17px" }}
									>
										{task}
									</Text>
								</VStack>
							</HStack>
						))}
					</SimpleGrid>

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

					{pageData.photos.length > 0 && (
						<>
							<Divider my="40px" />
							<Text
								mb="24px"
								fontWeight={700}
								fontSize={{ base: "26px", md: "38px" }}
							>
								Photos
							</Text>
							<SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
								{pageData.photos.map((photo, index) => (
									<HStack
										onClick={() => {
											setFullPhoto(photo)
										}}
										cursor={"pointer"}
										overflow={"hidden"}
										key={photo}
										align={"top"}
									>
										<Image
											borderRadius={"10px"}
											objectFit={"cover"}
											maxW={{ base: "200px", md: "200px" }}
											maxH={{ base: "200px", md: "200px" }}
											src={photo}
											alt={photo + index}
										/>
									</HStack>
								))}
							</SimpleGrid>
						</>
					)}
				</Flex>
			</Flex>

			<Modal
				isCentered
				onClose={() => {
					setFullPhoto(undefined)
				}}
				isOpen={!!fullPhoto}
			>
				<ModalOverlay backdropFilter="blur(10px)" />
				<ModalContent
					maxH={{ base: "80vh", md: "auto", lg: "80vh" }}
					maxW={{ base: "80vw", lg: "1000px" }}
					borderRadius={"20px"}
				>
					<ModalCloseButton />
					<ModalHeader />
					<ModalBody>
						<Flex
							overflow={"hidden"}
							justify={"center"}
							align={"center"}
							w="auto"
							maxH={{ base: "80vh", md: "auto", lg: "80vh" }}
						>
							<Image
								w="auto"
								h={"auto"}
								objectFit={"contain"}
								src={fullPhoto}
								alt={"full-image"}
								maxH={"60dvh"}
							/>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Flex>
	)
}
