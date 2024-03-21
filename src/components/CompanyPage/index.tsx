"use client"

import { PageData } from "@/interface/jobs"
import { Flex } from "@chakra-ui/react"
import { motion } from "framer-motion"

import Description from "./Description"
import Hero from "./Hero"

export default function CompanyPage({ pageData }: { pageData: PageData }) {
	return (
		<Flex bgColor="#1b1f24" flexDir={"column"}>
			<motion.div
				initial={{
					opacity: 0,
					translateY: "150px",
				}}
				whileInView={{
					opacity: 1,
					translateY: "0px",
					transition: {
						duration: 0.5,
					},
				}}
			>
				<Hero pageData={pageData} />
			</motion.div>
			<Description pageData={pageData} />
		</Flex>
	)
}
