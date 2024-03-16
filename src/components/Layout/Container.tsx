import { Flex, FlexProps } from "@chakra-ui/react"
import { ReactElement } from "react"

interface Props extends FlexProps {
	children: ReactElement
}

const Container = ({ children, ...props }: Props) => {
	return (
		<Flex
			px="24px"
			pb="50px"
			mx="auto"
			maxW={"1200px"}
			w="full"
			height="full"
			flexDir="column"
			bgColor="#1b1f24"
			{...props}
		>
			{children}
		</Flex>
	)
}

export default Container