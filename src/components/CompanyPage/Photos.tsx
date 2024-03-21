"use client"

import { PageData } from "@/interface/jobs"
import {
	Divider,
	Flex,
	HStack,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	SimpleGrid,
	Text,
} from "@chakra-ui/react"
import { useState } from "react"

export default function Photos({ pageData }: { pageData: PageData }) {
	const [fullPhoto, setFullPhoto] = useState<string | undefined>()

	return (
		<Flex flexDir={"column"}>
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
