import CompanyPage from "@/components/CompanyPage"
import Container from "@/components/Layout/Container"
import { PageData } from "@/interface/jobs"
import { Flex } from "@chakra-ui/react"

const pageData: PageData = {
	company: "InfraTI",
	subTitle: "Connectivity beyond limits",
	about: "InfraTI is an integrator of services and solutions for Connectivity, Cybersecurity and Collaboration. We offer advanced solutions such as high-performance connectivity, comprehensive cyber threat protection and integrated communications tools. We work in partnership with the main manufacturers on the market and constantly invest in the certification of our team to understand their needs and deliver excellence in each project.",
	color: "#013AB6",
	dutiesAndResponsibilities: `InfraTI is a dynamic company specializing in developing cutting-edge applications that seamlessly integrate with the CISCO platform. During my tenure at InfraTI, I played a pivotal role in the development of a robust dashboard platform, utilizing the power of ReactJS.

		From the project's inception, I actively participated in the design process, contributing valuable insights and expertise to ensure the platform's success. This involvement allowed me to collaborate closely with stakeholders, understand their unique requirements, and translate them into innovative and user-friendly solutions.

		In addition to the dashboard platform, I had the opportunity to work on pilot projects where I leveraged both ReactJS and React Native. These projects not only provided me with an opportunity to showcase my technical skills but also allowed me to explore the versatility of these frameworks and deliver exceptional user experiences across web and mobile platforms.

		At InfraTI, we pride ourselves on our commitment to staying at the forefront of technology, delivering solutions that seamlessly integrate with the CISCO platform. Through my contributions, I have consistently demonstrated a passion for excellence, a meticulous attention to detail, and an unwavering dedication to creating impactful applications that meet and exceed the expectations of our clients.`,
	tasks: [
		"Writing and maintaining program code to meet system requirements, system designs, and technical specifications in accordance with quality accredited standards",
		"Testing, debugging, diagnosing, and correcting errors and faults in an application's programming language within established testing protocols, guidelines, and quality standards to ensure programs and applications perform to specification",
		"Writing, updating, and maintaining technical program, end user documentation, and operational procedures",
		"Release management process to build and deploy the application at mobile stores",
		"Support and maintenance: Provide post-development support and maintenance for the applications you develop. Address any bugs, issues, or updates promptly to ensure smooth operation and user satisfaction",
	],
	website: "https://infrati.com.br/",
	image: "/webp/infrati.webp",
	logo: "/infrati-logo.png",
	client: "InfraTI",
	duration: "7 months",
	reference: {
		number: "+55 51 99342-7995",
		name: "Fernando Nachtigall",
		email: "Fernando.nachtigall@infrati.com.br",
	},
	photos: [
		"/projects/infrati/infrati-1.webp",
		"/projects/infrati/infrati-4.webp",
		"/projects/infrati/infrati-5.webp",
		"/projects/infrati/infrati-7.webp",
		"/projects/infrati/infrati-3.webp",
		"/projects/infrati/infrati-6.webp",
		"/projects/infrati/infrati-2.webp",
	],
}

const InfraTI = () => {
	return (
		<Flex bgColor="#1b1f24">
			<Container>
				<CompanyPage pageData={pageData} />
			</Container>
		</Flex>
	)
}

export default InfraTI
