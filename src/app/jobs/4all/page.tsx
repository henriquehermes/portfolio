import CompanyPage from "@/components/CompanyPage"
import Container from "@/components/Layout/Container"
import { PageData } from "@/interface/jobs"
import { Flex } from "@chakra-ui/react"

const pageData: PageData = {
	company: "4all",
	subTitle: "Unlock your purchasing and payments journey",
	about: "Technology and solutions for the purchase and payment journey.",
	color: "#13E58A",
	dutiesAndResponsibilities:
		"As a ReactJS and React Native Engineer, I have had the privilege of working on a project that focused on revolutionizing the financial sector. Within this dynamic environment, I played a pivotal role in developing web projects using ReactJS and crafting mobile applications using React Native. At DX.CO (A company from 4all), our overarching mission is to positively transform the daily lives of individuals through exceptional digital products and services. To achieve this, we have 	established a Technology Hub that nurtures and invests in sector-specific startups, driving digital transformation forward. Our close integration with the Investment Venture and strategic partners creates a powerful ecosystem that fuels collaboration, inspires innovation, and facilitates meaningful connections vital for the success of our projects.",
	tasks: [
		"Writing and maintaining program code to meet system requirements, system designs, and technical specifications in accordance with quality accredited standards",
		"Testing, debugging, diagnosing, and correcting errors and faults in an application's programming language within established testing protocols, guidelines, and quality standards to ensure programs and applications perform to specification",
		"Writing, updating, and maintaining technical program, end user documentation, and operational procedures",
		"Release management process to build and deploy the application at mobile stores",
		"Support and maintenance: Provide post-development support and maintenance for the applications you develop. Address any bugs, issues, or updates promptly to ensure smooth operation and user satisfaction",
		"Mentor program promoted a culture of continuous learning and professional development among junior developers. Encourage them to attend conferences, participate in workshops, take online courses, and engage in relevant communities to stay updated with the latest trends and advancements in ReactJS and React Native.",
	],
	website: "https://4all.com/",
	image: "/webp/4all.webp",
	logo: "/4all-logo.png",
}

const fourAll = () => {
	return (
		<Flex bgColor="#1b1f24">
			<Container>
				<CompanyPage pageData={pageData} />
			</Container>
		</Flex>
	)
}

export default fourAll
