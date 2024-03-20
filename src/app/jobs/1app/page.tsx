import CompanyPage from "@/components/CompanyPage"
import Container from "@/components/Layout/Container"
import { PageData } from "@/interface/jobs"
import { Flex } from "@chakra-ui/react"

const pageData: PageData = {
	company: "1App",
	subTitle:
		"Cell phones in our hands, we can find, learn, make and buy whenever we need. Your company with 1App",
	about: "Created in 2013, 1App Developer is a development company that has gained recognition for the quality of its products, respect for customers and commitment to results. Our company maintains a work based on ethics and responsibility, uniting talents, skills and creativity. With an effective working methodology where the client participates in the creation and evaluation of the developed project.",
	color: "#F70304",
	dutiesAndResponsibilities: `1App Developer is a renowned development company known for its unwavering commitment to
		delivering high-quality products, prioritizing customer satisfaction, and achieving exceptional
		results. Our company culture is deeply rooted in principles of ethics, responsibility, and
		collaboration, as we bring together diverse talents, skills, and creativity to drive innovation.

		At 1App Developer, we follow an effective working methodology that emphasizes client
		involvement throughout the entire project lifecycle. We believe in fostering a strong partnership
		with our clients, ensuring their active participation in the creation and evaluation of the projects
		we develop. This approach allows us to tailor our solutions to meet their unique requirements,
		resulting in highly customized and successful outcomes.`,
	tasks: [
		"Code applications solving business issues",
		"Make sure of the program operation by conducting tests; modifying program sequence and codes",
		"Code, debug, test solution to meet functional and technical specifications according to organizational quality standards",
		"Write unit-test cases, conduct test-case reviews, peer code reviews, document review comments",
		"Assist in release management process to build and deploy the application at mobile stores",
		"Support and maintenance: Provide post-development support and maintenance for the applications you develop. Address any bugs, issues, or updates promptly to ensure smooth operation and user satisfaction",
	],
	website: "https://www.linkedin.com/company/1app-developer",
	image: "/webp/1app.webp",
	logo: "/1app.png",
}

const OneAPP = () => {
	return (
		<Flex bgColor="#1b1f24">
			<Container>
				<CompanyPage pageData={pageData} />
			</Container>
		</Flex>
	)
}

export default OneAPP
