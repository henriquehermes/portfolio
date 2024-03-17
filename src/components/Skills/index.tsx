"use client"

import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react"
import Container from "../Layout/Container"
import { ReactElement } from "react"
import { FaNodeJs, FaReact } from "react-icons/fa"
import { TbBrandNextjs } from "react-icons/tb"
import { IoLogoJavascript } from "react-icons/io"
import {
	SiAdobexd,
	SiBitbucket,
	SiCss3,
	SiDocker,
	SiFigma,
	SiGraphql,
	SiHtml5,
	SiJest,
	SiJirasoftware,
	SiMongodb,
	SiPostgresql,
	SiRedux,
	SiShopify,
	SiStorybook,
	SiTestinglibrary,
	SiTypescript,
} from "react-icons/si"

interface CardProps {
	heading: string
	description: string
	icon: ReactElement
}

const Card = ({ heading, description, icon }: CardProps) => {
	return (
		<Box
			maxW={{ base: "full", md: "275px" }}
			w={"full"}
			borderRadius="28px"
			overflow="hidden"
			p={5}
			bgColor="#2d343f"
		>
			<Stack align={"start"} spacing={2}>
				<Flex
					w={16}
					h={16}
					align={"center"}
					justify={"center"}
					color={"white"}
					rounded={"full"}
					bgColor="#075FE4"
				>
					{icon}
				</Flex>
				<Box mt={2}>
					<Text fontSize="38px" fontWeight={700}>
						{heading}
					</Text>
					<Text mt={1} fontSize={"20px"} color="#c3cad5">
						{description}
					</Text>
				</Box>
			</Stack>
		</Box>
	)
}

const Skills = () => {
	return (
		<Container backgroundColor="transparent">
			<Flex color="#fff" mt="100px" flexDir={"column"}>
				<Flex gap={15} fontWeight="700" fontSize={"20px"}>
					<Text color="#075fe4">/</Text>
					<Text>MY SKILLS</Text>
				</Flex>

				<Flex mt="30px" flexWrap="wrap" gridGap={6} justify="center">
					<Card
						heading={"ReactJS"}
						icon={<Icon as={FaReact} w={10} h={10} />}
						description={"6 years of experience"}
					/>

					<Card
						heading={"React Native"}
						icon={<Icon as={FaReact} w={10} h={10} />}
						description={"6 years of experience"}
					/>
					<Card
						heading={"Node JS"}
						icon={<Icon as={FaNodeJs} w={10} h={10} />}
						description={"1.5 years of experience"}
					/>
					<Card
						heading={"NextJS"}
						icon={<Icon as={TbBrandNextjs} w={10} h={10} />}
						description={"5 years of experience"}
					/>

					<Card
						heading={"TypeScript"}
						icon={<Icon as={SiTypescript} w={10} h={10} />}
						description={"6 years of experience"}
					/>

					<Card
						heading={"JavaScript"}
						icon={<Icon as={IoLogoJavascript} w={10} h={10} />}
						description={"6 years of experience"}
					/>

					<Card
						heading={"Redux"}
						icon={<Icon as={SiRedux} w={10} h={10} />}
						description={"6 years of experience"}
					/>

					<Card
						heading={"GraphQL"}
						icon={<Icon as={SiGraphql} w={10} h={10} />}
						description={"5 years of experience"}
					/>

					<Card
						heading={"Shopify"}
						icon={<Icon as={SiShopify} w={10} h={10} />}
						description={"2 years of experience"}
					/>

					<Card
						heading={"Docker"}
						icon={<Icon as={SiDocker} w={10} h={10} />}
						description={"4 years of experience"}
					/>

					<Card
						heading={"Storybook"}
						icon={<Icon as={SiStorybook} w={10} h={10} />}
						description={"5 years of experience"}
					/>

					<Card
						heading={"HTML"}
						icon={<Icon as={SiHtml5} w={10} h={10} />}
						description={"6 years of experience"}
					/>

					<Card
						heading={"CSS"}
						icon={<Icon as={SiCss3} w={10} h={10} />}
						description={"6 years of experience"}
					/>

					<Card
						heading={"Jira"}
						icon={<Icon as={SiJirasoftware} w={10} h={10} />}
						description={"6 years of experience"}
					/>

					<Card
						heading={"Bit Bucket"}
						icon={<Icon as={SiBitbucket} w={10} h={10} />}
						description={"6 years of experience"}
					/>

					<Card
						heading={"Jest"}
						icon={<Icon as={SiJest} w={10} h={10} />}
						description={"6 years of experience"}
					/>

					<Card
						heading={"Testing Library"}
						icon={<Icon as={SiTestinglibrary} w={10} h={10} />}
						description={"4 years of experience"}
					/>

					<Card
						heading={"MongoDB"}
						icon={<Icon as={SiMongodb} w={10} h={10} />}
						description={"1.5 years of experience"}
					/>

					<Card
						heading={"Postgres"}
						icon={<Icon as={SiPostgresql} w={10} h={10} />}
						description={"1.5 years of experience"}
					/>

					<Card
						heading={"Adobe XD"}
						icon={<Icon as={SiAdobexd} w={10} h={10} />}
						description={"6 years of experience"}
					/>

					<Card
						heading={"Figma"}
						icon={<Icon as={SiFigma} w={10} h={10} />}
						description={"6 years of experience"}
					/>
				</Flex>
			</Flex>
		</Container>
	)
}

export default Skills
