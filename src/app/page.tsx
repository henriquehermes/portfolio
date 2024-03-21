"use client"

import { useEffect, useState } from "react"
import { MdKeyboardArrowUp } from "react-icons/md"

import AboutMe from "@/components/AboutMe"
import Contact from "@/components/Contact"
import Introduction from "@/components/Introduction"
import Portfolio from "@/components/Portfolio"
import Skills from "@/components/Skills"
import Testimonials from "@/components/Testimonials"
import WorkedOn from "@/components/WorkedOn"
import { Fade, Flex, IconButton } from "@chakra-ui/react"
import { motion } from "framer-motion"

export default function Home() {
	const [isVisible, setIsVisible] = useState(false)
	const isBrowser = () => typeof window !== "undefined" //The approach recommended by Next.js

	function scrollToTop() {
		if (!isBrowser()) return
		window.scrollTo({ top: 0, behavior: "smooth" })
	}

	const handleScroll = () => {
		// Show the button when the user scrolls down
		if (window.scrollY > 150) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	useEffect(() => {
		// Add scroll event listener when the component mounts
		window.addEventListener("scroll", handleScroll)

		// Remove the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<Flex mx="auto" w="full" height="full" flexDir="column" bgColor="#1b1f24">
			<Flex flexDir={"column"}>
				<Introduction />
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
					<AboutMe />
				</motion.div>

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
					<Portfolio />
				</motion.div>

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
					<Skills />
				</motion.div>

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
					<WorkedOn />
				</motion.div>

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
					<Testimonials />
				</motion.div>

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
					<Contact />
				</motion.div>

				<Fade in={isVisible}>
					<IconButton
						zIndex={999}
						aria-label="scroll-top"
						fontSize={"30px"}
						icon={<MdKeyboardArrowUp />}
						onClick={scrollToTop}
						w="60px"
						h="60px"
						pos={"fixed"}
						bottom={"16px"}
						left="16px"
						bgColor={"#075fe4"}
						color="#fff"
						borderRadius={"full"}
					/>
				</Fade>
			</Flex>
		</Flex>
	)
}
