"use client"

import { Flex, IconButton, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { IoDocumentText } from "react-icons/io5"
import Typewriter from "typewriter-effect"

import Container from "../Layout/Container"

const Introduction = () => {
	return (
		<Container justify={"center"} mt="70px" pb="0px" minH={"94vh"}>
			<Flex
				paddingTop={{ base: "30px", lg: "100px" }}
				gridColumnGap="108px"
				gridRowGap="80px"
				color="#c3cad5"
				flexDir={{ base: "column", md: "row" }}
			>
				<Flex flex={1} flexDir="column">
					<Flex
						fontSize={{ base: "30px", md: "50px", lg: "76px" }}
						fontWeight={700}
						lineHeight={"1.132em"}
						color="#fff"
						marginBottom="12px"
					>
						<Typewriter
							options={{
								autoStart: true,
								delay: 75,
							}}
							onInit={(typewriter) => {
								typewriter
									.typeString(
										"I’m Henrique, a<br />Senior Front End Developer"
									)
									.pauseFor(2500)
									.start()
							}}
						/>
					</Flex>

					<Text lineHeight="1.667em" fontSize="18px">
						ReactJS and React Native Engineer
					</Text>

					<Flex align={"center"}>
						<Text mr="5px" lineHeight="1.667em" fontSize="18px">
							Download my Resume{" "}
							<Text
								cursor={"pointer"}
								textDecor={"underline"}
								as={"a"}
								color="#075fe4"
								fontWeight="bold"
								onClick={() => {
									window.open(
										"https://drive.google.com/file/d/1KfF_KuTPhx9Qx05nRiSQGqXqGTwIQzTi/view?usp=sharing"
									)
								}}
							>
								here
							</Text>
						</Text>
						<IoDocumentText color="#075fe4" />
					</Flex>
				</Flex>

				<Flex flex={0.8} flexDir="column">
					<Text color="#fff" fontWeight={700}>
						ABOUT ME
					</Text>
					<motion.div
						initial={{
							opacity: 0,
							x: "150px",
						}}
						whileInView={{
							opacity: 1,
							x: "0px",
							transition: {
								duration: 0.5,
							},
						}}
					>
						<Text>
							With over six years of experience in ReactJS and React
							Native, I excel in crafting scalable applications through
							collaboration and innovation, driven by my passion for
							technology and commitment to best practices.
						</Text>
					</motion.div>

					<Flex flexDir="column" my="50px">
						<Text color="#fff" fontWeight={700}>
							MY WORK
						</Text>
						<motion.div
							initial={{
								opacity: 0,
								x: "150px",
							}}
							whileInView={{
								opacity: 1,
								x: "0px",
								transition: {
									duration: 0.7,
								},
							}}
						>
							<Text>
								Known for relentless dedication and tireless efforts, I
								embody the epitome of hard work, consistently surpassing
								expectations with unwavering commitment and diligence.
							</Text>
						</motion.div>
					</Flex>

					<Text color="#fff" fontWeight={700}>
						FOLLOW ME
					</Text>
					<motion.div
						initial={{
							opacity: 0,
							x: "150px",
						}}
						whileInView={{
							opacity: 1,
							x: "0px",
							transition: {
								duration: 0.9,
							},
						}}
					>
						<Flex gap={4} mt="5px">
							<IconButton
								onClick={() =>
									window.open(
										"https://www.linkedin.com/in/henrique-hermes-59703a121/",
										"_blank"
									)
								}
								borderRadius={"full"}
								fontSize={"25px"}
								icon={<FaLinkedinIn />}
								aria-label={"linkedin"}
							/>

							<IconButton
								onClick={() =>
									window.open(
										"https://github.com/henriquehermes",
										"_blank"
									)
								}
								borderRadius={"full"}
								fontSize={"25px"}
								icon={<FaGithub />}
								aria-label={"github"}
							/>
						</Flex>
					</motion.div>
				</Flex>
			</Flex>
		</Container>
	)
}

export default Introduction
