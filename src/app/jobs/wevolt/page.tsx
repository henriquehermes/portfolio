import CompanyPage from "@/components/CompanyPage"
import Container from "@/components/Layout/Container"
import { PageData } from "@/interface/jobs"
import { Flex } from "@chakra-ui/react"

const pageData: PageData = {
	company: "Wevolt",
	subTitle: "Electrical Vehicles",
	about: "The Wevolt App makes it easy for electric vehicle drivers to locate and use charge points and for residential and commercial Charge Point Owners to monetise their chargers.",
	color: "#89dc65",
	dutiesAndResponsibilities:
		"In my role, I collaborated closely with cross-functional teams, including designers and backend developers, to transform complex requirements into intuitive and responsive interfaces. I leverage the power of ReactJS and React Native frameworks to build scalable and performant applications that meet the unique demands of each project.",
	tasks: [
		"Checked the client requirements related to software program, maintenance and re-developments.",
		"Evaluated the factors such as end user information needs, and costing related to the software project.",
		"Studied information needs, system flow, data usage, investigating problem areas, work process and follow the software development lifecycle.",
		"Developed and wrote high quality coding that meet customer requirements.",
		"Creating test programs according to specifications provided.",
		"Suggested improvements to usage of applications and their design.",
		"Providing support, maintenance and enhancement to new and existing systems.",
		"Prepared the reports and submit the completed work to the client.",
		"Tested the software, solved the errors and fixed all issues.",
		"Wrote/modified program codes as per program design and database structures.",
		"Provided latest updates on the client server and provide user document to client how to do changes.",
		"Assisted and supported other team members on multiple projects.",
		"Accurately documented all development work in accordance to agreed standards.",
	],
	website: "https://wevolt.com.au/",
	image: "/webp/wevolt.webp",
	logo: "/webp/wevolt-logo.webp",
	duration: "1.3 years",
	client: "Wevolt",
	reference: {
		number: "+61 862557901",
		name: "Jagroop Gill",
		email: "jagroop@wevolt.com.au",
	},
	photos: [
		"/projects/wevolt/wevolt-1.webp",
		"/projects/wevolt/wevolt-2.webp",
		"/projects/wevolt/wevolt-5.jpg",
		"/projects/wevolt/wevolt-3.webp",
		"/projects/wevolt/wevolt-4.webp",
		"/projects/wevolt/wevolt-6.webp",
		"/projects/wevolt/wevolt-7.webp",
	],
}

const Wevolt = () => {
	return (
		<Flex bgColor="#1b1f24">
			<Container>
				<CompanyPage pageData={pageData} />
			</Container>
		</Flex>
	)
}

export default Wevolt
