"use client"

import { FaCheckCircle } from "react-icons/fa"

import { PageData } from "@/interface/jobs"
import {
	Box,
	Flex,
	HStack,
	Icon,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react"
import { motion } from "framer-motion"

import Photos from "./Photos"
import Reference from "./Reference"

export default function Description({ pageData }: { pageData: PageData }) {
	return (
		<Flex flexDir={{ base: "column", md: "row" }} w="full" color={"#fff"}>
			<Flex
				gridColumnGap={"20px"}
				gridRowGap={"20px"}
				flexDir={"column"}
				flex={0.3}
			>
				<motion.div
					initial={{
						opacity: 0,
						x: "-150px",
					}}
					whileInView={{
						opacity: 1,
						x: "0px",
						transition: {
							duration: 0.5,
						},
					}}
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
				</motion.div>
			</Flex>

			<Flex
				id="about-the-project"
				mt={{ base: "30px", md: 0 }}
				flexDir={"column"}
				flex={0.7}
			>
				<motion.div
					initial={{
						opacity: 0,
						y: "50px",
					}}
					whileInView={{
						opacity: 1,
						y: "0px",
						transition: {
							duration: 0.5,
						},
					}}
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
				</motion.div>

				<motion.div
					initial={{
						opacity: 0,
						y: "50px",
					}}
					whileInView={{
						opacity: 1,
						y: "0px",
						transition: {
							duration: 0.5,
						},
					}}
				>
					<Text
						my="24px"
						fontWeight={700}
						fontSize={{ base: "26px", md: "38px" }}
					>
						Duties and Responsibilities
					</Text>
				</motion.div>

				<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
					{pageData.tasks.map((task) => (
						<motion.div
							key={task}
							initial={{
								opacity: 0,
								y: "50px",
							}}
							whileInView={{
								opacity: 1,
								y: "0px",
								transition: {
									duration: 0.5,
								},
							}}
						>
							<HStack align={"top"}>
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
						</motion.div>
					))}
				</SimpleGrid>

				<motion.div
					initial={{
						opacity: 0,
						y: "150px",
					}}
					whileInView={{
						opacity: 1,
						y: "0px",
						transition: {
							duration: 0.5,
						},
					}}
				>
					<Reference pageData={pageData} />
				</motion.div>

				<motion.div
					initial={{
						opacity: 0,
						y: "150px",
					}}
					whileInView={{
						opacity: 1,
						y: "0px",
						transition: {
							duration: 0.5,
						},
					}}
				>
					<Photos pageData={pageData} />
				</motion.div>
			</Flex>
		</Flex>
	)
}
