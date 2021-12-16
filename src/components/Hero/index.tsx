import {
	Container,
	Stack,
	Flex,
	Box,
	Heading,
	Text,
	Image,
	useColorModeValue,
	Center
} from '@chakra-ui/react';
import { Button } from '../../common/Button';
import { Link } from 'react-scroll';
const DURATION = 1000;

type HomeProps = {
	title: string;
	subtitle: string;
	button: string;
}

export default function HomeHero({ title, subtitle, button }: HomeProps) {
	const icp = useColorModeValue("#18216d", "white");
	return (
		<Container maxW={'7xl'} id="intro">
			<Stack
				align={'center'}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 20, md: 28 }}
				direction={{ base: 'column', md: 'row' }}>
				<Stack flex={1} spacing={{ base: 5, md: 10 }} mb={3}>
					<Heading
						lineHeight={1.1}
						fontWeight={600}
						fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
						color={icp}
					>
						<Text
							as={'span'}
							position={'relative'}
							_after={{
								content: "''",
								width: 'full',
								height: '30%',
								position: 'absolute',
								bottom: 1,
								left: 0,
								bg: 'purple.400',
								zIndex: -1,
							}}>
							{title}
						</Text>
						<Text as="span">, 2021.</Text>
						<br />
					</Heading>
					<Text color={icp}>
						{subtitle}
					</Text>
					<Stack
						spacing={{ base: 4, sm: 6 }}
						direction='column'
					>
						<Link
							to="contact"
							spy={false}
							smooth="easeInOutQuart"
							duration={DURATION}
							activeClass="active"
							color="white"
						>
							<Button bg="purple.500">
								{button}
							</Button>
						</Link>
					</Stack>
				</Stack>
				<Flex
					flex={1}
					justify={'center'}
					align={'center'}
					w={'full'}>
					<Box
						rounded={'2xl'}
						width={'full'}
					>
						<Image
							alt={'Hero Image'}
							fit={'cover'}
							align={'center'}
							w={'100%'}
							h={'100%'}
							src={
								'/img/svg/undraw_group_video_re_btu7.svg'
							}
						/>
					</Box>
				</Flex>
			</Stack>
			<Center>
				<span className="scroll-btn">
					<Link
						to="sobre"
						spy={false}
						smooth="easeInOutQuart"
						duration={DURATION}
						activeClass="active"
						color="white">
						<span className="mouse">
							<span>
							</span>
						</span>
					</Link>
				</span>
			</Center>
		</Container>
	);
}

// export const Blob = (props: IconProps) => {
// 	return (
// 		<Icon
// 			width={'100%'}
// 			viewBox="0 0 578 440"
// 			fill="none"
// 			xmlns="http://www.w3.org/2000/svg"
// 			{...props}>
// 			<path
// 				fillRule="evenodd"
// 				clipRule="evenodd"
// 				d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
// 				fill="currentColor"
// 			/>
// 		</Icon>
// 	);
// };