"use client"

import {
	Box,
	Button,
	Flex,
	Icon,
	Stack,
	Text,
	useMediaQuery,
} from "@chakra-ui/react"
import { ReactElement, useState } from "react"
import { FaNodeJs, FaReact } from "react-icons/fa"
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
import { TbBrandAzure, TbBrandNextjs } from "react-icons/tb"

import Container from "../Layout/Container"

interface CardProps {
	heading: string
	description: string
	icon: ReactElement
}

const SkillsList = [
	{
		heading: "ReactJS",
		icon: FaReact,
		description: "6 years of experience",
	},
	{
		heading: "React Native",
		icon: FaReact,
		description: "6 years of experience",
	},
	{
		heading: "Node JS",
		icon: FaNodeJs,
		description: "1.5 years of experience",
	},
	{
		heading: "NextJS",
		icon: TbBrandNextjs,
		description: "5 years of experience",
	},
	{
		heading: "TypeScript",
		icon: SiTypescript,
		description: "6 years of experience",
	},
	{
		heading: "JavaScript",
		icon: IoLogoJavascript,
		description: "6 years of experience",
	},
	{
		heading: "Redux",
		icon: SiRedux,
		description: "6 years of experience",
	},
	{
		heading: "GraphQL",
		icon: SiGraphql,
		description: "5 years of experience",
	},
	{
		heading: "Shopify",
		icon: SiShopify,
		description: "2 years of experience",
	},
	{
		heading: "Docker",
		icon: SiDocker,
		description: "4 years of experience",
	},
	{
		heading: "Storybook",
		icon: SiStorybook,
		description: "5 years of experience",
	},
	{
		heading: "HTML",
		icon: SiHtml5,
		description: "6 years of experience",
	},
	{
		heading: "CSS",
		icon: SiCss3,
		description: "6 years of experience",
	},
	{
		heading: "Jira",
		icon: SiJirasoftware,
		description: "6 years of experience",
	},
	{
		heading: "Bit Bucket",
		icon: SiBitbucket,
		description: "6 years of experience",
	},
	{
		heading: "Jest",
		icon: SiJest,
		description: "6 years of experience",
	},
	{
		heading: "Testing Library",
		icon: SiTestinglibrary,
		description: "4 years of experience",
	},
	{
		heading: "MongoDB",
		icon: SiMongodb,
		description: "1.5 years of experience",
	},
	{
		heading: "Postgres",
		icon: SiPostgresql,
		description: "1.5 years of experience",
	},
	{
		heading: "Adobe XD",
		icon: SiAdobexd,
		description: "6 years of experience",
	},
	{
		heading: "Figma",
		icon: SiFigma,
		description: "6 years of experience",
	},
	{
		heading: "i18n",
		icon: SiI18Next,
		description: "4 years of experience",
	},
	{
		heading: "Styled Components",
		icon: SiStyledcomponents,
		description: "5 years of experience",
	},
	{
		heading: "AWS",
		icon: SiAmazonaws,
		description: "1 year of experience",
	},
	{
		heading: "Azure",
		icon: TbBrandAzure,
		description: "2 year of experience",
	},
]

const Card = ({ heading, description, icon }: CardProps) => {
	const [isLowerThan768] = useMediaQuery("(max-width: 768px)")

	return (
		<Box
			maxW={{ base: "auto", md: "275px" }}
			w={"full"}
			borderRadius="28px"
			overflow="hidden"
			p={5}
			bgColor="#2d343f"
			transition="all .2s ease-in-out"
			cursor={"pointer"}
			_hover={{
				transform: !isLowerThan768 ? "scale(1.1)" : "",
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
	const [page, setPage] = useState(3)
	const [isLowerThan768] = useMediaQuery("(max-width: 768px)")

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
					{!isLowerThan768 ? (
						SkillsList.map((skill) => (
							<Card
								key={skill.heading}
								heading={skill.heading}
								description={skill.description}
								icon={<Icon as={skill.icon} w={10} h={10} />}
							/>
						))
					) : (
						<Flex gap={5} w="full" flexDir={"column"}>
							{SkillsList.slice(0, page).map((skill) => (
								<Card
									key={skill.heading}
									heading={skill.heading}
									description={skill.description}
									icon={<Icon as={skill.icon} w={10} h={10} />}
								/>
							))}

							{page < SkillsList.length && (
								<Button
									mt="15px"
									bgColor="#075fe4"
									color="#fff"
									onClick={() => {
										setPage((prev) => prev + 3)
									}}
								>
									<Text>Show more</Text>
								</Button>
							)}
						</Flex>
					)}
				</Flex>
			</Flex>
		</Container>
	)
}

export default Skills
