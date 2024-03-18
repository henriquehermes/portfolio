"use client"

import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react"
import Container from "../Layout/Container"
import { ReactElement } from "react"
import { FaNodeJs, FaReact } from "react-icons/fa"
import { TbBrandAzure, TbBrandNextjs } from "react-icons/tb"
import { IoLogoJavascript } from "react-icons/io"
import {
	SiAdobexd,
	SiAmazonaws,
	SiBitbucket,
	SiCss3,
	SiDocker,
	SiFigma,
	SiGraphql,
	SiHtml5,
	SiI18Next,
	SiJest,
	SiJirasoftware,
	SiMongodb,
	SiPostgresql,
	SiRedux,
	SiShopify,
	SiStorybook,
	SiStyledcomponents,
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
			m={{ base: "10px", md: 0 }}
			maxW={{ base: "auto", md: "275px" }}
			w={"full"}
			borderRadius="28px"
			overflow="hidden"
			p={5}
			bgColor="#2d343f"
			transition="all .2s ease-in-out"
			cursor={"pointer"}
			_hover={{
				transform: "scale(1.1)",
				backgroundColor: "#075FE4",
				color: "#fff",
			}}
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
					<Text lineHeight={"1.234em"} fontSize="25px" fontWeight={700}>
						{heading}
					</Text>
					<Text mt={1} fontSize={"16px"} color="#c3cad5">
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
			<Flex
				id="skills"
				color="#fff"
				mt={{ base: "10px", md: "100px" }}
				flexDir={"column"}
			>
				<Flex gap={15} fontWeight="700" fontSize={"20px"}>
					<Text color="#075fe4">/</Text>
					<Text>MY SKILLS</Text>
				</Flex>

				<Flex
					position="relative"
					zIndex="1"
					mt="30px"
					flexWrap="wrap"
					gridGap={{ base: 1, md: 2, lg: 4 }}
					justify="center"
				>
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

					<Card
						heading={"i18n"}
						icon={<Icon as={SiI18Next} w={10} h={10} />}
						description={"4 years of experience"}
					/>

					<Card
						heading={"Styled Components"}
						icon={<Icon as={SiStyledcomponents} w={10} h={10} />}
						description={"5 years of experience"}
					/>

					<Card
						heading={"AWS"}
						icon={<Icon as={SiAmazonaws} w={10} h={10} />}
						description={"1 year of experience"}
					/>

					<Card
						heading={"Azure"}
						icon={<Icon as={TbBrandAzure} w={10} h={10} />}
						description={"2 year of experience"}
					/>
				</Flex>
			</Flex>
		</Container>
	)
}

export default Skills
