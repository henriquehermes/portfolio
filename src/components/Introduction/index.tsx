"use client"

import { Flex, Icon, IconButton, Text } from "@chakra-ui/react"
import Container from "../Layout/Container"
import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { IoDocumentText } from "react-icons/io5"

const Introduction = () => {
	return (
		<Container pb="0px" minH={"100vh"}>
			<Flex
				paddingTop={{ base: "30px", md: "100px" }}
				gridColumnGap="108px"
				gridRowGap="80px"
				color="#c3cad5"
				flexDir={{ base: "column", md: "row" }}
			>
				<Flex flex={1} flexDir="column">
					<Text
						fontSize={{ base: "30px", md: "76px" }}
						fontWeight={700}
						lineHeight={"1.132em"}
						color="#fff"
						marginBottom="12px"
					>
						I’m Henrique, a<br />
						Senior Front End Developer
					</Text>

					<Text lineHeight="1.667em" fontSize="18px">
						ReactJS and React Native Engineer
					</Text>

					<Flex align={"center"}>
						<Text mr="5px" lineHeight="1.667em" fontSize="18px">
							Download my Resume{" "}
							<Text
								cursor={"pointer"}
								textDecor={"underline"}
								as={"span"}
								color="#075fe4"
								fontWeight="bold"
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
					<Text>
						With over six years of experience in ReactJS and React Native,
						I excel in crafting scalable applications through
						collaboration and innovation, driven by my passion for
						technology and commitment to best practices.
					</Text>

					<Flex flexDir="column" my="50px">
						<Text color="#fff" fontWeight={700}>
							MY WORK
						</Text>
						<Text>
							Known for relentless dedication and tireless efforts, my
							embody the epitome of hard work, consistently surpassing
							expectations with unwavering commitment and diligence.
						</Text>
					</Flex>

					<Text color="#fff" fontWeight={700}>
						FOLLOW ME
					</Text>
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
				</Flex>
			</Flex>
		</Container>
	)
}

export default Introduction
