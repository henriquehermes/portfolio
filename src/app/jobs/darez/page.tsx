import CompanyPage from "@/components/CompanyPage"
import Container from "@/components/Layout/Container"
import { PageData } from "@/interface/jobs"
import { Flex } from "@chakra-ui/react"

const pageData: PageData = {
	company: "Darez",
	subTitle: "Become one digital entrepreneur",
	about: "Get access to online sales training, a platform integrated with the main sales channels in Brazil and profitable products to sell without stock.",
	color: "#0C2347",
	dutiesAndResponsibilities:
		"Dolado (Darez) is an innovative B2B company at the forefront of e-commerce, leveraging cutting-edge technologies to redefine the online shopping experience. Our dedicated team is proficient in NextJS with TypeScript, ensuring the development of a robust and dynamic platform. We have seamlessly integrated the powerful Shopify API, providing seamless connectivity and enhancing functionality. Additionally, our expertise extends to developing pilot projects using React Native, enabling our clients to tap into the rapidly growing mobile market. At Dolado, we are committed to delivering exceptional solutions that propel businesses forward in the digital landscape.",
	tasks: [
		"Develop software solutions by studying information needs, conferring with users, studying systems flow, data usage, and work processes, investigating problem areas, and following the software development lifecycle.",
		"Determine operational feasibility by evaluating analysis, problem definitions, requirements, solution development, and proposed solutions.",
		"Document and demonstrate solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments, and clear code.",
		"Prepare and install solutions by determining and designing system specifications, standards, and programming",
		"Improve operations by conducting systems analysis and recommending changes in policies and procedures.",
		"Protect operations by maintaining confidentiality of information.",
		"Provide information by collecting, analyzing, and summarizing development and service issues.",
		"Accomplish organization mission by completing related results as needed.",
		"Mentor junior and mid-level developers.",
		"Collaborate with team to brainstorm and create new products.",
		"Grow development teams by interviewing, recruiting, and hiring.",
		"Make informed decisions quickly and take ownership of services and applications at scale.",
	],
	website: "https://www.dolado.com.br/",
	image: "/webp/dolado.webp",
	logo: "/svg/dolado.svg",
}

const Darez = () => {
	return (
		<Flex bgColor="#1b1f24">
			<Container>
				<CompanyPage pageData={pageData} />
			</Container>
		</Flex>
	)
}

export default Darez
